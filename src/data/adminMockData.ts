export const dashboardStats = {
  mentorCount: 25,
  studentCount: 150,
  liveSessionCount: 3,
  upcomingSessionCount: 8
};

export const mentors = [
  {
    id: "M001",
    name: "Dr. Sarah Johnson",
    domain: "JEE",
    rating: 4.8,
    sessions: 45
  },
  {
    id: "M002",
    name: "Prof. Raj Kumar",
    domain: "NEET",
    rating: 4.9,
    sessions: 38
  },
  {
    id: "M003",
    name: "Dr. Priya Sharma",
    domain: "NEET",
    rating: 4.7,
    sessions: 52
  },
  {
    id: "M004",
    name: "Arjun Mehta",
    domain: "JEE",
    rating: 4.6,
    sessions: 32
  },
  {
    id: "M005",
    name: "Rahul Kumar",
    domain: "UPSC",
    rating: 4.7,
    sessions: 22
  },
  {
    id: "M006",
    name: "Sneha Gupta",
    domain: "GATE",
    rating: 4.5,
    sessions: 35
  },
  {
    id: "M007",
    name: "Dr. Amit Patel",
    domain: "JEE",
    rating: 4.9,
    sessions: 67
  },
  {
    id: "M008",
    name: "Prof. Kavya Singh",
    domain: "NEET",
    rating: 4.8,
    sessions: 41
  },
  {
    id: "M009",
    name: "Vikram Joshi",
    domain: "UPSC",
    rating: 4.4,
    sessions: 28
  },
  {
    id: "M010",
    name: "Dr. Meera Reddy",
    domain: "GATE",
    rating: 4.6,
    sessions: 39
  }
];

export const students = [
  {
    id: "S001",
    name: "Arjun Patel",
    email: "arjun.patel@email.com",
    domain: "JEE",
    sessionsAttended: 12,
    performance: 85
  },
  {
    id: "S002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    domain: "NEET",
    sessionsAttended: 15,
    performance: 92
  },
  {
    id: "S003",
    name: "Rohit Singh",
    email: "rohit.singh@email.com",
    domain: "JEE",
    sessionsAttended: 8,
    performance: 78
  },
  {
    id: "S004",
    name: "Ananya Gupta",
    email: "ananya.gupta@email.com",
    domain: "NEET",
    sessionsAttended: 22,
    performance: 95
  },
  {
    id: "S005",
    name: "Vikash Kumar",
    email: "vikash.kumar@email.com",
    domain: "UPSC",
    sessionsAttended: 18,
    performance: 88
  },
  {
    id: "S006",
    name: "Kavya Reddy",
    email: "kavya.reddy@email.com",
    domain: "GATE",
    sessionsAttended: 14,
    performance: 82
  },
  {
    id: "S007",
    name: "Amit Verma",
    email: "amit.verma@email.com",
    domain: "JEE",
    sessionsAttended: 25,
    performance: 91
  },
  {
    id: "S008",
    name: "Neha Joshi",
    email: "neha.joshi@email.com",
    domain: "NEET",
    sessionsAttended: 11,
    performance: 76
  },
  {
    id: "S009",
    name: "Ravi Mehta",
    email: "ravi.mehta@email.com",
    domain: "UPSC",
    sessionsAttended: 16,
    performance: 84
  },
  {
    id: "S010",
    name: "Srishti Agarwal",
    email: "srishti.agarwal@email.com",
    domain: "GATE",
    sessionsAttended: 20,
    performance: 89
  }
];

export const sessionData = {
  liveSessions: [
    {
      id: "L001",
      mentorName: "Dr. Sarah Johnson",
      mentorId: "M001",
      subject: "Physics - Mechanics",
      studentsAttending: 25,
      feedbackGiven: false
    },
    {
      id: "L002",
      mentorName: "Prof. Raj Kumar",
      mentorId: "M002",
      subject: "Chemistry - Organic",
      studentsAttending: 18,
      feedbackGiven: false
    },
    {
      id: "L003",
      mentorName: "Dr. Priya Sharma",
      mentorId: "M003",
      subject: "Biology - Cell Biology",
      studentsAttending: 32,
      feedbackGiven: true
    },
    {
      id: "L004",
      mentorName: "Arjun Mehta",
      mentorId: "M004",
      subject: "Mathematics - Algebra",
      studentsAttending: 28,
      feedbackGiven: false
    },
    {
      id: "L005",
      mentorName: "Rahul Kumar",
      mentorId: "M005",
      subject: "History - Ancient India",
      studentsAttending: 15,
      feedbackGiven: true
    }
  ],
  upcomingSessions: [
    {
      id: "U001",
      mentorName: "Prof. Raj Kumar",
      mentorId: "M002",
      subject: "Chemistry - Organic",
      studentsRegistered: 18,
      canDelete: true
    }
  ],
  endedSessions: [
    {
      id: "E001",
      mentorName: "Dr. Sarah Johnson",
      mentorId: "M001",
      subject: "Mathematics - Calculus",
      studentsAttended: 22,
      feedbackCollected: true
    }
  ]
};

export const payments = [
  {
    id: "P001",
    studentName: "Arjun Patel",
    email: "arjun.patel@email.com",
    domain: "JEE",
    sessionId: "L001",
    amount: 500,
    status: "Completed",
    paymentDate: "2024-01-15"
  },
  {
    id: "P002",
    studentName: "Priya Sharma",
    email: "priya.sharma@email.com",
    domain: "NEET",
    sessionId: "L002",
    amount: 750,
    status: "Completed",
    paymentDate: "2024-01-16"
  },
  {
    id: "P003",
    studentName: "Rohit Singh",
    email: "rohit.singh@email.com",
    domain: "JEE",
    sessionId: "L003",
    amount: 600,
    status: "Pending",
    paymentDate: "2024-01-17"
  },
  {
    id: "P004",
    studentName: "Ananya Gupta",
    email: "ananya.gupta@email.com",
    domain: "NEET",
    sessionId: "L004",
    amount: 800,
    status: "Completed",
    paymentDate: "2024-01-18"
  },
  {
    id: "P005",
    studentName: "Vikash Kumar",
    email: "vikash.kumar@email.com",
    domain: "UPSC",
    sessionId: "L005",
    amount: 650,
    status: "Failed",
    paymentDate: "2024-01-19"
  },
  {
    id: "P006",
    studentName: "Kavya Reddy",
    email: "kavya.reddy@email.com",
    domain: "GATE",
    sessionId: "L001",
    amount: 550,
    status: "Completed",
    paymentDate: "2024-01-20"
  },
  {
    id: "P007",
    studentName: "Amit Verma",
    email: "amit.verma@email.com",
    domain: "JEE",
    sessionId: "L002",
    amount: 700,
    status: "Completed",
    paymentDate: "2024-01-21"
  },
  {
    id: "P008",
    studentName: "Neha Joshi",
    email: "neha.joshi@email.com",
    domain: "NEET",
    sessionId: "L003",
    amount: 620,
    status: "Pending",
    paymentDate: "2024-01-22"
  }
];