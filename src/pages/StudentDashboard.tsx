
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, LogOut, Calendar, BookOpen, CreditCard, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const pastSessions = [
    { id: 1, title: "JEE Advanced Strategy", mentor: "Arjun Mehta", date: "2024-01-15", status: "Completed" },
    { id: 2, title: "NEET Biology Prep", mentor: "Dr. Priya Sharma", date: "2024-01-10", status: "Completed" },
  ];

  const upcomingSessions = [
    { id: 1, title: "Physics Problem Solving", mentor: "Rahul Kumar", date: "2024-01-25", time: "10:00 AM" },
    { id: 2, title: "Chemistry Revision", mentor: "Sneha Gupta", date: "2024-01-27", time: "2:00 PM" },
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BookOpen, label: "Booking Page" },
    { icon: User, label: "Profile" },
  ];

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
            <h2 className="text-xl font-bold text-gray-900">Student Panel</h2>
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
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">John Doe</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, John!</h2>
              <p className="text-gray-600">Continue your learning journey with our expert mentors.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Sessions Attended</CardTitle>
                  <Calendar className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Upcoming Sessions</CardTitle>
                  <BookOpen className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
                  <CreditCard className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹15,600</div>
                </CardContent>
              </Card>
            </div>

            {/* Available Sessions */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Available Sessions</CardTitle>
                <CardDescription>Book sessions with expert mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((session) => (
                    <div key={session} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">JEE Advanced Strategy</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">6/10 slots</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">by Arjun Mehta</p>
                      <p className="text-sm text-gray-500 mb-3">Jan 25, 2024 • 10:00 AM</p>
                      <Button size="sm" className="w-full">Book Session</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Session Tables */}
          <div className="w-96 p-6 border-l bg-white">
            <div className="space-y-6">
              {/* Past Sessions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Past Sessions</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Session</TableHead>
                      <TableHead className="text-xs">Date</TableHead>
                      <TableHead className="text-xs">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastSessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell className="text-xs">
                          <div>
                            <div className="font-medium">{session.title}</div>
                            <div className="text-gray-500">{session.mentor}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs">{session.date}</TableCell>
                        <TableCell className="text-xs">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {session.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Upcoming Sessions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Session</TableHead>
                      <TableHead className="text-xs">Date & Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingSessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell className="text-xs">
                          <div>
                            <div className="font-medium">{session.title}</div>
                            <div className="text-gray-500">{session.mentor}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs">
                          <div>
                            <div>{session.date}</div>
                            <div className="text-gray-500">{session.time}</div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
