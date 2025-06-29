
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Instagram, Twitter, Youtube, Save, Plus, Eye, Edit, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";

const AdminDashboard = () => {
  const { socialMediaLinks, updateSocialMediaLinks } = useUser();
  const [links, setLinks] = useState({
    instagram: socialMediaLinks.instagram || '',
    twitter: socialMediaLinks.twitter || '',
    youtube: socialMediaLinks.youtube || ''
  });

  // Sample data - replace with actual data from your backend
  const [mentors] = useState([
    { id: 'M001', name: 'Dr. Priya Sharma', domain: 'NEET', rating: 4.8, sessions: 45 },
    { id: 'M002', name: 'Arjun Mehta', domain: 'JEE', rating: 4.6, sessions: 32 },
    { id: 'M003', name: 'Hritishna Nayak', domain: 'NEET', rating: 4.9, sessions: 28 },
    { id: 'M004', name: 'Rahul Kumar', domain: 'UPSC', rating: 4.7, sessions: 22 },
    { id: 'M005', name: 'Sneha Gupta', domain: 'GATE', rating: 4.5, sessions: 35 }
  ]);

  const [students] = useState([
    { id: 'S001', name: 'Ankit Sharma', email: 'ankit@example.com', domain: 'JEE', sessionsAttended: 15, performance: 85 },
    { id: 'S002', name: 'Priya Singh', email: 'priya@example.com', domain: 'NEET', sessionsAttended: 12, performance: 92 },
    { id: 'S003', name: 'Raj Patel', email: 'raj@example.com', domain: 'UPSC', sessionsAttended: 8, performance: 78 }
  ]);

  const [liveSessions] = useState([
    { id: 'L001', mentorName: 'Dr. Arjun Mehta', mentorId: 'M002', subject: 'JEE', studentsAttending: 8, feedbackGiven: true },
    { id: 'L002', mentorName: 'Priya Sharma', mentorId: 'M001', subject: 'NEET', studentsAttending: 12, feedbackGiven: false }
  ]);

  const [upcomingSessions] = useState([
    { id: 'U001', mentorName: 'Rahul Kumar', mentorId: 'M004', subject: 'UPSC', studentsRegistered: 6, canDelete: true },
    { id: 'U002', mentorName: 'Sneha Gupta', mentorId: 'M005', subject: 'GATE', studentsRegistered: 15, canDelete: false }
  ]);

  const [endedSessions] = useState([
    { id: 'E001', mentorName: 'Dr. Priya Sharma', mentorId: 'M001', subject: 'NEET', studentsAttended: 10, feedbackCollected: true },
    { id: 'E002', mentorName: 'Hritishna Nayak', mentorId: 'M003', subject: 'NEET', studentsAttended: 8, feedbackCollected: false }
  ]);

  const handleInputChange = (platform: string, value: string) => {
    setLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleSave = () => {
    updateSocialMediaLinks(links);
    toast.success("Social media links updated successfully!");
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Admin User</span>
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <LogOut size={16} />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="mentors">Mentor Details</TabsTrigger>
            <TabsTrigger value="students">Student Details</TabsTrigger>
            <TabsTrigger value="sessions">Session Details</TabsTrigger>
            <TabsTrigger value="payments">Payment Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{mentors.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{students.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Live Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{liveSessions.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{upcomingSessions.length}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Mentor Details</h2>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Domains" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="jee">JEE</SelectItem>
                    <SelectItem value="neet">NEET</SelectItem>
                    <SelectItem value="upsc">UPSC</SelectItem>
                    <SelectItem value="gate">GATE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                Add New Mentor
              </Button>
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
                    {mentors.map((mentor) => (
                      <TableRow key={mentor.id}>
                        <TableCell className="font-medium">{mentor.name}</TableCell>
                        <TableCell>{mentor.id}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {mentor.domain}
                          </Badge>
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
                            <Button variant="outline" size="sm" className="text-red-600">
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
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Details</h2>
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                Add New Student
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Student Email ID</TableHead>
                      <TableHead>Domain Name</TableHead>
                      <TableHead>Total Sessions Attended</TableHead>
                      <TableHead>Performance Rate</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {student.domain}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.sessionsAttended}</TableCell>
                        <TableCell>{student.performance}%</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye size={14} />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600">
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
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <h2 className="text-2xl font-bold">Session Details</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Live Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Live Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {liveSessions.map((session) => (
                    <div key={session.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{session.mentorName}</span>
                        <Badge className="bg-red-100 text-red-800">LIVE</Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Subject: {session.subject}</p>
                        <p>Students: {session.studentsAttending}</p>
                      </div>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{session.mentorName}</span>
                        <Badge variant="outline">UPCOMING</Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Subject: {session.subject}</p>
                        <p>Registered: {session.studentsRegistered}</p>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View
                        </Button>
                        {session.canDelete && (
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 size={14} />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Ended Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ended Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {endedSessions.map((session) => (
                    <div key={session.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{session.mentorName}</span>
                        <Badge variant="outline" className="text-gray-600">ENDED</Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Subject: {session.subject}</p>
                        <p>Attended: {session.studentsAttended}</p>
                        <p>Feedback: {session.feedbackCollected ? 'Collected' : 'Pending'}</p>
                      </div>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Details</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600">Payment management features will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Social Media Links Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    Social Media Links
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Manage company social media links that appear in the footer
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram URL
                    </Label>
                    <Input
                      id="instagram"
                      type="url"
                      placeholder="https://instagram.com/yourcompany"
                      value={links.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter URL
                    </Label>
                    <Input
                      id="twitter"
                      type="url"
                      placeholder="https://twitter.com/yourcompany"
                      value={links.twitter}
                      onChange={(e) => handleInputChange('twitter', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="youtube" className="flex items-center gap-2">
                      <Youtube className="h-4 w-4" />
                      YouTube URL
                    </Label>
                    <Input
                      id="youtube"
                      type="url"
                      placeholder="https://youtube.com/yourcompany"
                      value={links.youtube}
                      onChange={(e) => handleInputChange('youtube', e.target.value)}
                    />
                  </div>

                  <Button onClick={handleSave} className="w-full flex items-center gap-2">
                    <Save size={16} />
                    Save Links
                  </Button>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <p className="text-sm text-gray-600">
                    How the social media links will appear in the footer
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Follow Us :</h3>
                    <div className="flex gap-4">
                      {links.instagram && (
                        <a 
                          href={links.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                      {links.twitter && (
                        <a 
                          href={links.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {links.youtube && (
                        <a 
                          href={links.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Youtube size={20} />
                        </a>
                      )}
                    </div>
                    {!links.instagram && !links.twitter && !links.youtube && (
                      <p className="text-gray-400 text-sm">No social media links configured</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
