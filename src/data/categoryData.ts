// Two-level category system for the entire application
export interface SubTopic {
  id: string;
  name: string;
  description?: string;
}

export interface MainTopic {
  id: string;
  name: string;
  icon: string;
  subtopics: SubTopic[];
}

export const categoryData: MainTopic[] = [
  {
    id: "school-academic",
    name: "School & Academic",
    icon: "📚",
    subtopics: [
      { id: "cbse", name: "CBSE" },
      { id: "icse", name: "ICSE" },
      { id: "state-boards", name: "State Boards" },
      { id: "general", name: "General" }
    ]
  },
  {
    id: "competitive-exams",
    name: "Competitive Exams", 
    icon: "🏆",
    subtopics: [
      { id: "jee", name: "JEE (Engineering)" },
      { id: "neet", name: "NEET (Medical)" },
      { id: "upsc", name: "UPSC / Civil Services" },
      { id: "ssc", name: "SSC / Banking / Railways" },
      { id: "cat", name: "CAT / MBA Entrance" },
      { id: "gate", name: "GATE / GRE / GMAT" },
      { id: "nda", name: "NDA / CDS (Defence)" }
    ]
  },
  {
    id: "engineering-tech",
    name: "Engineering & Tech",
    icon: "💻", 
    subtopics: [
      { id: "it-software", name: "IT & Software Development" },
      { id: "data-science", name: "Data Science & AI" },
      { id: "cybersecurity", name: "Cybersecurity" },
      { id: "core-engineering", name: "Mechanical / Electrical / Core Engineering" }
    ]
  },
  {
    id: "medical-healthcare",
    name: "Medical & Healthcare",
    icon: "❤",
    subtopics: [
      { id: "medical-careers", name: "Medical & Healthcare Careers" }
    ]
  },
  {
    id: "management-finance",
    name: "Management & Finance", 
    icon: "📈",
    subtopics: [
      { id: "finance", name: "Finance & Accounting" },
      { id: "marketing", name: "Marketing & Sales" }
    ]
  },
  {
    id: "study-abroad",
    name: "Study Abroad",
    icon: "🌍",
    subtopics: [
      { id: "usa", name: "Study in USA" },
      { id: "canada", name: "Study in Canada" },
      { id: "uk-europe", name: "Study in UK / Europe" },
      { id: "scholarships", name: "Scholarships & Visa Guidance" }
    ]
  },
  {
    id: "creative-media",
    name: "Creative & Media",
    icon: "🎨",
    subtopics: [
      { id: "graphic-design", name: "Graphic Design & UI/UX" },
      { id: "digital-marketing", name: "Digital Marketing" }
    ]
  },
  {
    id: "government-psu",
    name: "Government & PSU Jobs",
    icon: "🏛",
    subtopics: [
      { id: "law", name: "Law & Legal Careers" },
      { id: "teaching", name: "Teaching & Education" }
    ]
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    icon: "💡",
    subtopics: [
      { id: "startups", name: "Entrepreneurship & Startups" },
      { id: "freelancing", name: "Freelancing & Remote Work" }
    ]
  },
  {
    id: "it-digital",
    name: "IT & Digital Skills",
    icon: "🖥",
    subtopics: [
      { id: "coding", name: "Coding & Programming" }
    ]
  },
  {
    id: "personality-life",
    name: "Personality & Life Skills",
    icon: "🧠",
    subtopics: [
      { id: "communication", name: "Public Speaking & Communication" },
      { id: "confidence", name: "Confidence Building" },
      { id: "interview", name: "Interview Preparation" },
      { id: "resume", name: "Resume Building" },
      { id: "time-management", name: "Time Management" },
      { id: "leadership", name: "Leadership Skills" }
    ]
  },
  {
    id: "law-misc",
    name: "Law & Misc Careers",
    icon: "⚖",
    subtopics: [
      { id: "legal", name: "Legal Practice" },
      { id: "misc", name: "Other Careers" }
    ]
  }
];

// Helper functions
export const getAllSubtopics = (): SubTopic[] => {
  return categoryData.flatMap(topic => topic.subtopics);
};

export const getSubtopicsByMainTopic = (mainTopicId: string): SubTopic[] => {
  const mainTopic = categoryData.find(topic => topic.id === mainTopicId);
  return mainTopic ? mainTopic.subtopics : [];
};

export const getMainTopicBySubtopic = (subtopicId: string): MainTopic | undefined => {
  return categoryData.find(topic => 
    topic.subtopics.some(subtopic => subtopic.id === subtopicId)
  );
};

export const getSubtopicById = (subtopicId: string): SubTopic | undefined => {
  return getAllSubtopics().find(subtopic => subtopic.id === subtopicId);
};

export const getMainTopicById = (mainTopicId: string): MainTopic | undefined => {
  return categoryData.find(topic => topic.id === mainTopicId);
};