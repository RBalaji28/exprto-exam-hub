import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, User, Phone, Mail, MessageCircle, ArrowLeft } from "lucide-react";

// Mock data - replace with real data from backend
const mockSubscribers = [
  {
    id: "student1",
    name: "Aarav Sharma",
    email: "aarav.sharma@email.com",
    phone: "+91 98765 43210",
    image: "/placeholder-student.jpg",
    plan: "Standard",
    subscriptionDate: "2024-01-15",
    expiryDate: "2024-02-15",
    status: "Active",
    totalSessions: 3,
    lastSession: "2024-01-20",
    duration: "1 Month"
  },
  {
    id: "student2",
    name: "Priya Patel",
    email: "priya.patel@email.com", 
    phone: "+91 87654 32109",
    image: "/placeholder-student.jpg",
    plan: "Premium",
    subscriptionDate: "2024-01-10",
    expiryDate: "2024-02-10",
    status: "Expiring Soon",
    totalSessions: 8,
    lastSession: "2024-01-22",
    duration: "1 Month"
  },
  {
    id: "student3",
    name: "Rohit Kumar",
    email: "rohit.kumar@email.com",
    phone: "+91 76543 21098",
    image: "/placeholder-student.jpg",
    plan: "Standard",
    subscriptionDate: "2024-01-20",
    expiryDate: "2024-02-20",
    status: "Active",
    totalSessions: 1,
    lastSession: "2024-01-21",
    duration: "1 Month"
  }
];

const MentorSubscribers = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Recently Subscribed", "1 Month", "6 Months", "1 Year", "Expired"];
  
  const filteredSubscribers = mockSubscribers.filter(subscriber => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Recently Subscribed") {
      const subDate = new Date(subscriber.subscriptionDate);
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return subDate >= oneWeekAgo;
    }
    if (selectedFilter === "Expired") return subscriber.status === "Expired";
    return subscriber.duration === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/mentor-dashboard")}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">My Subscribers</h1>
            <Badge variant="outline" className="ml-auto">
              {filteredSubscribers.filter(s => s.status === "Active").length} Active Students
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-gray-900 text-white" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Subscribers Grid */}
        {filteredSubscribers.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="text-muted-foreground text-center">
                <h4 className="text-lg font-medium mb-2">No subscribers found</h4>
                <p className="text-sm">No students match the selected filter</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredSubscribers.map((subscriber) => (
              <Card key={subscriber.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={subscriber.image} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {subscriber.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{subscriber.name}</h3>
                        <Badge 
                          variant={subscriber.duration === "1 Month" ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {subscriber.duration}
                        </Badge>
                        <Badge 
                          variant={subscriber.status === "Active" ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {subscriber.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail size={14} />
                          <span>{subscriber.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          <span>{subscriber.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Subscribed: {new Date(subscriber.subscriptionDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Expires: {new Date(subscriber.expiryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm">
                        <span>Total Sessions: <strong>{subscriber.totalSessions}</strong></span>
                        <span>Last Session: <strong>{new Date(subscriber.lastSession).toLocaleDateString()}</strong></span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Link to={`/chat/${subscriber.id}`}>
                        <Button 
                          className="w-full bg-gray-900 hover:bg-gray-800 flex items-center gap-2" 
                          size="sm"
                        >
                          <MessageCircle size={14} />
                          Join Meet
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MentorSubscribers;