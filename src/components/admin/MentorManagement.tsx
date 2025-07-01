
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Star } from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  domain: string;
  rating: number;
  sessions: number;
}

interface MentorManagementProps {
  mentors: Mentor[];
}

const MentorManagement = ({ mentors }: MentorManagementProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Mentor Details</h2>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Domains" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Domains</SelectItem>
              <SelectItem value="jee">JEE</SelectItem>
              <SelectItem value="neet">NEET</SelectItem>
              <SelectItem value="upsc">UPSC</SelectItem>
              <SelectItem value="gate">GATE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add New Mentor
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mentor Name</TableHead>
                <TableHead>Mentor ID</TableHead>
                <TableHead>Teaching Domain</TableHead>
                <TableHead>Performance Rating</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mentors.map((mentor) => (
                <TableRow key={mentor.id}>
                  <TableCell className="font-medium">{mentor.name}</TableCell>
                  <TableCell>{mentor.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {mentor.domain}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(mentor.rating)}</div>
                      <span className="text-sm">({mentor.rating})</span>
                    </div>
                  </TableCell>
                  <TableCell>{mentor.sessions}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit size={14} />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 size={14} />
                      </Button>
                    </div>
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

export default MentorManagement;
