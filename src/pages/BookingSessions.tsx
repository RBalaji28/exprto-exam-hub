
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SessionCard from "@/components/SessionCard";

const BookingSessions = () => {
  // Sample session data
  const sessions = [
    {
      id: "1",
      title: "JEE Advanced Strategy",
      mentor: "Dr. Arjun Mehta",
      date: "Jan 25, 2024",
      time: "10:00 AM",
      duration: "1 hour",
      availableSlots: 6,
      totalSlots: 10,
      rating: 4.9,
      subjects: ["Physics", "Mathematics"],
      price: 500
    },
    {
      id: "2",
      title: "NEET Biology Mastery",
      mentor: "Dr. Priya Sharma",
      date: "Jan 26, 2024",
      time: "2:00 PM",
      duration: "1.5 hours",
      availableSlots: 8,
      totalSlots: 15,
      rating: 4.8,
      subjects: ["Biology", "Chemistry"],
      price: 750
    },
    {
      id: "3",
      title: "UPSC Current Affairs",
      mentor: "Rahul Kumar",
      date: "Jan 27, 2024",
      time: "4:00 PM",
      duration: "2 hours",
      availableSlots: 0,
      totalSlots: 20,
      rating: 4.7,
      subjects: ["History", "Geography"],
      price: 600
    },
    {
      id: "4",
      title: "Physics Problem Solving",
      mentor: "Dr. Arjun Mehta",
      date: "Jan 28, 2024",
      time: "11:00 AM",
      duration: "1 hour",
      availableSlots: 5,
      totalSlots: 12,
      rating: 4.9,
      subjects: ["Physics"],
      price: 450
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Sessions</h1>
          <p className="text-gray-600">Choose from our available mentorship sessions and book your slot.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              {...session}
              isBooked={session.availableSlots === 0}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingSessions;
