
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ContentManagement = () => {
  const { toast } = useToast();
  const [aboutUs, setAboutUs] = useState("");
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const handleSaveAboutUs = () => {
    // In a real app, this would save to a database
    localStorage.setItem('aboutUs', aboutUs);
    toast({
      title: "Success",
      description: "About Us content saved successfully",
    });
  };

  const handleSaveTerms = () => {
    localStorage.setItem('termsAndConditions', termsAndConditions);
    toast({
      title: "Success",
      description: "Terms and Conditions saved successfully",
    });
  };

  const handleSavePrivacy = () => {
    localStorage.setItem('privacyPolicy', privacyPolicy);
    toast({
      title: "Success",
      description: "Privacy Policy saved successfully",
    });
  };

  const handleSaveFaqs = () => {
    localStorage.setItem('faqs', JSON.stringify(faqs));
    toast({
      title: "Success",
      description: "FAQs saved successfully",
    });
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updatedFaqs = faqs.map((faq, i) => 
      i === index ? { ...faq, [field]: value } : faq
    );
    setFaqs(updatedFaqs);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-4">
            <div>
              <Label htmlFor="about-content">About Us Content</Label>
              <Textarea
                id="about-content"
                placeholder="Enter About Us content..."
                value={aboutUs}
                onChange={(e) => setAboutUs(e.target.value)}
                className="min-h-[300px]"
              />
            </div>
            <Button onClick={handleSaveAboutUs}>Save About Us</Button>
          </TabsContent>
          
          <TabsContent value="faqs" className="space-y-4">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border p-4 rounded-lg space-y-3">
                  <div>
                    <Label htmlFor={`question-${index}`}>Question {index + 1}</Label>
                    <Input
                      id={`question-${index}`}
                      placeholder="Enter question..."
                      value={faq.question}
                      onChange={(e) => updateFaq(index, 'question', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`answer-${index}`}>Answer {index + 1}</Label>
                    <Textarea
                      id={`answer-${index}`}
                      placeholder="Enter answer..."
                      value={faq.answer}
                      onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                    />
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => removeFaq(index)}
                  >
                    Remove FAQ
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button onClick={addFaq} variant="outline">Add FAQ</Button>
              <Button onClick={handleSaveFaqs}>Save All FAQs</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="terms" className="space-y-4">
            <div>
              <Label htmlFor="terms-content">Terms & Conditions Content</Label>
              <Textarea
                id="terms-content"
                placeholder="Enter Terms & Conditions content..."
                value={termsAndConditions}
                onChange={(e) => setTermsAndConditions(e.target.value)}
                className="min-h-[300px]"
              />
            </div>
            <Button onClick={handleSaveTerms}>Save Terms & Conditions</Button>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-4">
            <div>
              <Label htmlFor="privacy-content">Privacy Policy Content</Label>
              <Textarea
                id="privacy-content"
                placeholder="Enter Privacy Policy content..."
                value={privacyPolicy}
                onChange={(e) => setPrivacyPolicy(e.target.value)}
                className="min-h-[300px]"
              />
            </div>
            <Button onClick={handleSavePrivacy}>Save Privacy Policy</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentManagement;
