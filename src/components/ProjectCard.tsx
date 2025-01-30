import { useState } from "react";
import { Calendar, DollarSign, ChevronDown, ChevronUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  budget: number;
  category: string;
  skills: string[];
  deadline: string;
  clientRating: number;
  clientFeedback: string;
}

export function ProjectCard({
  title,
  description,
  budget,
  category,
  skills,
  deadline,
  clientRating,
  clientFeedback,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <span className="bg-primary px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      
      <p className="text-foreground/80 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-primary/50 px-2 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-secondary" />
          <span className="font-medium">${budget}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-secondary" />
          <span className="text-sm">{deadline}</span>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
      >
        {isExpanded ? "Show Less" : "View Details"}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      <div
        className={cn(
          "grid transition-all duration-200",
          isExpanded ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-secondary fill-current" />
              <span className="font-medium">Client Rating: {clientRating}/5</span>
            </div>
            <p className="text-foreground/80 italic">&quot;{clientFeedback}&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}