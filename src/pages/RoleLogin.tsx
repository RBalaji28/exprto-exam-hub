
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, UserCheck, Shield, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const RoleLogin = () => {
  const navigate = useNavigate();

  const handleRoleLogin = (role: string) => {
    // Store role in localStorage for demo purposes
    localStorage.setItem('userRole', role);
    
    // Navigate to respective dashboard
    switch(role) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'mentor':
        navigate('/mentor-dashboard');
        break;
      case 'student':
        navigate('/student-dashboard');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/5d782425-50a4-4419-8ded-ab9e0ed405cb.png" 
                alt="MentxTv" 
                className="w-10 h-10"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Choose Your Role</CardTitle>
            <CardDescription className="text-gray-600">
              Select how you want to access MentxTv
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Admin Login */}
            <Button
              onClick={() => handleRoleLogin('admin')}
              className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-3"
            >
              <Shield size={24} />
              <span className="text-lg">Login as Admin</span>
            </Button>

            {/* Mentor Login */}
            <Button
              onClick={() => handleRoleLogin('mentor')}
              className="w-full h-16 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-3"
            >
              <UserCheck size={24} />
              <span className="text-lg">Login as Mentor</span>
            </Button>

            {/* Student Login */}
            <Button
              onClick={() => handleRoleLogin('student')}
              className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-3"
            >
              <User size={24} />
              <span className="text-lg">Login as Student</span>
            </Button>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 mb-2">
                Don't have a student account?
              </p>
              <Link 
                to="/signup" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up as Student
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleLogin;
