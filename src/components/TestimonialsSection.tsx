
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote, User } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('student');

  const studentTestimonials = [
    {
      name: "Nilkamal",
      role: "NEET Aspirant",
      testimonial: "Main Nilkamal Baidya, Student of Exprto, mera mentor name J akansha, mera first class ka chuka hai. My mentor advises and guides me all the time. She gave me subject-wise tasks, and advised me how to memorize and which book should I follow.",
      avatar: null
    },
    {
      name: "Kushagra",
      role: "JEE Aspirant", 
      testimonial: "My mentor Sarthak was very helpful. Starting by asking a lot of questions about my day-to-day activities and then guiding me on how I can take out more time for self-study to revise my pending syllabus. The journey went smoothly.",
      avatar: null
    },
    {
      name: "AMU MALICK",
      role: "NEET Aspirant",
      testimonial: "I enrolled in the mentorship program and learned a lot from it. They provide focused and well-organized content. I am particularly very grateful to Exprto ma'am and bhaiya also. Ma'am helped me a lot in terms of understanding any problem. Thank you.",
      avatar: null
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">See What People are Saying About Us!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We aim to provide guidance and success hacks to <span className="font-semibold text-gray-900">NEET | IIT-JEE</span> aspirants and exciting mentorship opportunities 
            to toppers of these exams... but just don't take our word for it.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button
              onClick={() => setActiveTab('student')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'student' 
                  ? 'bg-orange-400 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Student
            </Button>
            <Button
              onClick={() => setActiveTab('mentor')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'mentor' 
                  ? 'bg-orange-400 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Mentor
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote size={32} className="text-green-200" />
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
