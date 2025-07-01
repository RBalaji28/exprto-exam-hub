
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import MentorManagement from "@/components/admin/MentorManagement";
import StudentManagement from "@/components/admin/StudentManagement";
import SessionManagement from "@/components/admin/SessionManagement";
import SocialMediaSettings from "@/components/admin/SocialMediaSettings";

const AdminDashboard = () => {
  const { socialMediaLinks, updateSocialMediaLinks } = useUser();
  const [adminImage, setAdminImage] = useState<string | null>(null);
  const adminName = "Admin User";
  const [links, setLinks] = useState({
    instagram: socialMediaLinks.instagram || '',
    twitter: socialMediaLinks.twitter || '',
    youtube: socialMediaLinks.youtube || ''
  });

  // Sample data - replace with actual data from your backend
  const [mentors] = useState([
    { id: 'M001', name: 'Dr. Priya Sharma', domain: 'NEET', rating: 4.8, sessions: 45 },
    { id: 'M002', name: 'Arjun Mehta', domain: 'JEE', rating: 4.6, sessions: 32 },
    { id: 'M003', name: 'Hritishna Nayak', domain: 'NEET', rating: 4.9, sessions: 28 },
    { id: 'M004', name: 'Rahul Kumar', domain: 'UPSC', rating: 4.7, sessions: 22 },
    { id: 'M005', name: 'Sneha Gupta', domain: 'GATE', rating: 4.5, sessions: 35 }
  ]);

  const [students] = useState([
    { id: 'S001', name: 'Ankit Sharma', email: 'ankit@example.com', domain: 'JEE', sessionsAttended: 15, performance: 85 },
    { id: 'S002', name: 'Priya Singh', email: 'priya@example.com', domain: 'NEET', sessionsAttended: 12, performance: 92 },
    { id: 'S003', name: 'Raj Patel', email: 'raj@example.com', domain: 'UPSC', sessionsAttended: 8, performance: 78 }
  ]);

  const [liveSessions] = useState([
    { id: 'L001', mentorName: 'Dr. Arjun Mehta', mentorId: 'M002', subject: 'JEE', studentsAttending: 8, feedbackGiven: true },
    { id: 'L002', mentorName: 'Priya Sharma', mentorId: 'M001', subject: 'NEET', studentsAttending: 12, feedbackGiven: false }
  ]);

  const [upcomingSessions] = useState([
    { id: 'U001', mentorName: 'Rahul Kumar', mentorId: 'M004', subject: 'UPSC', studentsRegistered: 6, canDelete: true },
    { id: 'U002', mentorName: 'Sneha Gupta', mentorId: 'M005', subject: 'GATE', studentsRegistered: 15, canDelete: false }
  ]);

  const [endedSessions] = useState([
    { id: 'E001', mentorName: 'Dr. Priya Sharma', mentorId: 'M001', subject: 'NEET', studentsAttended: 10, feedbackCollected: true },
    { id: 'E002', mentorName: 'Hritishna Nayak', mentorId: 'M003', subject: 'NEET', studentsAttended: 8, feedbackCollected: false }
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdminImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (platform: string, value: string) => {
    setLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleSave = () => {
    updateSocialMediaLinks(links);
    toast.success("Social media links updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader
        adminName={adminName}
        adminImage={adminImage}
        onImageUpload={handleImageUpload}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="mentors">Mentor Details</TabsTrigger>
            <TabsTrigger value="students">Student Details</TabsTrigger>
            <TabsTrigger value="sessions">Session Details</TabsTrigger>
            <TabsTrigger value="payments">Payment Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <DashboardStats
              mentorCount={mentors.length}
              studentCount={students.length}
              liveSessionCount={liveSessions.length}
              upcomingSessionCount={upcomingSessions.length}
            />
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            <MentorManagement mentors={mentors} />
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <StudentManagement students={students} />
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <SessionManagement
              liveSessions={liveSessions}
              upcomingSessions={upcomingSessions}
              endedSessions={endedSessions}
            />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Details</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600">Payment management features will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SocialMediaSettings
              links={links}
              onInputChange={handleInputChange}
              onSave={handleSave}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
