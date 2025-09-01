
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import ExamDetails from "./pages/ExamDetails";
import BecomeMentor from "./pages/BecomeMentor";
import TestPortal from "./pages/TestPortal";
import TestExam from "./pages/TestExam";
import TestResult from "./pages/TestResult";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import MentorSubscribers from "./pages/MentorSubscribers";
import ChatPlatform from "./pages/ChatPlatform";
import AdminDashboard from "./pages/AdminDashboard";
import BookingSessions from "./pages/BookingSessions";
import Payment from "./pages/Payment";
import SessionDetails from "./pages/SessionDetails";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PostSession from "./pages/PostSession";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Mentors from "./pages/Mentors";
import SubscribePlans from "./pages/SubscribePlans";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/exam-details" element={<ExamDetails />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/test-portal" element={<TestPortal />} />
            <Route path="/test-exam/:testId" element={<TestExam />} />
        <Route path="/test-result/:testId" element={<TestResult />} />
        <Route path="/mentor-subscribers" element={<MentorSubscribers />} />
        <Route path="/chat/:userId" element={<ChatPlatform />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/mentor-dashboard" element={<MentorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/booking-sessions" element={<BookingSessions />} />
            <Route path="/payment/:sessionId" element={<Payment />} />
            <Route path="/session-details/:sessionId" element={<SessionDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/post-session" element={
              <ProtectedRoute allowedRoles={["Mentor", "Admin"]}>
                <PostSession />
              </ProtectedRoute>
            } />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentors/:mentorId/subscribe" element={<SubscribePlans />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
