
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
  const slotsText = `${availableSlots}/${totalSlots}`;
  
  return (
    <Card className="w-full max-w-sm h-full flex flex-col">
      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg leading-tight">{title}</h3>
            <div className="text-right">
              <Badge 
                variant="outline" 
                className="text-green-600 border-green-600 mb-1 text-xs px-2 py-1"
              >
                {slotsText} slots
              </Badge>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm">by {mentor}</p>
          
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{time} • {duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 flex-shrink-0" />
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

        <div className="mt-auto space-y-3 pt-4">
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
