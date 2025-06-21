
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const MentorTeam = () => {
  const mentors = [
    {
      name: "Hritishna Nayak",
      title: "NEET Topper",
      institution: "FMMC Hospital,Balasore Odisha",
      image: "https://images.unsplash.com/photo-1494790108755-2616c06a9c0f?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Cihir Reddy",
      title: "JEE Topper",
      institution: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Utkarsh Panwar",
      title: "NEET Topper",
      institution: "VMMC Safdarjung Hospital, New Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Team of <span className="text-blue-600">Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To guide you through each step with their expertise and skills we connect you with expert mentors having proven 
            success records in <span className="font-semibold text-gray-900">NEET | IIT-JEE</span> exams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-32 h-32 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {mentor.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                {mentor.title}
              </p>
              <p className="text-gray-600 text-sm">
                {mentor.institution}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default MentorTeam;
