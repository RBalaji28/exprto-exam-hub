import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Download } from "lucide-react";

interface Payment {
  id: string;
  studentName: string;
  email: string;
  domain: string;
  sessionId?: string;
  mentorName?: string;
  subscriptionPlan?: string;
  amount: number;
  status: string;
  paymentDate: string;
  type: 'session' | 'subscription';
}

interface PaymentManagementProps {
  payments: Payment[];
}

const PaymentManagement = ({ payments }: PaymentManagementProps) => {
  const sessionPayments = payments.filter(p => p.type === 'session');
  const subscriptionPayments = payments.filter(p => p.type === 'subscription');

  const renderPaymentTable = (paymentList: Payment[], type: 'session' | 'subscription') => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {type === 'session' ? 'Session Payments' : 'Subscription Payments'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Email ID</TableHead>
              <TableHead>Domain</TableHead>
              {type === 'session' ? (
                <TableHead>Session ID</TableHead>
              ) : (
                <>
                  <TableHead>Mentor Name</TableHead>
                  <TableHead>Plan</TableHead>
                </>
              )}
              <TableHead>Amount Paid</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentList.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.studentName}</TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {payment.domain}
                  </Badge>
                </TableCell>
                {type === 'session' ? (
                  <TableCell>{payment.sessionId}</TableCell>
                ) : (
                  <>
                    <TableCell>{payment.mentorName}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {payment.subscriptionPlan}
                      </Badge>
                    </TableCell>
                  </>
                )}
                <TableCell className="font-semibold">₹{payment.amount}</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      payment.status === 'Completed' 
                        ? "bg-green-100 text-green-800" 
                        : payment.status === 'Pending'
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell>{payment.paymentDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment Management</h2>
        <Button className="bg-blue-600 text-white">
          <Download size={16} className="mr-2" />
          Export Report
        </Button>
      </div>

      {/* Filter Section */}
      <div className="flex gap-4 mb-6">
        <Select defaultValue="all">
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

        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Payment Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payment Tabs */}
      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="subscriptions">Subscription Payments</TabsTrigger>
          <TabsTrigger value="sessions">Session Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="subscriptions" className="mt-6">
          {renderPaymentTable(subscriptionPayments, 'subscription')}
        </TabsContent>
        <TabsContent value="sessions" className="mt-6">
          {renderPaymentTable(sessionPayments, 'session')}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentManagement;