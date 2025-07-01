
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

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
      <h2 className="text-2xl font-bold">Session Details</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Live Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {liveSessions.map((session) => (
              <div key={session.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{session.mentorName}</span>
                  <Badge className="bg-red-100 text-red-800">LIVE</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Subject: {session.subject}</p>
                  <p>Students: {session.studentsAttending}</p>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{session.mentorName}</span>
                  <Badge variant="outline">UPCOMING</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Subject: {session.subject}</p>
                  <p>Registered: {session.studentsRegistered}</p>
                </div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View
                  </Button>
                  {session.canDelete && (
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 size={14} />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ended Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ended Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {endedSessions.map((session) => (
              <div key={session.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{session.mentorName}</span>
                  <Badge variant="outline" className="text-gray-600">ENDED</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Subject: {session.subject}</p>
                  <p>Attended: {session.studentsAttended}</p>
                  <p>Feedback: {session.feedbackCollected ? 'Collected' : 'Pending'}</p>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SessionManagement;
