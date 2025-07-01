
import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import MentorManagement from "@/components/admin/MentorManagement";
import StudentManagement from "@/components/admin/StudentManagement";
import SessionManagement from "@/components/admin/SessionManagement";
import SocialMediaSettings from "@/components/admin/SocialMediaSettings";
import ContentManagement from "@/components/admin/ContentManagement";

const AdminDashboard = () => {
  // Admin state
  const [adminName] = useState("Admin User");
  const [adminImage, setAdminImage] = useState<string | null>(null);

  // Social media links state
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    twitter: "",
    youtube: ""
  });

  // Mock data for dashboard stats
  const dashboardStats = {
    mentorCount: 25,
    studentCount: 150,
    liveSessionCount: 3,
    upcomingSessionCount: 8
  };

  // Mock data for mentors
  const mentors = [
    {
      id: "M001",
      name: "Dr. Sarah Johnson",
      domain: "JEE",
      rating: 4.8,
      sessions: 45
    },
    {
      id: "M002",
      name: "Prof. Raj Kumar",
      domain: "NEET",
      rating: 4.9,
      sessions: 38
    }
  ];

  // Mock data for students
  const students = [
    {
      id: "S001",
      name: "Arjun Patel",
      email: "arjun.patel@email.com",
      domain: "JEE",
      sessionsAttended: 12,
      performance: 85
    },
    {
      id: "S002",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      domain: "NEET",
      sessionsAttended: 15,
      performance: 92
    }
  ];

  // Mock data for sessions
  const sessionData = {
    liveSessions: [
      {
        id: "L001",
        mentorName: "Dr. Sarah Johnson",
        mentorId: "M001",
        subject: "Physics - Mechanics",
        studentsAttending: 25,
        feedbackGiven: false
      }
    ],
    upcomingSessions: [
      {
        id: "U001",
        mentorName: "Prof. Raj Kumar",
        mentorId: "M002",
        subject: "Chemistry - Organic",
        studentsRegistered: 18,
        canDelete: true
      }
    ],
    endedSessions: [
      {
        id: "E001",
        mentorName: "Dr. Sarah Johnson",
        mentorId: "M001",
        subject: "Mathematics - Calculus",
        studentsAttended: 22,
        feedbackCollected: true
      }
    ]
  };

  // Handler functions
  const handleAdminImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdminImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialLinksChange = (platform: string, value: string) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleSocialLinksSave = () => {
    // Save social links (in a real app, this would be an API call)
    console.log("Saving social links:", socialLinks);
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        adminName={adminName}
        adminImage={adminImage}
        onImageUpload={handleAdminImageUpload}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Manage all aspects of the MentxTv platform.</p>
        </div>

        <DashboardStats 
          mentorCount={dashboardStats.mentorCount}
          studentCount={dashboardStats.studentCount}
          liveSessionCount={dashboardStats.liveSessionCount}
          upcomingSessionCount={dashboardStats.upcomingSessionCount}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MentorManagement mentors={mentors} />
          <StudentManagement students={students} />
        </div>

        <div className="mb-8">
          <SessionManagement 
            liveSessions={sessionData.liveSessions}
            upcomingSessions={sessionData.upcomingSessions}
            endedSessions={sessionData.endedSessions}
          />
        </div>

        <div className="mb-8">
          <ContentManagement />
        </div>

        <div className="mb-8">
          <SocialMediaSettings 
            links={socialLinks}
            onInputChange={handleSocialLinksChange}
            onSave={handleSocialLinksSave}
          />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
