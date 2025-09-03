
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LogOut, Calendar, Users, Star, Plus, List, Camera, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import MentorSubscribers from "@/components/mentor/MentorSubscribers";


const MentorDashboard = () => {
  const [mentorImage, setMentorImage] = useState<string | null>(null);
  const mentorName = "Dr. Arjun Mehta";

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMentorImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const postedSessions = [
    {
      title: "JEE Advanced Strategy",
      date: "Jan 25, 2024",
      time: "10:00 AM",
      enrolled: "6/10 enrolled",
      students: "6 students",
      status: "LIVE"
    },
    {
      title: "Physics Problem Solving",
      date: "Jan 27, 2024",
      time: "2:00 PM",
      enrolled: "8/15 enrolled",
      students: "8 students",
      status: "SLOTS LEFT"
    },
    {
      title: "Math Concepts Deep Dive",
      date: "Jan 30, 2024",
      time: "4:00 PM",
      enrolled: "20/20 enrolled",
      students: "20 students",
      status: "FULL"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              {/* Image Upload */}
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={mentorImage || undefined} />
                  <AvatarFallback className="bg-green-100 text-green-600">
                    {mentorName.split(' ').slice(-2).map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <label className="absolute -bottom-1 -right-1 bg-green-600 text-white p-1 rounded-full cursor-pointer hover:bg-green-700">
                  <Camera size={12} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Mentor Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={mentorImage || undefined} />
                  <AvatarFallback className="bg-green-100 text-green-600 text-sm">
                    {mentorName.split(' ').slice(-2).map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-700">{mentorName}</span>
              </div>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, Dr. Mehta!</h2>
          <p className="text-gray-600">Manage your sessions and connect with students.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">32</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Students</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">156</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold flex items-center gap-1">
                4.8
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscribers Section */}
        <div className="mb-8">
          <MentorSubscribers />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <p className="text-sm text-gray-600">Manage your mentoring activities</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/post-session">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 flex items-center gap-2">
                    <Plus size={16} />
                    Post New Session
                  </Button>
                </Link>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <List size={16} />
                  View All Sessions
                </Button>
                <Link to="/mentor-subscribers">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Users size={16} />
                    My Subscribers
                  </Button>
                </Link>
                <Link to="/manage-subscription-plans">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Settings size={16} />
                    Manage Subscription Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* All Posted Sessions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>All Posted Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {postedSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{session.title}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            session.status === 'LIVE' ? 'text-red-600 border-red-600' :
                            session.status === 'SLOTS LEFT' ? 'text-green-600 border-green-600' :
                            'text-gray-600 border-gray-600'
                          }`}
                        >
                          {session.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {session.date} • {session.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {session.enrolled}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {session.students}
                        </div>
                      </div>
                    </div>
                    <Link to={`/session-details/L00${index + 1}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
