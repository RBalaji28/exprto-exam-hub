
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Load content from localStorage (in a real app, this would come from an API)
    const savedContent = localStorage.getItem('termsAndConditions');
    setContent(savedContent || "Terms and Conditions have not been set by the administrator yet.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {content}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
