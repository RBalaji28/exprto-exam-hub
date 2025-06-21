
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                India's Largest Community of{" "}
                <span className="text-green-600">Mentors & Toppers</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Crack your preparations with guidance from the best.
                Exprto brings to you a community of{" "}
                <span className="font-semibold text-gray-900">NEET | IIT-JEE</span> toppers!
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Grab The Guidance
            </Button>
          </div>

          {/* Right Content - Stats and Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
              
              {/* Student Image Placeholder */}
              <div className="relative z-10 flex justify-center mb-8">
                <div className="w-48 h-48 bg-white/20 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={80} className="text-white/80" />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="space-y-4 relative z-10">
                <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">3000+</p>
                    <p className="text-sm text-gray-600">Sessions Daily</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">35000+</p>
                    <p className="text-sm text-gray-600">Students Impacted</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">1100+</p>
                    <p className="text-sm text-gray-600">Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
