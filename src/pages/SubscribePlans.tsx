import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMentors } from "@/contexts/MentorContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubscribePlans = () => {
  const { mentorId } = useParams();
  const { mentors } = useMentors();
  const mentor = mentors.find((m) => m.id === mentorId);

  useEffect(() => {
    document.title = mentor ? `${mentor.name} – Plans | MentxTv` : "Mentor Plans | MentxTv";
  }, [mentor]);

  if (!mentor) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Mentor not found</h1>
        <p className="text-gray-600">Please go back and choose a mentor.</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Subscribe to {mentor.name}</h1>
            <p className="text-muted-foreground text-lg">Choose a plan that fits your goals and unlock your potential</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard / Plus Plan */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 bg-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-foreground">Standard Plan</CardTitle>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Popular</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">"Learn & Grow"</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">₹500</span>
                <span className="text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Join mentor's WhatsApp community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Monthly live group classes with mentors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Personalized study plan generator</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Doubt-solving sessions within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Full access to all study materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Unlimited mentor Q&A sessions via chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">1-on-1 mentor sessions (video calls) – 1 time per month</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base">
                Choose Standard Plan
              </Button>
            </CardContent>
          </Card>

          {/* Pro / Premium Plan */}
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300 bg-card border-primary/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-primary/80"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-foreground">Premium Plan</CardTitle>
                <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Best Value</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">"Master Your Exams"</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">₹15,000</span>
                <span className="text-muted-foreground">per month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Unlimited 1-on-1 mentor sessions (video calls)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Dedicated personal mentor assigned</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Real-time doubt-solving (chat/video)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Access to exclusive study groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Weekly performance review sessions with mentors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Offline support (phone mentoring sessions)</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 text-base transition-all duration-300"
              >
                Choose Premium Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SubscribePlans;
