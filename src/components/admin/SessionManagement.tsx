
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import StudentDetailsModal from "./StudentDetailsModal";
import { studentSessionData } from "@/data/adminMockData";

interface LiveSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  domain: string;
  studentsAttending: number;
  feedbackGiven: boolean;
}

interface UpcomingSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  domain: string;
  studentsRegistered: number;
  canDelete: boolean;
}

interface EndedSession {
  id: string;
  mentorName: string;
  mentorId: string;
  subject: string;
  domain: string;
  studentsAttended: number;
  feedbackCollected: boolean;
}

interface SessionManagementProps {
  liveSessions: LiveSession[];
  upcomingSessions: UpcomingSession[];
  endedSessions: EndedSession[];
}

const SessionManagement = ({ liveSessions, upcomingSessions, endedSessions }: SessionManagementProps) => {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalState, setModalState] = useState({
    isOpen: false,
    sessionId: "",
    sessionType: "live" as "live" | "upcoming" | "ended"
  });

  const filterSessions = (sessions: any[], domain: string, category: string) => {
    return sessions.filter(session => {
      const matchesDomain = domain === "all" || session.domain?.toLowerCase() === domain.toLowerCase();
      return matchesDomain;
    });
  };

  const filteredLiveSessions = filterSessions(liveSessions, selectedDomain, selectedCategory);
  const filteredUpcomingSessions = filterSessions(upcomingSessions, selectedDomain, selectedCategory);
  const filteredEndedSessions = filterSessions(endedSessions, selectedDomain, selectedCategory);

  const getSessionsToShow = () => {
    if (selectedCategory === "live") return filteredLiveSessions;
    if (selectedCategory === "upcoming") return filteredUpcomingSessions;
    if (selectedCategory === "ended") return filteredEndedSessions;
    return [...filteredLiveSessions, ...filteredUpcomingSessions, ...filteredEndedSessions];
  };

  const openModal = (sessionId: string, sessionType: "live" | "upcoming" | "ended") => {
    setModalState({ isOpen: true, sessionId, sessionType });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, sessionId: "", sessionType: "live" });
  };

  const getStudentData = () => {
    const sessionKey = modalState.sessionId as keyof typeof studentSessionData;
    return studentSessionData[sessionKey] || [];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Session Details</h2>
      </div>
      
      {/* Filter Section */}
      <div className="flex gap-4 mb-6">
        <Select value={selectedDomain} onValueChange={setSelectedDomain}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Domains</SelectItem>
            <SelectItem value="jee">JEE</SelectItem>
            <SelectItem value="neet">NEET</SelectItem>
            <SelectItem value="upsc">UPSC</SelectItem>
            <SelectItem value="gate">GATE</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
      {(selectedCategory === "all" || selectedCategory === "live") && (
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
                  <TableHead>Domain</TableHead>
                  <TableHead>Total Students Present</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLiveSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.id}</TableCell>
                    <TableCell>{session.mentorName}</TableCell>
                    <TableCell>{session.mentorId}</TableCell>
                    <TableCell>
                      <Badge className="bg-red-100 text-red-800">{session.subject}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">{session.domain}</Badge>
                    </TableCell>
                    <TableCell>{session.studentsAttending}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-blue-100 text-blue-800"
                          onClick={() => openModal(session.id, "live")}
                        >
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
      )}

      {/* Upcoming Sessions Table */}
      {(selectedCategory === "all" || selectedCategory === "upcoming") && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>Mentor Name</TableHead>
                  <TableHead>Mentor ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Students Registered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUpcomingSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.id}</TableCell>
                    <TableCell>{session.mentorName}</TableCell>
                    <TableCell>{session.mentorId}</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800">{session.subject}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">{session.domain}</Badge>
                    </TableCell>
                    <TableCell>{session.studentsRegistered}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-blue-100 text-blue-800"
                          onClick={() => openModal(session.id, "upcoming")}
                        >
                          View Details
                        </Button>
                        {session.canDelete && (
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 size={14} />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Ended Sessions Table */}
      {(selectedCategory === "all" || selectedCategory === "ended") && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ended Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>Mentor Name</TableHead>
                  <TableHead>Mentor ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Students Attended</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEndedSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.id}</TableCell>
                    <TableCell>{session.mentorName}</TableCell>
                    <TableCell>{session.mentorId}</TableCell>
                    <TableCell>
                      <Badge className="bg-gray-100 text-gray-800">{session.subject}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">{session.domain}</Badge>
                    </TableCell>
                    <TableCell>{session.studentsAttended}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-blue-100 text-blue-800"
                          onClick={() => openModal(session.id, "ended")}
                        >
                          View Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Quick Navigation */}
      <div className="flex gap-4 mt-6">
        <Button className="bg-blue-600 text-white">
          See Live Class
        </Button>
        <Button variant="outline">
          Total Mentors
        </Button>
      </div>

      {/* Student Details Modal */}
      <StudentDetailsModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        sessionId={modalState.sessionId}
        sessionType={modalState.sessionType}
        students={getStudentData()}
      />
    </div>
  );
};

export default SessionManagement;
