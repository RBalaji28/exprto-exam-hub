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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Subscribe to {mentor.name}</h1>
          <p className="text-gray-600">Choose a plan that fits your goals.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard / Plus Plan */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Standard / Plus Plan – "Learn & Grow"</CardTitle>
              <p className="text-gray-700">₹500 per month</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800">
              <ul className="list-disc pl-5 space-y-2">
                <li>Join mentor's WhatsApp community</li>
                <li>Monthly live group classes with mentors</li>
                <li>Personalized study plan generator</li>
                <li>Doubt-solving sessions within 24 hours</li>
                <li>Full access to all study materials</li>
                <li>Unlimited mentor Q&A sessions via chat</li>
                <li>1-on-1 mentor sessions (video calls) – 1 time per month</li>
              </ul>
              <Button className="w-full mt-4">Choose Standard</Button>
            </CardContent>
          </Card>

          {/* Pro / Premium Plan */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Pro / Premium Plan – "Master Your Exams"</CardTitle>
              <p className="text-gray-700">Price: e.g., ₹10000–₹20000 / month</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800">
              <ul className="list-disc pl-5 space-y-2">
                <li>Unlimited 1-on-1 mentor sessions (video calls)</li>
                <li>Dedicated personal mentor assigned</li>
                <li>Real-time doubt-solving (chat/video)</li>
                <li>Access to exclusive study groups</li>
                <li>Weekly performance review sessions with mentors</li>
                <li>Offline support (phone mentoring sessions)</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">Choose Premium</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SubscribePlans;
