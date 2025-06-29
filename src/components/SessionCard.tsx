
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface SessionCardProps {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
  duration: string;
  availableSlots: number;
  totalSlots: number;
  rating: number;
  subjects: string[];
  price: number;
  isBooked?: boolean;
}

const SessionCard = ({
  id,
  title,
  mentor,
  date,
  time,
  duration,
  availableSlots,
  totalSlots,
  rating,
  subjects,
  price,
  isBooked = false
}: SessionCardProps) => {
  const slotsText = `${availableSlots}/${totalSlots} slots`;
  
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant="outline" className="text-green-600 border-green-600">
              {slotsText}
            </Badge>
          </div>
          
          <p className="text-gray-600">by {mentor}</p>
          
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time} • {duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{availableSlots} available</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {subjects.map((subject, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {subject}
            </Badge>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-2xl font-bold">₹{price}</div>
          
          {isBooked ? (
            <Button disabled className="w-full">
              Booked
            </Button>
          ) : (
            <Link to={`/payment/${id}`} className="block">
              <Button className="w-full">
                Book Now
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
