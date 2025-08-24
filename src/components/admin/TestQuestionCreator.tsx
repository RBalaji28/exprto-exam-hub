import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Save, Upload, Trash2, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

interface TestQuestionCreatorProps {
  testId: string;
  testTitle: string;
  onBack: () => void;
}

const TestQuestionCreator = ({ testId, testTitle, onBack }: TestQuestionCreatorProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    explanation: ""
  });

  const resetCurrentQuestion = () => {
    setCurrentQuestion({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      explanation: ""
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleAddQuestion = () => {
    if (!currentQuestion.question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    if (currentQuestion.options.some(option => !option.trim())) {
      toast.error("Please fill all options");
      return;
    }

    if (!currentQuestion.correctAnswer) {
      toast.error("Please select the correct answer");
      return;
    }

    const newQuestion: Question = {
      id: `q${questions.length + 1}`,
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      explanation: currentQuestion.explanation
    };

    setQuestions([...questions, newQuestion]);
    resetCurrentQuestion();
    toast.success("Question added successfully!");
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(questions.filter(q => q.id !== questionId));
    toast.success("Question deleted successfully!");
  };

  const handleSaveTest = () => {
    if (questions.length === 0) {
      toast.error("Please add at least one question");
      return;
    }
    
    // Mock save functionality
    toast.success("Test saved successfully!");
  };

  const handleUploadToPortal = () => {
    if (questions.length === 0) {
      toast.error("Please add at least one question before uploading");
      return;
    }

    // Mock upload functionality
    toast.success("Test uploaded to portal successfully! Students can now access it.");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Tests
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Create Questions</h2>
          <p className="text-muted-foreground">{testTitle}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button 
          onClick={handleSaveTest}
          className="flex items-center gap-2"
          variant="outline"
        >
          <Save size={16} />
          Save Test
        </Button>
        <Button 
          onClick={handleUploadToPortal}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <Upload size={16} />
          Upload to Test Portal
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Question Creator Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus size={20} />
              Add New Question
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Textarea
                id="question"
                value={currentQuestion.question}
                onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                placeholder="Enter your question here..."
                rows={3}
              />
            </div>

            <div className="space-y-3">
              <Label>Options</Label>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm font-medium min-w-[20px]">{String.fromCharCode(65 + index)}.</span>
                  <Input
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${String.fromCharCode(65 + index)}`}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Label>Correct Answer</Label>
              <RadioGroup
                value={currentQuestion.correctAnswer}
                onValueChange={(value) => setCurrentQuestion({ ...currentQuestion, correctAnswer: value })}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>
                      {String.fromCharCode(65 + index)}. {option || `Option ${String.fromCharCode(65 + index)}`}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="explanation">Explanation (Optional)</Label>
              <Textarea
                id="explanation"
                value={currentQuestion.explanation}
                onChange={(e) => setCurrentQuestion({ ...currentQuestion, explanation: e.target.value })}
                placeholder="Explain the correct answer..."
                rows={2}
              />
            </div>

            <Button onClick={handleAddQuestion} className="w-full">
              <Plus size={16} className="mr-2" />
              Add Question
            </Button>
          </CardContent>
        </Card>

        {/* Questions List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen size={20} />
              Questions Added ({questions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {questions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No questions added yet. Create your first question!
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {questions.map((question, index) => (
                  <Card key={question.id} className="border border-border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs">
                          Question {index + 1}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteQuestion(question.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                      <p className="font-medium text-sm mb-2">{question.question}</p>
                      <div className="space-y-1">
                        {question.options.map((option, optIndex) => (
                          <p 
                            key={optIndex} 
                            className={`text-xs ${option === question.correctAnswer ? 'text-green-600 font-medium' : 'text-muted-foreground'}`}
                          >
                            {String.fromCharCode(65 + optIndex)}. {option}
                            {option === question.correctAnswer && ' ✓'}
                          </p>
                        ))}
                      </div>
                      {question.explanation && (
                        <p className="text-xs text-muted-foreground mt-2 p-2 bg-muted rounded">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestQuestionCreator;