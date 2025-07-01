
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioIcon, Video } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const StudentSessions = () => {
  const { bookedSessions } = useUser();

  // Filter sessions based on status
  const pastSessions = bookedSessions.filter(session => session.status === 'completed');
  const upcomingSessions = bookedSessions.filter(session => session.status === 'upcoming');
  const liveSessions = bookedSessions.filter(session => session.status === 'live');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Live Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <RadioIcon className="h-5 w-5 text-red-600" />
            Live Sessions
          </CardTitle>
          <p className="text-sm text-gray-600">Currently ongoing sessions</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liveSessions.length > 0 ? (
              liveSessions.map((session, index) => (
                <div key={index} className="p-4 border rounded-lg bg-red-50 border-red-200">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-gray-600">{session.mentor}</p>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>{session.date}</p>
                        <p>{session.time}</p>
                        <Badge variant="outline" className="text-red-600 border-red-600 mt-1">
                          LIVE
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 flex items-center gap-2"
                      onClick={() => window.open('https://meet.google.com/', '_blank')}
                    >
                      <Video size={16} />
                      Join Live Session
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No live sessions</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
          <p className="text-sm text-gray-600">Your scheduled sessions</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-gray-600">{session.mentor}</p>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>{session.date}</p>
                        <p>{session.time}</p>
                      </div>
                    </div>
                    {session.paymentStatus === 'paid' && (
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2"
                        onClick={() => window.open('https://meet.google.com/', '_blank')}
                      >
                        <Video size={16} />
                        Open Meeting
                      </Button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No upcoming sessions</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Past Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Past Sessions</CardTitle>
          <p className="text-sm text-gray-600">Your completed sessions</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastSessions.length > 0 ? (
              pastSessions.map((session, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium">{session.title}</p>
                      <p className="text-sm text-gray-600">{session.mentor}</p>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {session.date}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No completed sessions yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentSessions;
