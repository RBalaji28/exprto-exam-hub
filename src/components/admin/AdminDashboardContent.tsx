import { useSearchParams } from "react-router-dom";
import DashboardStats from "@/components/admin/DashboardStats";
import MentorManagement from "@/components/admin/MentorManagement";
import StudentManagement from "@/components/admin/StudentManagement";
import SessionManagement from "@/components/admin/SessionManagement";
import PaymentManagement from "@/components/admin/PaymentManagement";
import SocialMediaSettings from "@/components/admin/SocialMediaSettings";
import ContentManagement from "@/components/admin/ContentManagement";
import BlogManagement from "@/components/admin/BlogManagement";
import TestManagement from "@/components/admin/TestManagement";
import { dashboardStats, students, sessionData, payments } from "@/data/adminMockData";

interface AdminDashboardContentProps {
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  onSocialLinksChange: (platform: string, value: string) => void;
  onSocialLinksSave: () => void;
}

const AdminDashboardContent = ({ 
  socialLinks, 
  onSocialLinksChange, 
  onSocialLinksSave 
}: AdminDashboardContentProps) => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');

  return (
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
          <MentorManagement />
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

      {activeTab === 'blogs' && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h2>
            <p className="text-gray-600">Create and manage blog posts with preview functionality.</p>
          </div>
          <BlogManagement />
        </>
      )}

      {activeTab === 'payments' && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Details</h2>
            <p className="text-gray-600">Monitor student payments and transaction history.</p>
          </div>
          <PaymentManagement payments={payments} />
        </>
      )}

      {activeTab === 'tests' && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Management</h2>
            <p className="text-gray-600">Create and manage test questions and portal content.</p>
          </div>
          <TestManagement />
        </>
      )}
    </main>
  );
};

export default AdminDashboardContent;