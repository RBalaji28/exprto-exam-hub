
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Users, Star, Scan, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Payment = () => {
  const { sessionId } = useParams();
  const [isScanning, setIsScanning] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);

  // Sample session data - in real app, fetch by sessionId
  const session = {
    id: sessionId,
    title: "JEE Advanced Strategy",
    mentor: "Dr. Arjun Mehta",
    date: "Jan 25, 2024",
    time: "10:00 AM",
    duration: "1 hour",
    availableSlots: 6,
    totalSlots: 10,
    rating: 4.9,
    subjects: ["Physics", "Mathematics"],
    price: 500
  };

  const startScanner = () => {
    setIsScanning(true);
    setScannerActive(true);
    
    // Simulate QR code scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScannerActive(false);
      setPaymentComplete(true);
      toast.success("Payment successful! Session booked.");
    }, 3000);
  };

  const handleManualPayment = () => {
    // Simulate manual payment process
    setPaymentComplete(true);
    toast.success("Payment successful! Session booked.");
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
              <p className="text-gray-600">Your session has been booked successfully.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold">{session.title}</h3>
              <p className="text-sm text-gray-600">by {session.mentor}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{session.date}</span>
                <span>{session.time}</span>
              </div>
              <div className="text-lg font-bold">₹{session.price}</div>
            </div>

            <div className="space-y-3">
              <Link to="/student-dashboard">
                <Button className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
              
              <Link to="/booking-sessions">
                <Button variant="outline" className="w-full">
                  Book More Sessions
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/booking-sessions" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft size={20} />
              <span>Back to Sessions</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Session Details */}
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{session.title}</h3>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {session.availableSlots}/{session.totalSlots} slots
                  </Badge>
                </div>
                
                <p className="text-gray-600">by {session.mentor}</p>
                
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{session.rating}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{session.date}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{session.time} • {session.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{session.availableSlots} available</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {session.subjects.map((subject, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold">₹{session.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Scanner Section */}
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Scan className="h-5 w-5" />
                  Scan QR Code to Pay
                </h3>
                
                {scannerActive ? (
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="animate-pulse">
                        <Scan className="h-12 w-12 mx-auto text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600">Scanning for QR code...</p>
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Scan className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">Click below to start QR scanner</p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={startScanner} 
                  disabled={isScanning}
                  className="w-full"
                >
                  {isScanning ? "Scanning..." : "Start QR Scanner"}
                </Button>
              </div>

              {/* Alternative Payment Method */}
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold">Alternative Payment</h3>
                <p className="text-sm text-gray-600">
                  If QR scanner is not working, you can proceed with manual payment.
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleManualPayment}
                  className="w-full"
                >
                  Proceed with Manual Payment
                </Button>
              </div>

              {/* Payment Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Payment Information</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Secure payment processing</li>
                  <li>• Instant booking confirmation</li>
                  <li>• 24/7 customer support</li>
                  <li>• Refund available up to 24 hours before session</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Payment;
