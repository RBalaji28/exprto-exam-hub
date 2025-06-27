
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Edit, Trash2, Star } from "lucide-react";

const AdminMentors = () => {
  const [selectedDomain, setSelectedDomain] = useState("all");

  const mentors = [
    {
      id: "M001",
      name: "Dr. Priya Sharma",
      domain: "NEET",
      rating: 4.8,
      sessions: 45,
      feedback: "Excellent"
    },
    {
      id: "M002", 
      name: "Arjun Mehta",
      domain: "JEE",
      rating: 4.6,
      sessions: 32,
      feedback: "Very Good"
    },
    {
      id: "M003",
      name: "Hritishna Nayak", 
      domain: "NEET",
      rating: 4.9,
      sessions: 28,
      feedback: "Outstanding"
    },
    {
      id: "M004",
      name: "Rahul Kumar",
      domain: "UPSC",
      rating: 4.7,
      sessions: 22,
      feedback: "Excellent"
    },
    {
      id: "M005",
      name: "Sneha Gupta",
      domain: "GATE",
      rating: 4.5,
      sessions: 35,
      feedback: "Good"
    }
  ];

  const filteredMentors = selectedDomain === "all" 
    ? mentors 
    : mentors.filter(mentor => mentor.domain === selectedDomain);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mentor Details</h2>
            <p className="text-gray-600">Manage and monitor mentor performance</p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  <SelectItem value="JEE">JEE</SelectItem>
                  <SelectItem value="NEET">NEET</SelectItem>
                  <SelectItem value="UPSC">UPSC</SelectItem>
                  <SelectItem value="GATE">GATE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              Add New Mentor
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mentor Name</TableHead>
                  <TableHead>Mentor ID</TableHead>
                  <TableHead>Teaching Domain</TableHead>
                  <TableHead>Performance Rating</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMentors.map((mentor) => (
                  <TableRow key={mentor.id}>
                    <TableCell className="font-medium">{mentor.name}</TableCell>
                    <TableCell>{mentor.id}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        mentor.domain === 'NEET' ? 'bg-green-100 text-green-800' :
                        mentor.domain === 'JEE' ? 'bg-blue-100 text-blue-800' :
                        mentor.domain === 'UPSC' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {mentor.domain}
                      </span>
                    </TableCell>
                    <TableCell>{renderStars(mentor.rating)}</TableCell>
                    <TableCell>{mentor.sessions}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye size={16} />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminMentors;
