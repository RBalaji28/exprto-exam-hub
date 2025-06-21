
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Exprto</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/become-mentor" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Become a Mentor
              </a>
              <a href="/exam-details" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Exam Details
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="default" 
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium"
            >
              Book a Free Session
            </Button>
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50 px-6 py-2 rounded-full font-medium"
            >
              LOGIN
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
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
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full">
                  Book a Free Session
                </Button>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 rounded-full">
                  LOGIN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
