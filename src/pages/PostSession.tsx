import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, IndianRupee, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PostSession = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [sessionData, setSessionData] = useState({
    title: "",
    description: "",
    mentorName: "",
    subject: "",
    date: "",
    time: "",
    duration: "",
    totalSlots: "",
    price: "",
    type: "group" as "group" | "onetoone"
  });

  const [previewMode, setPreviewMode] = useState(false);

  const subjects = [
    "Physics", "Chemistry", "Mathematics", "Biology", 
    "English", "History", "Geography", "Computer Science", 
    "Economics", "NEET Preparation", "JEE Preparation", "UPSC Preparation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
  ];

  const durations = ["30 minutes", "1 hour", "1.5 hours", "2 hours", "2.5 hours", "3 hours"];

  const handleInputChange = (field: string, value: string) => {
    setSessionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form
    const requiredFields = ["title", "mentorName", "subject", "date", "time", "duration", "totalSlots", "price"];
    const missingFields = requiredFields.filter(field => !sessionData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Save session (in real app, this would be an API call)
    const newSession = {
      id: `S${Date.now()}`,
      ...sessionData,
      availableSlots: parseInt(sessionData.totalSlots),
      rating: 0,
      subjects: [sessionData.subject],
      price: parseInt(sessionData.price)
    };

    // Save to localStorage for demo
    const existingSessions = JSON.parse(localStorage.getItem('postedSessions') || '[]');
    existingSessions.push(newSession);
    localStorage.setItem('postedSessions', JSON.stringify(existingSessions));

    toast({
      title: "Session Posted Successfully!",
      description: "Your session has been posted and is now available for booking.",
    });

    navigate('/mentor-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/mentor-dashboard')}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post New Session</h1>
          <p className="text-gray-600">Create a new mentorship session for students to book.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Session Title *</Label>
                <Input
                  id="title"
                  value={sessionData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., NEET Biology Mastery"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={sessionData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Brief description of the session..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="mentorName">Mentor Name *</Label>
                <Input
                  id="mentorName"
                  value={sessionData.mentorName}
                  onChange={(e) => handleInputChange('mentorName', e.target.value)}
                  placeholder="e.g., Dr. Priya Sharma"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Select 
                  value={sessionData.subject} 
                  onValueChange={(value) => handleInputChange('subject', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={sessionData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time *</Label>
                  <Select 
                    value={sessionData.time} 
                    onValueChange={(value) => handleInputChange('time', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="duration">Duration *</Label>
                <Select 
                  value={sessionData.duration} 
                  onValueChange={(value) => handleInputChange('duration', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Session Type</Label>
                <Select 
                  value={sessionData.type} 
                  onValueChange={(value) => handleInputChange('type', value as "group" | "onetoone")}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="group">Group Session</SelectItem>
                    <SelectItem value="onetoone">One-to-One</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="totalSlots">Total Slots *</Label>
                  <Input
                    id="totalSlots"
                    type="number"
                    value={sessionData.totalSlots}
                    onChange={(e) => handleInputChange('totalSlots', e.target.value)}
                    placeholder="e.g., 15"
                    min="1"
                    max={sessionData.type === "onetoone" ? "1" : "50"}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price (₹) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={sessionData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="e.g., 750"
                    min="0"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex-1"
                >
                  {previewMode ? "Edit" : "Preview"}
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Post Session
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {sessionData.title ? (
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{sessionData.title || "Session Title"}</h3>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {sessionData.totalSlots}/{sessionData.totalSlots} slots
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-3">
                    by {sessionData.mentorName || "Mentor Name"}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">New</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} />
                      <span>{sessionData.date || "Date"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>{sessionData.time || "Time"} • {sessionData.duration || "Duration"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users size={14} />
                      <span>{sessionData.totalSlots || "0"} available</span>
                    </div>
                  </div>
                  
                  {sessionData.subject && (
                    <div className="mb-4">
                      <Badge variant="secondary">{sessionData.subject}</Badge>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <IndianRupee size={18} className="text-gray-900" />
                      <span className="text-xl font-bold">{sessionData.price || "0"}</span>
                    </div>
                    <Button className="bg-gray-900 hover:bg-gray-800">
                      Book Now
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Fill in the session details to see preview
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostSession;