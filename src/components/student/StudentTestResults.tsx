import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Clock, Calendar, Eye, Target } from "lucide-react";

// Mock data for student test results
const mockTestResults = [
  {
    id: "1",
    testName: "JEE Main Mathematics - Algebra",
    subject: "Mathematics",
    category: "JEE",
    score: 85,
    totalMarks: 100,
    percentage: 85,
    timeTaken: "45 mins",
    completedDate: "2024-01-20",
    difficulty: "Medium",
    questionsAttempted: 28,
    totalQuestions: 30
  },
  {
    id: "2",
    testName: "NEET Biology - Human Physiology", 
    subject: "Biology",
    category: "NEET",
    score: 92,
    totalMarks: 100,
    percentage: 92,
    timeTaken: "42 mins",
    completedDate: "2024-01-18",
    difficulty: "Hard",
    questionsAttempted: 45,
    totalQuestions: 45
  },
  {
    id: "3",
    testName: "JEE Main Physics - Mechanics",
    subject: "Physics", 
    category: "JEE",
    score: 78,
    totalMarks: 100,
    percentage: 78,
    timeTaken: "50 mins",
    completedDate: "2024-01-15",
    difficulty: "Medium",
    questionsAttempted: 25,
    totalQuestions: 30
  }
];

const StudentTestResults = () => {
  const averageScore = mockTestResults.reduce((sum, test) => sum + test.percentage, 0) / mockTestResults.length;
  const totalTestsTaken = mockTestResults.length;
  const bestScore = Math.max(...mockTestResults.map(test => test.percentage));

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 bg-green-50";
    if (percentage >= 75) return "text-blue-600 bg-blue-50";
    if (percentage >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tests Taken</p>
                <p className="text-2xl font-bold">{totalTestsTaken}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold">{averageScore.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Score</p>
                <p className="text-2xl font-bold">{bestScore}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Results Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target size={20} />
            Your Test Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Test Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Time Taken</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTestResults.map((test) => (
                <TableRow key={test.id}>
                  <TableCell className="font-medium">{test.testName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{test.category}</Badge>
                  </TableCell>
                  <TableCell>{test.subject}</TableCell>
                  <TableCell>
                    <Badge className={`${getPerformanceColor(test.percentage)} border-0 font-semibold`}>
                      {test.percentage}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {test.questionsAttempted}/{test.totalQuestions}
                  </TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Clock size={14} />
                    {test.timeTaken}
                  </TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Calendar size={14} />
                    {test.completedDate}
                  </TableCell>
                  <TableCell>
                    <Badge className={`text-xs ${getDifficultyColor(test.difficulty)}`}>
                      {test.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye size={14} />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentTestResults;