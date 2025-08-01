import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Eye, Plus, Edit, Trash2, Upload, Instagram, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  status: 'draft' | 'published';
  socialMedia: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

interface SocialMediaLinks {
  instagram: string;
  twitter: string;
  linkedin: string;
}

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Rugby World Cup 2023 Semi-Finals",
      content: "Create a blog post subtitle that summarizes your post...",
      category: "Sports",
      author: "Admin",
      date: "2024-01-15",
      image: "/placeholder.svg?height=400&width=600",
      status: 'published',
      socialMedia: {
        instagram: "https://instagram.com/rugbyworld",
        twitter: "https://twitter.com/rugbyworld",
        linkedin: "https://linkedin.com/company/rugbyworld"
      }
    },
    {
      id: "2",
      title: "Study Tips for JEE Preparation",
      content: "Preparing for JEE requires dedication, strategy...",
      category: "Education",
      author: "Dr. Sharma",
      date: "2024-01-10",
      image: "/placeholder.svg?height=400&width=600",
      status: 'published',
      socialMedia: {
        instagram: "https://instagram.com/jeestudytips",
        twitter: "https://twitter.com/jeestudytips",
        linkedin: "https://linkedin.com/company/jeestudytips"
      }
    }
  ]);

  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinks>({
    instagram: "https://instagram.com/mentxtv",
    twitter: "https://twitter.com/mentxtv",
    linkedin: "https://linkedin.com/company/mentxtv"
  });

  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({
    title: "",
    content: "",
    category: "",
    author: "Admin",
    image: "",
    status: 'draft',
    socialMedia: {
      instagram: "",
      twitter: "",
      linkedin: ""
    }
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [editingBlog, setEditingBlog] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewBlog(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
      toast.success("Image uploaded successfully!");
    }
  };

  const handleCreateBlog = () => {
    if (!newBlog.title || !newBlog.content || !newBlog.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    const blog: BlogPost = {
      id: Date.now().toString(),
      title: newBlog.title!,
      content: newBlog.content!,
      category: newBlog.category!,
      author: newBlog.author!,
      date: new Date().toISOString().split('T')[0],
      image: newBlog.image || "/placeholder.svg?height=400&width=600",
      status: newBlog.status as 'draft' | 'published',
      socialMedia: newBlog.socialMedia!
    };

    setBlogs(prev => [...prev, blog]);
    setNewBlog({
      title: "",
      content: "",
      category: "",
      author: "Admin",
      image: "",
      status: 'draft',
      socialMedia: {
        instagram: "",
        twitter: "",
        linkedin: ""
      }
    });
    toast.success("Blog post created successfully!");
  };

  const handleDeleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
    toast.success("Blog post deleted successfully!");
  };

  const handleUpdateSocialMedia = () => {
    toast.success("Social media links updated successfully!");
  };

  const BlogPreview = ({ blog }: { blog: Partial<BlogPost> }) => (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        {blog.image && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardContent className="p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
              <span>By {blog.author}</span>
              <span>{blog.category}</span>
              <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                {blog.status}
              </Badge>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{blog.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Create New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="edit" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Blog post title"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={newBlog.category}
                      onValueChange={(value) => setNewBlog(prev => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Sports">Sports</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Health">Health</SelectItem>
                        <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      placeholder="Author name"
                      value={newBlog.author}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, author: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newBlog.status}
                      onValueChange={(value: 'draft' | 'published') => setNewBlog(prev => ({ ...prev, status: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Thumbnail Image</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('image')?.click()}
                      className="flex items-center gap-2"
                    >
                      <Upload size={16} />
                      Upload Image
                    </Button>
                    {newBlog.image && (
                      <img 
                        src={newBlog.image} 
                        alt="Preview" 
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog content here..."
                    value={newBlog.content}
                    onChange={(e) => setNewBlog(prev => ({ ...prev, content: e.target.value }))}
                    rows={10}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-semibold">Social Media Links</Label>
                  
                  <div className="space-y-2">
                    <Label htmlFor="blog-instagram" className="flex items-center gap-2">
                      <Instagram size={16} className="text-pink-600" />
                      Instagram
                    </Label>
                    <Input
                      id="blog-instagram"
                      placeholder="https://instagram.com/your-handle"
                      value={newBlog.socialMedia?.instagram || ""}
                      onChange={(e) => setNewBlog(prev => ({ 
                        ...prev, 
                        socialMedia: { ...prev.socialMedia!, instagram: e.target.value }
                      }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="blog-twitter" className="flex items-center gap-2">
                      <Twitter size={16} className="text-blue-400" />
                      Twitter
                    </Label>
                    <Input
                      id="blog-twitter"
                      placeholder="https://twitter.com/your-handle"
                      value={newBlog.socialMedia?.twitter || ""}
                      onChange={(e) => setNewBlog(prev => ({ 
                        ...prev, 
                        socialMedia: { ...prev.socialMedia!, twitter: e.target.value }
                      }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="blog-linkedin" className="flex items-center gap-2">
                      <Linkedin size={16} className="text-blue-600" />
                      LinkedIn
                    </Label>
                    <Input
                      id="blog-linkedin"
                      placeholder="https://linkedin.com/company/your-company"
                      value={newBlog.socialMedia?.linkedin || ""}
                      onChange={(e) => setNewBlog(prev => ({ 
                        ...prev, 
                        socialMedia: { ...prev.socialMedia!, linkedin: e.target.value }
                      }))}
                    />
                  </div>
                </div>

                <Button onClick={handleCreateBlog} className="w-full">
                  Create Blog Post
                </Button>
              </TabsContent>
              
              <TabsContent value="preview">
                <BlogPreview blog={newBlog} />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="blogs" className="w-full">
        <TabsList>
          <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
          <TabsTrigger value="social">Social Media Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blogs" className="space-y-4">
          <div className="grid gap-4">
            {blogs.map((blog) => (
              <Card key={blog.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{blog.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>By {blog.author}</span>
                          <span>{blog.date}</span>
                          <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                            {blog.status}
                          </Badge>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instagram" className="flex items-center gap-2">
                  <Instagram size={16} className="text-pink-600" />
                  Instagram
                </Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/your-handle"
                  value={socialMediaLinks.instagram}
                  onChange={(e) => setSocialMediaLinks(prev => ({ ...prev, instagram: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="twitter" className="flex items-center gap-2">
                  <Twitter size={16} className="text-blue-400" />
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  placeholder="https://twitter.com/your-handle"
                  value={socialMediaLinks.twitter}
                  onChange={(e) => setSocialMediaLinks(prev => ({ ...prev, twitter: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin size={16} className="text-blue-600" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/company/your-company"
                  value={socialMediaLinks.linkedin}
                  onChange={(e) => setSocialMediaLinks(prev => ({ ...prev, linkedin: e.target.value }))}
                />
              </div>
              
              <Button onClick={handleUpdateSocialMedia} className="w-full">
                Update Social Media Links
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogManagement;