import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save, Edit3 } from "lucide-react";

interface SubscriptionPlan {
  id: string;
  duration: string;
  price: number;
  features: string[];
  description: string;
}

const MentorSubscriptionManager = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([
    {
      id: "1month",
      duration: "1 Month",
      price: 500,
      description: "Perfect for getting started",
      features: [
        "Join mentor's WhatsApp community",
        "Monthly live group classes with mentors",
        "Personalized study plan generator",
        "Doubt-solving sessions within 24 hours",
        "Full access to all study materials",
        "Unlimited mentor Q&A sessions via chat",
        "1-on-1 mentor sessions (video calls) – 1 time per month"
      ]
    },
    {
      id: "6months",
      duration: "6 Months",
      price: 2500,
      description: "Best value for consistent learning",
      features: [
        "All features from 1 Month plan",
        "Weekly 1-on-1 mentor sessions",
        "Priority doubt resolution",
        "Access to exclusive study groups",
        "Performance tracking and analytics",
        "Personalized exam strategies"
      ]
    },
    {
      id: "1year",
      duration: "1 Year",
      price: 4500,
      description: "Complete mentorship journey",
      features: [
        "All features from 6 Months plan",
        "Unlimited 1-on-1 mentor sessions",
        "Dedicated personal mentor assigned",
        "Real-time doubt-solving (chat/video)",
        "Weekly performance review sessions",
        "Offline support (phone mentoring sessions)",
        "Career guidance and counseling"
      ]
    }
  ]);

  const [editingPlan, setEditingPlan] = useState<string | null>(null);

  const handlePriceChange = (planId: string, newPrice: number) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, price: newPrice } : plan
    ));
  };

  const handleDescriptionChange = (planId: string, newDescription: string) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, description: newDescription } : plan
    ));
  };

  const handleFeatureChange = (planId: string, featureIndex: number, newFeature: string) => {
    setPlans(plans.map(plan => 
      plan.id === planId 
        ? { 
            ...plan, 
            features: plan.features.map((feature, index) => 
              index === featureIndex ? newFeature : feature
            )
          }
        : plan
    ));
  };

  const addFeature = (planId: string) => {
    setPlans(plans.map(plan => 
      plan.id === planId 
        ? { ...plan, features: [...plan.features, ""] }
        : plan
    ));
  };

  const removeFeature = (planId: string, featureIndex: number) => {
    setPlans(plans.map(plan => 
      plan.id === planId 
        ? { 
            ...plan, 
            features: plan.features.filter((_, index) => index !== featureIndex)
          }
        : plan
    ));
  };

  const savePlans = () => {
    // Here you would typically save to backend/database
    console.log("Saving plans:", plans);
    alert("Subscription plans saved successfully!");
    setEditingPlan(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Manage Subscription Plans</h2>
          <p className="text-gray-600">Customize your subscription offerings</p>
        </div>
        <Button onClick={savePlans} className="bg-green-600 text-white">
          <Save size={16} className="mr-2" />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">{plan.duration} Plan</CardTitle>
                  <div className="mt-2">
                    {editingPlan === plan.id ? (
                      <div className="space-y-2">
                        <div>
                          <Label htmlFor={`price-${plan.id}`}>Price (₹)</Label>
                          <Input
                            id={`price-${plan.id}`}
                            type="number"
                            value={plan.price}
                            onChange={(e) => handlePriceChange(plan.id, Number(e.target.value))}
                            className="w-32"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`desc-${plan.id}`}>Description</Label>
                          <Input
                            id={`desc-${plan.id}`}
                            value={plan.description}
                            onChange={(e) => handleDescriptionChange(plan.id, e.target.value)}
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">₹{plan.price}</span>
                          <span className="text-gray-600">/{plan.duration.toLowerCase()}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingPlan(editingPlan === plan.id ? null : plan.id)}
                >
                  <Edit3 size={14} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Label>Features:</Label>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {editingPlan === plan.id ? (
                      <>
                        <Input
                          value={feature}
                          onChange={(e) => handleFeatureChange(plan.id, index, e.target.value)}
                          className="flex-1"
                          placeholder="Enter feature"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFeature(plan.id, index)}
                          className="text-red-600"
                        >
                          ×
                        </Button>
                      </>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    )}
                  </div>
                ))}
                {editingPlan === plan.id && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addFeature(plan.id)}
                    className="w-full mt-2"
                  >
                    + Add Feature
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Click the edit icon on any plan to modify its price, description, and features</li>
          <li>• Use "Add Feature" to include new benefits for your subscription plans</li>
          <li>• Click "Save All Changes" to update your subscription offerings</li>
          <li>• These changes will be reflected on your public subscription page</li>
        </ul>
      </div>
    </div>
  );
};

export default MentorSubscriptionManager;