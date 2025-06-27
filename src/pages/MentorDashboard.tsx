
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, LogOut, Calendar, BookOpen, Plus, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const postedSessions = [
    {
      id: 1,
      title: "JEE Advanced Strategy",
      status: "live",
      slots: "6/10",
      date: "Jan 25, 2024",
      time: "10:00 AM",
      students: 6
    },
    {
      id: 2,
      title: "Physics Problem Solving",
      status: "upcoming",
      slots: "8/15",
      date: "Jan 27, 2024", 
      time: "2:00 PM",
      students: 8
    },
    {
      id: 3,
      title: "Math Concepts Deep Dive",
      status: "full",
      slots: "20/20",
      date: "Jan 30, 2024",
      time: "4:00 PM",
      students: 20
    }
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Plus, label: "Post Session" },
    { icon: BookOpen, label: "Booking Page" },
    { icon: User, label: "Profile" },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'live':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">LIVE</span>;
      case 'full':
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">FULL</span>;
      case 'upcoming':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">SLOTS LEFT</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/5d782425-50a4-4419-8ded-ab9e0ed405cb.png" 
              alt="MentxTv" 
              className="w-8 h-8"
            />
            <h2 className="text-xl font-bold text-gray-900">Mentor Panel</h2>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button className={`flex items-center space-x-3 p-3 rounded-lg transition-colors w-full text-left ${
                  item.active ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-gray-900">Mentor Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Dr. Arjun Mehta</span>
            </div>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              <LogOut size={16} className="mr-1" />
              Logout
            </Button>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Left Content */}
          <div className="flex-1 p-6">
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
                  <div className="text-2xl font-bold">32</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Students</CardTitle>
                  <BookOpen className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Rating</CardTitle>
                  <User className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8⭐</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your mentoring activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Plus size={24} />
                    <span>Post New Session</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <BookOpen size={24} />
                    <span>View All Sessions</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Posted Sessions */}
          <div className="w-96 p-6 border-l bg-white">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">All Posted Sessions</h3>
              
              <div className="space-y-4">
                {postedSessions.map((session) => (
                  <Card key={session.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{session.title}</h4>
                        {getStatusBadge(session.status)}
                      </div>
                      
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>📅 {session.date} • {session.time}</div>
                        <div>👥 {session.slots} enrolled</div>
                        <div>📊 {session.students} students</div>
                      </div>
                      
                      <Button size="sm" variant="outline" className="w-full mt-3 text-xs">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
