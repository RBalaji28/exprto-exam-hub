
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const featuredArticle = {
    title: "Highest Number of Students Appeared in JEE Main 2024 in the History of NTA",
    description: "This blog delves into key aspects of the JEE-Main 2024, including the selection criteria for JEE Advanced, percentile cutoffs, the perfect 100-percentile scorers, and state-wise toppers. Additionally, we explore the tie-breaking criteria introduced this year, ensuring a fair assessment for all participants.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    date: "November 15, 2024",
    author: "MentxTv Team"
  };

  const articles = [
    {
      title: "Finding Your Guide to Success: Choosing the Perfect Mentor for NEET | MentxTv",
      description: "Finding Your Guide to Success: How to Choose the Perfect Mentor for NEET highlights the importance of mentorship in NEET preparation. It explains how the right mentor can offer essential...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      date: "08 Nov 2024",
      category: "NEET Preparation",
      color: "bg-blue-600"
    },
    {
      title: "Empower Your Child: A Parent's Guide to Academic Excellence",
      description: "Discover effective ways to help your child thrive in school with our guide for parents. Learn simple strategies to empower your child, keep them motivated, and get involved in their learning...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      date: "29 Oct 2024",
      category: "Parent Guide",
      color: "bg-purple-600"
    },
    {
      title: "Next Level Prep: Top 10 Books for IIT-JEE and NEET Exam in 2025 Aspirant's",
      description: "Preparing for competitive exams like JEE and NEET can be overwhelming, but with the right books, it becomes more manageable. This blog highlights the top 10 essential books tha...",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      date: "21 Oct 2024",
      category: "Study Materials",
      color: "bg-blue-500"
    },
    {
      title: "Unlock Your Future: How to Choose the Right Stream",
      description: "Choosing the right academic stream is one of the most important decisions you'll make. This comprehensive guide will help you understand different streams and make an informed choice.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      date: "15 Oct 2024",
      category: "Career Guidance",
      color: "bg-teal-600"
    },
    {
      title: "Highest Number of Students Appeared in JEE-Main 2024 in the History of NTA",
      description: "An in-depth analysis of JEE Main 2024 statistics, including participation rates, cutoff trends, and success stories from top performers across the country.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      date: "05 Oct 2024",
      category: "JEE Analysis",
      color: "bg-orange-600"
    },
    {
      title: "Topper-Approved Study Techniques for NEET/JEE 2025:",
      description: "Learn the proven study methods used by top scorers in NEET and JEE. These techniques have been tested and approved by successful candidates.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      date: "28 Sep 2024",
      category: "Study Tips",
      color: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Featured Article */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h1>
            <p className="text-xl text-gray-600">Stay updated with the latest insights and tips for exam preparation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {featuredArticle.description}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{featuredArticle.author}</span>
                </div>
              </div>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2"
              >
                <span>Read More</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-12">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Explore Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Articles
            </h2>
            <p className="text-xl text-gray-600">Discover more insights and guidance for your exam preparation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${article.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <Button 
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
