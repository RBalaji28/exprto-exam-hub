import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, Paperclip, Smile, MoreVertical, Phone, Video } from "lucide-react";

// Mock chat data
const mockMessages = [
  {
    id: 1,
    sender: "student",
    message: "Je vous recontacte rapidement",
    timestamp: "16:41",
    date: "24 février 2020"
  },
  {
    id: 2,
    sender: "mentor",
    message: "Très bien, j'attends de vos nouvelles !",
    timestamp: "17:30",
    date: "24 février 2020"
  },
  {
    id: 3,
    sender: "student",
    message: "Je confirme la signature du contrat ce vendredi à 16h dans nos locaux.",
    timestamp: "9:12",
    date: "Aujourd'hui"
  },
  {
    id: 4,
    sender: "mentor",
    message: "Parfait ! Bonne journée à vous",
    timestamp: "9:20",
    date: "Aujourd'hui"
  },
  {
    id: 5,
    sender: "student",
    message: "Bonne journée également",
    timestamp: "11:28",
    date: "Aujourd'hui"
  },
  {
    id: 6,
    sender: "student",
    message: "Bonjour Jane",
    timestamp: "Aujourd'hui"
  },
  {
    id: 7,
    sender: "student",
    message: "Cela fait longtemps que nous n'avons pas été en contact.",
    timestamp: "8:47",
    date: "Aujourd'hui"
  },
  {
    id: 8,
    sender: "mentor",
    message: "Bonjour Baptiste !",
    timestamp: "9:34",
    date: "Aujourd'hui"
  },
  {
    id: 9,
    sender: "mentor",
    message: "Comment allez-vous ?",
    timestamp: "9:34",
    date: "Aujourd'hui"
  }
];

const ChatPlatform = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const studentName = "Baptiste Durand";
  const isOnline = true;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "mentor" as const,
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: "Aujourd'hui"
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const groupMessagesByDate = (messages: typeof mockMessages) => {
    const groups: { [key: string]: typeof mockMessages } = {};
    messages.forEach(message => {
      const date = message.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    return groups;
  };

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="p-1"
          >
            <ArrowLeft size={20} />
          </Button>
          
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-student.jpg" />
            <AvatarFallback className="bg-purple-100 text-purple-600">
              {studentName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{studentName}</h3>
            <p className="text-sm text-gray-500">
              {isOnline ? "En ligne" : "Hors ligne"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Phone size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Video size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <MoreVertical size={18} />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Object.entries(messageGroups).map(([date, dateMessages]) => (
          <div key={date}>
            {/* Date Separator */}
            <div className="flex justify-center mb-4">
              <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                {date}
              </span>
            </div>
            
            {/* Messages for this date */}
            {dateMessages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-3 ${message.sender === 'mentor' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === 'mentor'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'mentor' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="p-2">
            <Paperclip size={18} />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Saisissez un message"
              className="pr-10 rounded-full border-gray-300"
            />
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
            >
              <Smile size={16} />
            </Button>
          </div>
          
          <Button 
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 rounded-full p-2"
            size="sm"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPlatform;