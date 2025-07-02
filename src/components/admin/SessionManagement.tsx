
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Eye } from "lucide-react";

interface LiveSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  studentsAttending: number;
  feedbackGiven: boolean;
}

interface UpcomingSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  studentsRegistered: number;
  canDelete: boolean;
}

interface EndedSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  studentsAttended: number;
  feedbackCollected: boolean;
}

interface SessionManagementProps {
  liveSessions: LiveSession[];
  upcomingSessions: UpcomingSession[];
  endedSessions: EndedSession[];
}

const SessionManagement = ({ liveSessions, upcomingSessions, endedSessions }: SessionManagementProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Session Details</h2>
      </div>
      
      {/* Filter Section */}
      <div className="flex gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="jee">JEE</SelectItem>
            <SelectItem value="neet">NEET</SelectItem>
            <SelectItem value="upsc">UPSC</SelectItem>
            <SelectItem value="gate">GATE</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="live">Live Session</SelectItem>
            <SelectItem value="upcoming">Upcoming Session</SelectItem>
            <SelectItem value="ended">Ended Session</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Live Sessions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Live Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session ID</TableHead>
                <TableHead>Mentor Name</TableHead>
                <TableHead>Mentor ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Total Students Present</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liveSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">{session.id}</TableCell>
                  <TableCell>{session.mentorName}</TableCell>
                  <TableCell>{session.mentorId}</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800">{session.subject}</Badge>
                  </TableCell>
                  <TableCell>{session.studentsAttending}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-blue-100 text-blue-800">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="bg-green-100 text-green-800">
                        Join Live Class
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Student Details Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Student Details (Live Sessions)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Student Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Arjun Patel</TableCell>
                <TableCell>arjun.patel@email.com</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Attending</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      Remove
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Priya Sharma</TableCell>
                <TableCell>priya.sharma@email.com</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">Not Attending</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      Remove
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <div className="flex gap-4 mt-6">
        <Button className="bg-blue-600 text-white">
          See Live Class
        </Button>
        <Button variant="outline">
          Total Mentors
        </Button>
      </div>
    </div>
  );
};

export default SessionManagement;
