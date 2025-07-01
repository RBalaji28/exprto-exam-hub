
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import MentorManagement from "@/components/admin/MentorManagement";
import StudentManagement from "@/components/admin/StudentManagement";
import SessionManagement from "@/components/admin/SessionManagement";
import SocialMediaSettings from "@/components/admin/SocialMediaSettings";
import ContentManagement from "@/components/admin/ContentManagement";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Manage all aspects of the MentxTv platform.</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MentorManagement />
          <StudentManagement />
        </div>

        <div className="mb-8">
          <SessionManagement />
        </div>

        <div className="mb-8">
          <ContentManagement />
        </div>

        <div className="mb-8">
          <SocialMediaSettings />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
