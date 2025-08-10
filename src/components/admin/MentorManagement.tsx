
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Star } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const handleSubmit = () => {
    addMentor({
      name: form.name,
      domain: form.domain,
      rating: form.rating,
      sessions: form.sessions,
      image: form.image,
      goodFeedback: form.goodFeedback,
      badFeedback: form.badFeedback,
    });
    setOpen(false);
    setForm({ name: "", domain: "JEE", rating: 4.5, sessions: 0, image: "", goodFeedback: [], badFeedback: [] });
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
            <div className="grid grid-cols-1 gap-3 py-2">
              <Input placeholder="Mentor name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Select value={form.domain} onValueChange={(v) => setForm({ ...form, domain: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="JEE">JEE</SelectItem>
                  <SelectItem value="NEET">NEET</SelectItem>
                  <SelectItem value="UPSC">UPSC</SelectItem>
                  <SelectItem value="GATE">GATE</SelectItem>
                </SelectContent>
              </Select>
              <Input type="number" step="0.1" placeholder="Rating (0-5)" value={form.rating} onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) })} />
              <Input type="number" placeholder="Sessions conducted" value={form.sessions} onChange={(e) => setForm({ ...form, sessions: parseInt(e.target.value || "0") })} />
              <Input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
              <Textarea placeholder="Good feedback (one per line, up to 10)" onChange={(e) => setForm({ ...form, goodFeedback: e.target.value.split("\n").filter(Boolean).slice(0,10) })} />
              <Textarea placeholder="Bad feedback (one per line, up to 10)" onChange={(e) => setForm({ ...form, badFeedback: e.target.value.split("\n").filter(Boolean).slice(0,10) })} />
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
                  <TableCell className="font-medium">{mentor.name}</TableCell>
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
                      <Button variant="outline" size="sm" className="text-red-600" onClick={() => removeMentor(mentor.id)}>
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