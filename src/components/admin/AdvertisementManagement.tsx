import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Eye, Upload } from "lucide-react";
import { toast } from "sonner";

interface Advertisement {
  id: string;
  title: string;
  imageUrl: string;
  redirectUrl: string;
  isActive: boolean;
  createdAt: string;
  description?: string;
}

const AdvertisementManagement = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([
    {
      id: "1",
      title: "1 on 1 Mentorship Program",
      imageUrl: "/assets/advertisement-banner.jpg",
      redirectUrl: "/mentors",
      isActive: true,
      createdAt: "2024-01-20",
      description: "Promote our premium mentorship program"
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingAd, setEditingAd] = useState<Advertisement | null>(null);
  const [newAd, setNewAd] = useState({
    title: "",
    imageUrl: "",
    redirectUrl: "/mentors",
    description: "",
    isActive: true
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you would upload to a server
      const imageUrl = URL.createObjectURL(file);
      setNewAd(prev => ({ ...prev, imageUrl }));
      toast.success("Image uploaded successfully!");
    }
  };

  const handleCreateAd = () => {
    if (!newAd.title || !newAd.imageUrl) {
      toast.error("Please fill in all required fields");
      return;
    }

    const advertisement: Advertisement = {
      id: Date.now().toString(),
      ...newAd,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setAdvertisements(prev => [advertisement, ...prev]);
    setNewAd({
      title: "",
      imageUrl: "",
      redirectUrl: "/mentors",
      description: "",
      isActive: true
    });
    setIsCreating(false);
    toast.success("Advertisement created successfully!");
  };

  const handleUpdateAd = () => {
    if (!editingAd) return;

    setAdvertisements(prev => prev.map(ad => 
      ad.id === editingAd.id ? editingAd : ad
    ));
    setEditingAd(null);
    toast.success("Advertisement updated successfully!");
  };

  const handleDeleteAd = (id: string) => {
    setAdvertisements(prev => prev.filter(ad => ad.id !== id));
    toast.success("Advertisement deleted successfully!");
  };

  const toggleAdStatus = (id: string) => {
    setAdvertisements(prev => prev.map(ad => 
      ad.id === id ? { ...ad, isActive: !ad.isActive } : ad
    ));
    toast.success("Advertisement status updated!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Advertisement Management</h2>
          <p className="text-muted-foreground">Manage advertisement banners for the booking sessions page</p>
        </div>
        <Button onClick={() => setIsCreating(true)} disabled={isCreating}>
          Create Advertisement
        </Button>
      </div>

      {(isCreating || editingAd) && (
        <Card>
          <CardHeader>
            <CardTitle>{editingAd ? "Edit Advertisement" : "Create New Advertisement"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={editingAd ? editingAd.title : newAd.title}
                  onChange={(e) => {
                    if (editingAd) {
                      setEditingAd({ ...editingAd, title: e.target.value });
                    } else {
                      setNewAd(prev => ({ ...prev, title: e.target.value }));
                    }
                  }}
                  placeholder="Enter advertisement title"
                />
              </div>
              <div>
                <Label htmlFor="redirectUrl">Redirect URL *</Label>
                <Input
                  id="redirectUrl"
                  value={editingAd ? editingAd.redirectUrl : newAd.redirectUrl}
                  onChange={(e) => {
                    if (editingAd) {
                      setEditingAd({ ...editingAd, redirectUrl: e.target.value });
                    } else {
                      setNewAd(prev => ({ ...prev, redirectUrl: e.target.value }));
                    }
                  }}
                  placeholder="/mentors"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editingAd ? editingAd.description || "" : newAd.description}
                onChange={(e) => {
                  if (editingAd) {
                    setEditingAd({ ...editingAd, description: e.target.value });
                  } else {
                    setNewAd(prev => ({ ...prev, description: e.target.value }));
                  }
                }}
                placeholder="Enter advertisement description"
              />
            </div>

            <div>
              <Label htmlFor="image">Advertisement Image *</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/80"
                />
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
              {(editingAd?.imageUrl || newAd.imageUrl) && (
                <div className="mt-2">
                  <img 
                    src={editingAd ? editingAd.imageUrl : newAd.imageUrl} 
                    alt="Preview" 
                    className="w-full max-w-md h-32 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={editingAd ? editingAd.isActive : newAd.isActive}
                onCheckedChange={(checked) => {
                  if (editingAd) {
                    setEditingAd({ ...editingAd, isActive: checked });
                  } else {
                    setNewAd(prev => ({ ...prev, isActive: checked }));
                  }
                }}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>

            <div className="flex gap-2">
              <Button onClick={editingAd ? handleUpdateAd : handleCreateAd}>
                {editingAd ? "Update Advertisement" : "Create Advertisement"}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsCreating(false);
                  setEditingAd(null);
                  setNewAd({
                    title: "",
                    imageUrl: "",
                    redirectUrl: "/mentors",
                    description: "",
                    isActive: true
                  });
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Existing Advertisements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Preview</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Redirect URL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advertisements.map((ad) => (
                <TableRow key={ad.id}>
                  <TableCell>
                    <img 
                      src={ad.imageUrl} 
                      alt={ad.title}
                      className="w-16 h-10 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{ad.title}</TableCell>
                  <TableCell>{ad.redirectUrl}</TableCell>
                  <TableCell>
                    <Badge variant={ad.isActive ? "default" : "secondary"}>
                      {ad.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>{ad.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleAdStatus(ad.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingAd(ad)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteAd(ad.id)}
                      >
                        <Trash2 className="w-4 h-4" />
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

export default AdvertisementManagement;