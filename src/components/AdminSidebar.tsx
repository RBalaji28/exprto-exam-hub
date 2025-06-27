
import { Users, GraduationCap, Calendar, CreditCard, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/admin-dashboard" },
    { icon: GraduationCap, label: "Mentor Details", path: "/admin/mentors" },
    { icon: Users, label: "Student Details", path: "/admin/students" },
    { icon: Calendar, label: "Session Details", path: "/admin/sessions" },
    { icon: CreditCard, label: "Payment Details", path: "/admin/payments" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/5d782425-50a4-4419-8ded-ab9e0ed405cb.png" 
            alt="MentxTv" 
            className="w-8 h-8"
          />
          <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-blue-100 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
