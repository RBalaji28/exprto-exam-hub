import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock blog data - in real app, this would come from your backend
const blogPosts = [
  {
    id: "1",
    title: "Rugby World Cup 2023 Semi-Finals",
    content: `
      <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
      
      <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that's current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p>
      
      <p>"Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you're going for a more editorial style blog - there's a stunning layout for everyone."</p>
      
      <p>You'll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.</p>
      
      <p>Create Relevant Content</p>
      <p>Writing a blog is a great way to position yourself as an authority in your field and captivate your readers' attention. Do you want to improve your site's SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtag (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content.</p>
      
      <p>Blogging gives your site a voice, so let your business' personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "Admin",
    date: "2024-01-15",
    category: "Sports"
  },
  {
    id: "2",
    title: "Study Tips for JEE Preparation",
    content: `
      <p>Preparing for JEE requires dedication, strategy, and consistent effort. Here are some proven tips to help you succeed.</p>
      
      <p>Start with a strong foundation in basic concepts before moving to advanced topics. Regular practice and mock tests are essential for success.</p>
      
      <p>Time management during the exam is crucial. Practice solving questions within time limits to improve your speed and accuracy.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "Dr. Sharma",
    date: "2024-01-10",
    category: "Education"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link to="/blogs">
            <Button variant="outline">Back to Blogs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            {/* Hero Image */}
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-8">
              {/* Article Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Share Button */}
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 size={16} />
                  Share Article
                </Button>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow us on social media</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-pink-600 hover:text-pink-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;