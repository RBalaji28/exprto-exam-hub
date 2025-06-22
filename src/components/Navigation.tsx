
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, BookOpen, MessageCircle, Users, HelpCircle, Shield, FileText, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const sideMenuItems = [
    { icon: User, label: "Login/Signup", href: "/login" },
    { icon: Users, label: "Our Mentors", href: "#" },
    { icon: BookOpen, label: "Mentorship Plans", href: "#" },
    { icon: FileText, label: "Blogs", href: "/blogs" },
    { icon: Users, label: "Become a mentor", href: "/become-mentor" },
    { icon: Users, label: "About Us", href: "#" },
    { icon: Users, label: "Our Team", href: "#" },
    { icon: Phone, label: "Contact Us", href: "#" },
    { icon: HelpCircle, label: "FAQ's", href: "#" },
    { icon: Shield, label: "Future Nurture", href: "#" },
    { icon: FileText, label: "Terms and Conditions", href: "#" },
    { icon: Shield, label: "Privacy Policy", href: "#" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/lovable-uploads/5d782425-50a4-4419-8ded-ab9e0ed405cb.png" 
                alt="MentxTv Logo" 
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold text-gray-900">MentxTv</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="/become-mentor" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Become a Mentor
                </a>
                <a href="/exam-details" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Exam Details
                </a>
                <a href="/test-portal" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Test Portal
                </a>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="default" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
              >
                Book a Free Session
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
                onClick={() => window.location.href = '/login'}
              >
                LOGIN
              </Button>
              <button
                onClick={() => setIsSideMenuOpen(true)}
                className="p-2 text-gray-700 hover:text-blue-600"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="/" className="text-gray-900 block px-3 py-2 text-base font-medium">
                  Home
                </a>
                <a href="/become-mentor" className="text-gray-700 block px-3 py-2 text-base font-medium">
                  Become a Mentor
                </a>
                <a href="/exam-details" className="text-gray-700 block px-3 py-2 text-base font-medium">
                  Exam Details
                </a>
                <a href="/test-portal" className="text-gray-700 block px-3 py-2 text-base font-medium">
                  Test Portal
                </a>
                <div className="flex flex-col space-y-2 px-3 py-2">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                    Book a Free Session
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full"
                    onClick={() => window.location.href = '/login'}
                  >
                    LOGIN
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/5d782425-50a4-4419-8ded-ab9e0ed405cb.png" 
                  alt="MentxTv Logo" 
                  className="h-6 w-6"
                />
                <h2 className="text-xl font-bold text-gray-900">MentxTv</h2>
              </div>
              <button
                onClick={() => setIsSideMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-blue-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {sideMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsSideMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
