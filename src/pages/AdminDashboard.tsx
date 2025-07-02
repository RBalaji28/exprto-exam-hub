
import { useState } from "react";
import { Menu } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardStats from "@/components/admin/DashboardStats";
import MentorManagement from "@/components/admin/MentorManagement";
import StudentManagement from "@/components/admin/StudentManagement";
import SessionManagement from "@/components/admin/SessionManagement";
import SocialMediaSettings from "@/components/admin/SocialMediaSettings";
import ContentManagement from "@/components/admin/ContentManagement";

const AdminDashboard = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');
  
  // Admin state
  const [adminName] = useState("Admin User");
  const [adminImage, setAdminImage] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    },
    {
      id: "M003",
      name: "Dr. Priya Sharma",
      domain: "NEET",
      rating: 4.7,
      sessions: 52
    },
    {
      id: "M004",
      name: "Arjun Mehta",
      domain: "JEE",
      rating: 4.6,
      sessions: 32
    },
    {
      id: "M005",
      name: "Rahul Kumar",
      domain: "UPSC",
      rating: 4.7,
      sessions: 22
    },
    {
      id: "M006",
      name: "Sneha Gupta",
      domain: "GATE",
      rating: 4.5,
      sessions: 35
    },
    {
      id: "M007",
      name: "Dr. Amit Patel",
      domain: "JEE",
      rating: 4.9,
      sessions: 67
    },
    {
      id: "M008",
      name: "Prof. Kavya Singh",
      domain: "NEET",
      rating: 4.8,
      sessions: 41
    },
    {
      id: "M009",
      name: "Vikram Joshi",
      domain: "UPSC",
      rating: 4.4,
      sessions: 28
    },
    {
      id: "M010",
      name: "Dr. Meera Reddy",
      domain: "GATE",
      rating: 4.6,
      sessions: 39
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
    },
    {
      id: "S003",
      name: "Rohit Singh",
      email: "rohit.singh@email.com",
      domain: "JEE",
      sessionsAttended: 8,
      performance: 78
    },
    {
      id: "S004",
      name: "Ananya Gupta",
      email: "ananya.gupta@email.com",
      domain: "NEET",
      sessionsAttended: 22,
      performance: 95
    },
    {
      id: "S005",
      name: "Vikash Kumar",
      email: "vikash.kumar@email.com",
      domain: "UPSC",
      sessionsAttended: 18,
      performance: 88
    },
    {
      id: "S006",
      name: "Kavya Reddy",
      email: "kavya.reddy@email.com",
      domain: "GATE",
      sessionsAttended: 14,
      performance: 82
    },
    {
      id: "S007",
      name: "Amit Verma",
      email: "amit.verma@email.com",
      domain: "JEE",
      sessionsAttended: 25,
      performance: 91
    },
    {
      id: "S008",
      name: "Neha Joshi",
      email: "neha.joshi@email.com",
      domain: "NEET",
      sessionsAttended: 11,
      performance: 76
    },
    {
      id: "S009",
      name: "Ravi Mehta",
      email: "ravi.mehta@email.com",
      domain: "UPSC",
      sessionsAttended: 16,
      performance: 84
    },
    {
      id: "S010",
      name: "Srishti Agarwal",
      email: "srishti.agarwal@email.com",
      domain: "GATE",
      sessionsAttended: 20,
      performance: 89
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
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 lg:ml-64">
        <AdminHeader 
          adminName={adminName}
          adminImage={adminImage}
          onImageUpload={handleAdminImageUpload}
        />

        {/* Mobile menu button */}
        <div className="lg:hidden p-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={16} className="mr-2" />
            Menu
          </Button>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!activeTab && (
            <>
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
            </>
          )}

          {activeTab === 'mentors' && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Mentor Details</h2>
                <p className="text-gray-600">Manage and monitor mentor performance.</p>
              </div>
              <MentorManagement mentors={mentors} />
            </>
          )}

          {activeTab === 'students' && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Details</h2>
                <p className="text-gray-600">Manage student accounts and track performance.</p>
              </div>
              <StudentManagement students={students} />
            </>
          )}

          {activeTab === 'sessions' && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Session Details</h2>
                <p className="text-gray-600">Monitor live, upcoming, and ended sessions.</p>
              </div>
              <SessionManagement 
                liveSessions={sessionData.liveSessions}
                upcomingSessions={sessionData.upcomingSessions}
                endedSessions={sessionData.endedSessions}
              />
            </>
          )}

          {activeTab === 'content' && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h2>
                <p className="text-gray-600">Manage website content and pages.</p>
              </div>
              <ContentManagement />
            </>
          )}

          {activeTab === 'social' && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Social Media</h2>
                <p className="text-gray-600">Manage social media links and settings.</p>
              </div>
              <SocialMediaSettings 
                links={socialLinks}
                onInputChange={handleSocialLinksChange}
                onSave={handleSocialLinksSave}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
