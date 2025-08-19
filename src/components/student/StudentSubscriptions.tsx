import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Clock } from "lucide-react";

// Mock data - replace with real data from backend
const mockSubscriptions = [
  {
    id: "sub1",
    mentorId: "M001",
    mentorName: "Dr. Sarah Johnson",
    mentorImage: "/placeholder-mentor.jpg",
    mentorDomain: "JEE",
    mentorRating: 4.8,
    plan: "Standard",
    startDate: "2024-01-15",
    duration: "1 month",
    expiryDate: "2024-02-15",
    status: "Active",
    price: "₹500"
  },
  {
    id: "sub2",
    mentorId: "M002",
    mentorName: "Prof. Raj Kumar",
    mentorImage: "/placeholder-mentor.jpg",
    mentorDomain: "NEET",
    mentorRating: 4.9,
    plan: "Premium",
    startDate: "2024-01-10",
    duration: "1 month",
    expiryDate: "2024-02-10",
    status: "Expiring Soon",
    price: "₹15,000"
  }
];

const StudentSubscriptions = () => {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={12} className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-foreground">My Subscriptions</h3>
        <Badge variant="outline" className="text-sm">
          {mockSubscriptions.length} Active
        </Badge>
      </div>

      {mockSubscriptions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-muted-foreground text-center">
              <h4 className="text-lg font-medium mb-2">No subscriptions yet</h4>
              <p className="text-sm">Subscribe to mentors to start your learning journey</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockSubscriptions.map((subscription) => (
            <Card key={subscription.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={subscription.mentorImage} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {subscription.mentorName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base">{subscription.mentorName}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">{renderStars(subscription.mentorRating)}</div>
                      <span className="text-xs text-muted-foreground">({subscription.mentorRating})</span>
                      <Badge variant="secondary" className="text-xs">{subscription.mentorDomain}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{subscription.plan} Plan</span>
                  <Badge 
                    variant={subscription.status === "Active" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {subscription.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>Started: {new Date(subscription.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>Expires: {new Date(subscription.expiryDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration: {subscription.duration}</span>
                    <span className="font-medium text-foreground">{subscription.price}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Manage Plan
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

export default StudentSubscriptions;