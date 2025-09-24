import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SessionCard from "@/components/SessionCard";
import AdvertisementBanner from "@/components/AdvertisementBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CategoryFilter } from "@/components/ui/category-filter";

const BookingSessions = () => {
  const [selectedMainTopic, setSelectedMainTopic] = useState<string>("all");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>("all");

  // Group sessions
  const groupSessions = [
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
      price: 500,
      type: "group",
      category: "jee"
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
      price: 750,
      type: "group",
      category: "neet"
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
      price: 600,
      type: "group",
      category: "upsc"
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
      price: 450,
      type: "group",
      category: "jee"
    },
    {
      id: "5",
      title: "Mathematics Fundamentals",
      mentor: "Prof. Vikram Singh",
      date: "Jan 29, 2024",
      time: "9:00 AM",
      duration: "2 hours",
      availableSlots: 12,
      totalSlots: 18,
      rating: 4.6,
      subjects: ["Mathematics"],
      price: 550,
      type: "group",
      category: "jee"
    },
    {
      id: "6",
      title: "Chemistry Organic Concepts",
      mentor: "Dr. Sneha Patel",
      date: "Jan 30, 2024",
      time: "3:00 PM",
      duration: "1.5 hours",
      availableSlots: 7,
      totalSlots: 12,
      rating: 4.8,
      subjects: ["Chemistry"],
      price: 650,
      type: "group",
      category: "neet"
    },
    {
      id: "7",
      title: "English Grammar & Writing",
      mentor: "Ms. Riya Gupta",
      date: "Feb 1, 2024",
      time: "1:00 PM",
      duration: "1 hour",
      availableSlots: 10,
      totalSlots: 15,
      rating: 4.5,
      subjects: ["English"],
      price: 400,
      type: "group",
      category: "general"
    },
    {
      id: "8",
      title: "Computer Science Coding",
      mentor: "Mr. Amit Sharma",
      date: "Feb 2, 2024",
      time: "5:00 PM",
      duration: "2 hours",
      availableSlots: 3,
      totalSlots: 8,
      rating: 4.9,
      subjects: ["Computer Science"],
      price: 800,
      type: "group",
      category: "general"
    },
    {
      id: "9",
      title: "Economics Micro & Macro",
      mentor: "Dr. Rajesh Khanna",
      date: "Feb 3, 2024",
      time: "11:00 AM",
      duration: "1.5 hours",
      availableSlots: 9,
      totalSlots: 14,
      rating: 4.7,
      subjects: ["Economics"],
      price: 600,
      type: "group",
      category: "general"
    },
    {
      id: "10",
      title: "Biology Cell Structure",
      mentor: "Dr. Priya Sharma",
      date: "Feb 4, 2024",
      time: "2:30 PM",
      duration: "1 hour",
      availableSlots: 6,
      totalSlots: 10,
      rating: 4.8,
      subjects: ["Biology"],
      price: 500,
      type: "group",
      category: "neet"
    },
    {
      id: "11",
      title: "History World Wars",
      mentor: "Prof. Suresh Kumar",
      date: "Feb 5, 2024",
      time: "10:30 AM",
      duration: "2 hours",
      availableSlots: 4,
      totalSlots: 12,
      rating: 4.6,
      subjects: ["History"],
      price: 550,
      type: "group",
      category: "upsc"
    },
    {
      id: "12",
      title: "Geography Climate Change",
      mentor: "Dr. Meera Joshi",
      date: "Feb 6, 2024",
      time: "4:30 PM",
      duration: "1.5 hours",
      availableSlots: 8,
      totalSlots: 16,
      rating: 4.7,
      subjects: ["Geography"],
      price: 600,
      type: "group",
      category: "upsc"
    }
  ];

  // One-to-one sessions
  const oneToOneSessions = [
    {
      id: "o1",
      title: "Personal JEE Coaching",
      mentor: "Dr. Arjun Mehta",
      date: "Available",
      time: "Flexible",
      duration: "1 hour",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.9,
      subjects: ["Physics", "Mathematics"],
      price: 2000,
      type: "onetoone",
      category: "jee"
    },
    {
      id: "o2",
      title: "NEET Biology Personal Session",
      mentor: "Dr. Priya Sharma",
      date: "Available",
      time: "Flexible",
      duration: "1.5 hours",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.8,
      subjects: ["Biology"],
      price: 2500,
      type: "onetoone",
      category: "neet"
    },
    {
      id: "o3",
      title: "UPSC Personal Guidance",
      mentor: "Rahul Kumar",
      date: "Available",
      time: "Flexible",
      duration: "2 hours",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.7,
      subjects: ["History", "Geography"],
      price: 3000,
      type: "onetoone",
      category: "upsc"
    },
    {
      id: "o4",
      title: "Physics Doubt Clearing",
      mentor: "Dr. Arjun Mehta",
      date: "Available",
      time: "Flexible",
      duration: "1 hour",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.9,
      subjects: ["Physics"],
      price: 1800,
      type: "onetoone",
      category: "jee"
    },
    {
      id: "o5",
      title: "Mathematics Personal Tutor",
      mentor: "Prof. Vikram Singh",
      date: "Available",
      time: "Flexible",
      duration: "1.5 hours",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.6,
      subjects: ["Mathematics"],
      price: 2200,
      type: "onetoone",
      category: "jee"
    },
    {
      id: "o6",
      title: "Chemistry One-on-One",
      mentor: "Dr. Sneha Patel",
      date: "Available",
      time: "Flexible",
      duration: "1 hour",
      availableSlots: 1,
      totalSlots: 1,
      rating: 4.8,
      subjects: ["Chemistry"],
      price: 2000,
      type: "onetoone",
      category: "neet"
    }
  ];

  const filterSessionsByCategory = (sessions: any[]) => {
    if (selectedSubtopic === "all") return sessions;
    return sessions.filter(session => session.category === selectedSubtopic);
  };

  const handleCategoryChange = (mainTopic: string, subtopic: string) => {
    setSelectedMainTopic(mainTopic);
    setSelectedSubtopic(subtopic);
  };

  const filteredGroupSessions = filterSessionsByCategory(groupSessions);
  const filteredOneToOneSessions = filterSessionsByCategory(oneToOneSessions);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Sessions</h1>
          <p className="text-gray-600">Choose from our available mentorship sessions and book your slot.</p>
        </div>

        <AdvertisementBanner />

        <div className="mb-8">
          <CategoryFilter
            onCategoryChange={handleCategoryChange}
            defaultMainTopic="all"
            defaultSubtopic="all"
          />
        </div>

        <Tabs defaultValue="group" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="group">Group Sessions</TabsTrigger>
            <TabsTrigger value="onetoone">One-to-One Mentorship</TabsTrigger>
          </TabsList>
          
          <TabsContent value="group">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {filteredGroupSessions.length} of {groupSessions.length} group sessions
                {selectedSubtopic !== "all" && ` for ${selectedSubtopic}`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGroupSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  {...session}
                  isBooked={session.availableSlots === 0}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="onetoone">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {filteredOneToOneSessions.length} of {oneToOneSessions.length} one-to-one sessions
                {selectedSubtopic !== "all" && ` for ${selectedSubtopic}`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredOneToOneSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  {...session}
                  isBooked={false}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default BookingSessions;
