
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Star, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useMentors, MentorItem } from "@/contexts/MentorContext";

const MentorManagement = () => {
  const { mentors, addMentor, removeMentor } = useMentors();
  const [domain, setDomain] = useState<string>("all");

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<MentorItem, "id">>({
    name: "",
    domain: "JEE",
    rating: 4.5,
    sessions: 0,
    image: "",
    goodFeedback: [],
    badFeedback: []
  });

  const filtered = useMemo(() => {
    if (domain === "all") return mentors;
    return mentors.filter((m) => m.domain === domain);
  }, [mentors, domain]);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ));

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setForm(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
      toast.success("Image uploaded successfully!");
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.domain) {
      toast.error("Please fill in name and domain");
      return;
    }
    
    addMentor({
      name: form.name,
      domain: form.domain,
      rating: form.rating,
      sessions: form.sessions,
      image: form.image || "/placeholder.svg?height=200&width=200",
      goodFeedback: form.goodFeedback,
      badFeedback: form.badFeedback,
    });
    setOpen(false);
    setForm({ name: "", domain: "JEE", rating: 4.5, sessions: 0, image: "", goodFeedback: [], badFeedback: [] });
    toast.success("Mentor added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Mentor Details</h2>
          <Select defaultValue="all" onValueChange={setDomain}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Domains" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Domains</SelectItem>
              <SelectItem value="JEE">JEE</SelectItem>
              <SelectItem value="NEET">NEET</SelectItem>
              <SelectItem value="UPSC">UPSC</SelectItem>
              <SelectItem value="GATE">GATE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Add New Mentor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Mentor</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="mentor-name">Mentor Name *</Label>
                <Input 
                  id="mentor-name"
                  placeholder="Enter mentor name" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mentor-domain">Teaching Domain *</Label>
                <Select value={form.domain} onValueChange={(v) => setForm({ ...form, domain: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="JEE">JEE</SelectItem>
                    <SelectItem value="NEET">NEET</SelectItem>
                    <SelectItem value="UPSC">UPSC</SelectItem>
                    <SelectItem value="GATE">GATE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mentor-rating">Performance Rating (0-5)</Label>
                  <Input 
                    id="mentor-rating"
                    type="number" 
                    step="0.1" 
                    min="0" 
                    max="5"
                    placeholder="4.5" 
                    value={form.rating} 
                    onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) || 0 })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentor-sessions">Sessions Conducted</Label>
                  <Input 
                    id="mentor-sessions"
                    type="number" 
                    placeholder="0" 
                    value={form.sessions} 
                    onChange={(e) => setForm({ ...form, sessions: parseInt(e.target.value || "0") })} 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mentor-image">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="mentor-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('mentor-image')?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload size={16} />
                    Upload Image
                  </Button>
                  {form.image && (
                    <img 
                      src={form.image} 
                      alt="Mentor preview" 
                      className="w-16 h-16 object-cover rounded-full border"
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload a profile picture for the mentor
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="good-feedback">Positive Feedback</Label>
                <Textarea 
                  id="good-feedback"
                  placeholder="Enter positive feedback (one per line, up to 10)" 
                  onChange={(e) => setForm({ ...form, goodFeedback: e.target.value.split("\n").filter(Boolean).slice(0,10) })} 
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bad-feedback">Areas for Improvement</Label>
                <Textarea 
                  id="bad-feedback"
                  placeholder="Enter constructive feedback (one per line, up to 10)" 
                  onChange={(e) => setForm({ ...form, badFeedback: e.target.value.split("\n").filter(Boolean).slice(0,10) })} 
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSubmit}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mentor Name</TableHead>
                <TableHead>Mentor ID</TableHead>
                <TableHead>Teaching Domain</TableHead>
                <TableHead>Performance Rating</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((mentor) => (
                <TableRow key={mentor.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <img 
                        src={mentor.image || "/placeholder.svg?height=40&width=40"} 
                        alt={mentor.name}
                        className="w-10 h-10 object-cover rounded-full border"
                      />
                      <span>{mentor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{mentor.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{mentor.domain}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(mentor.rating)}</div>
                      <span className="text-sm">({mentor.rating})</span>
                    </div>
                  </TableCell>
                  <TableCell>{mentor.sessions}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit size={14} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 hover:bg-red-50" 
                        onClick={() => {
                          removeMentor(mentor.id);
                          toast.success("Mentor removed successfully!");
                        }}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorManagement;