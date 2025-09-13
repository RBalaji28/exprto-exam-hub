import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categoryData, getSubtopicsByMainTopic } from "@/data/categoryData";

interface CategoryFilterProps {
  onCategoryChange: (mainTopic: string, subtopic: string) => void;
  defaultMainTopic?: string;
  defaultSubtopic?: string;
  className?: string;
}

export const CategoryFilter = ({ 
  onCategoryChange, 
  defaultMainTopic = "all", 
  defaultSubtopic = "all",
  className 
}: CategoryFilterProps) => {
  const [selectedMainTopic, setSelectedMainTopic] = useState(defaultMainTopic);
  const [selectedSubtopic, setSelectedSubtopic] = useState(defaultSubtopic);

  const handleMainTopicChange = (mainTopicId: string) => {
    setSelectedMainTopic(mainTopicId);
    setSelectedSubtopic("all");
    onCategoryChange(mainTopicId, "all");
  };

  const handleSubtopicChange = (subtopicId: string) => {
    setSelectedSubtopic(subtopicId);
    onCategoryChange(selectedMainTopic, subtopicId);
  };

  const availableSubtopics = selectedMainTopic === "all" 
    ? [] 
    : getSubtopicsByMainTopic(selectedMainTopic);

  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Main Topic</label>
        <Select value={selectedMainTopic} onValueChange={handleMainTopicChange}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Select main topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            {categoryData.map((topic) => (
              <SelectItem key={topic.id} value={topic.id}>
                {topic.icon} {topic.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {availableSubtopics.length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Subtopic</label>
          <Select value={selectedSubtopic} onValueChange={handleSubtopicChange}>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Select subtopic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subtopics</SelectItem>
              {availableSubtopics.map((subtopic) => (
                <SelectItem key={subtopic.id} value={subtopic.id}>
                  {subtopic.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};