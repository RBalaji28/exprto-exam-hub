
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const BookingSessions = () => {
  const availableSessions = [
    {
      id: 1,
      title: "JEE Advanced Strategy",
      mentor: "Dr. Arjun Mehta",
      date: "Jan 25, 2024",
      time: "10:00 AM",
      duration: "1 hour",
      slots: "6/10",
      rating: "4.9",
      price: "₹500",
      subjects: ["Physics", "Mathematics"]
    },
    {
      id: 2,
      title: "NEET Biology Masterclass",
      mentor: "Dr. Priya Sharma",
      date: "Jan 26, 2024",
      time: "2:00 PM",
      duration: "1.5 hours",
      slots: "8/15",
      rating: "4.8",
      price: "₹600",
      subjects: ["Biology", "Chemistry"]
    },
    {
      id: 3,
      title: "Physics Problem Solving",
      mentor: "Rahul Kumar",
      date: "Jan 27, 2024",
      time: "4:00 PM",
      duration: "1 hour",
      slots: "12/20",
      rating: "4.7",
      price: "₹450",
      subjects: ["Physics"]
    },
    {
      id: 4,
      title: "Chemistry Concepts Deep Dive",
      mentor: "Sneha Gupta",
      date: "Jan 28, 2024",
      time: "11:00 AM",
      duration: "2 hours",
      slots: "5/12",
      rating: "4.9",
      price: "₹700",
      subjects: ["Chemistry"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="text-blue-600 hover:text-blue-700">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Book Your Sessions</h1>
          </div>
          <p className="text-gray-600">Choose from our expert mentors and book your learning sessions</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {session.slots} slots
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">by {session.mentor}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{session.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{session.time} • {session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{session.slots} available</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {session.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xl font-bold text-gray-900">{session.price}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookingSessions;
