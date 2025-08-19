import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, User, Phone, Mail } from "lucide-react";

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
    lastSession: "2024-01-20"
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
    lastSession: "2024-01-22"
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
    lastSession: "2024-01-21"
  }
];

const MentorSubscribers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-foreground">My Subscribers</h3>
        <Badge variant="outline" className="text-sm">
          {mockSubscribers.filter(s => s.status === "Active").length} Active Students
        </Badge>
      </div>

      {mockSubscribers.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-muted-foreground text-center">
              <h4 className="text-lg font-medium mb-2">No subscribers yet</h4>
              <p className="text-sm">Students will appear here when they subscribe to your mentorship</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockSubscribers.map((subscriber) => (
            <Card key={subscriber.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={subscriber.image} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {subscriber.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base">{subscriber.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={subscriber.plan === "Premium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {subscriber.plan}
                      </Badge>
                      <Badge 
                        variant={subscriber.status === "Active" ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {subscriber.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={14} />
                    <span>{subscriber.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={14} />
                    <span>{subscriber.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span>Subscribed: {new Date(subscriber.subscriptionDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span>Expires: {new Date(subscriber.expiryDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Sessions:</span>
                  <span className="font-medium text-foreground">{subscriber.totalSessions}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Session:</span>
                  <span className="font-medium text-foreground">{new Date(subscriber.lastSession).toLocaleDateString()}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorSubscribers;