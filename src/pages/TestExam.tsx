import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { toast } from "sonner";

// Mock questions data
const mockQuestions = [
  {
    id: "1",
    question: "Which symbol is used to declare variable in PHP?",
    options: ["#", "@", "$", "%"],
    correctAnswer: "$"
  },
  {
    id: "2", 
    question: "Which keyword is used to declare constant variable in Java?",
    options: ["const", "constant", "final", "static"],
    correctAnswer: "final"
  },
  {
    id: "3",
    question: "Which keyword is used to use interface with class in Java?",
    options: ["extends", "implements", "interface", "class"],
    correctAnswer: "implements"
  },
  {
    id: "4",
    question: "In C++, how to create object?",
    options: ["using \"new\" keyword", "using \"create\" keyword", "using \"make\" keyword", "using \"constant\" keyword"],
    correctAnswer: "using \"new\" keyword"
  },
  {
    id: "5",
    question: "What is the correct syntax for a for loop in JavaScript?",
    options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
    correctAnswer: "for (i = 0; i <= 5; i++)"
  }
];

const TestExam = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmitExam();
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = mockQuestions[currentQuestionIndex];

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitExam = () => {
    const correctAnswers = mockQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
    const totalQuestions = mockQuestions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Navigate to results page with results
    navigate(`/test-result/${testId}`, {
      state: {
        answers,
        questions: mockQuestions,
        correctAnswers,
        totalQuestions,
        percentage,
        timeTaken: 300 - timeLeft
      }
    });
    
    setIsSubmitted(true);
    toast.success("Exam submitted successfully!");
  };

  const getQuestionStatus = (index: number) => {
    const question = mockQuestions[index];
    if (answers[question.id]) return "answered";
    if (index === currentQuestionIndex) return "current";
    return "unanswered";
  };

  const getQuestionStatusColor = (status: string) => {
    switch (status) {
      case "answered": return "bg-green-100 text-green-800 border-green-300";
      case "current": return "bg-blue-100 text-blue-800 border-blue-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>JEE Main Mathematics - Algebra</CardTitle>
                <p className="text-muted-foreground mt-1">Question {currentQuestionIndex + 1} of {mockQuestions.length}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-red-600">
                  <Clock size={20} />
                  <span className="font-mono text-lg font-bold">Time Left: {formatTime(timeLeft)}</span>
                </div>
                <Button 
                  onClick={handleSubmitExam}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Panel */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 lg:grid-cols-1 gap-2">
                {mockQuestions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`h-10 ${getQuestionStatusColor(status)}`}
                    >
                      {index + 1}
                    </Button>
                  );
                })}
              </div>
              
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                  <span>Answered ({Object.keys(answers).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                  <span>Unanswered ({mockQuestions.length - Object.keys(answers).length})</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Panel */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Question {currentQuestionIndex + 1}</Badge>
                {answers[currentQuestion.id] && (
                  <Badge className="bg-green-100 text-green-800">
                    <Flag size={12} className="mr-1" />
                    Answered
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                
                <RadioGroup
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === mockQuestions.length - 1}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestExam;