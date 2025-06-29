
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LogOut, Calendar, Users, DollarSign, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const StudentDashboard = () => {
  const { user, updateUserImage } = useUser();
  const studentName = user?.name || "Student";

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        updateUserImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const pastSessions = [
    {
      session: "JEE Advanced Strategy",
      mentor: "Arjun Mehta",
      date: "2024-01-15",
      status: "Completed"
    },
    {
      session: "NEET Biology Prep",
      mentor: "Dr. Priya Sharma",
      date: "2024-01-10",
      status: "Completed"
    }
  ];

  const upcomingSessions = [
    {
      session: "Physics Problem Solving",
      mentor: "Rahul Kumar",
      date: "2024-01-25",
      time: "10:00 AM"
    },
    {
      session: "Chemistry Revision",
      mentor: "Sneha Gupta",
      date: "2024-01-27",
      time: "2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              {/* Large Image Upload */}
              <div className="relative">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user?.image} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                    {studentName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <label className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 shadow-lg">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.image} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-sm">
                    {studentName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-700">{studentName}</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, {studentName.split(' ')[0]}!</h2>
          <p className="text-gray-600">Track your learning progress and manage your booked sessions.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Sessions Attended</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Upcoming Sessions</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹15,600</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Past Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Past Sessions</CardTitle>
              <p className="text-sm text-gray-600">Your completed sessions</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastSessions.map((session, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium">{session.session}</p>
                        <p className="text-sm text-gray-600">{session.mentor}</p>
                      </div>
                      <div className="text-gray-600 text-sm">
                        {session.date}
                      </div>
                      <div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {session.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
              <p className="text-sm text-gray-600">Your scheduled sessions</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">{session.session}</p>
                        <p className="text-sm text-gray-600">{session.mentor}</p>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>{session.date}</p>
                        <p>{session.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Link to="/booking-sessions">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book New Session
                  </Button>
                </Link>
                <Button variant="outline">
                  View All Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
