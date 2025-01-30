import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";

// Mock data - in a real app this would come from an API
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "Looking for a skilled web designer to redesign our e-commerce platform. The project involves creating a modern, user-friendly interface that enhances the shopping experience.",
    budget: 3000,
    category: "Web Design",
    skills: ["React", "UI/UX", "Responsive Design"],
    deadline: "2024-03-30",
    clientRating: 4.8,
    clientFeedback: "Excellent communication and delivered high-quality work ahead of schedule!"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Need an experienced mobile developer to create a fitness tracking app. The app should include features like workout tracking, progress monitoring, and social sharing.",
    budget: 5000,
    category: "Mobile Development",
    skills: ["React Native", "iOS", "Android"],
    deadline: "2024-04-15",
    clientRating: 4.5,
    clientFeedback: "Very professional and responsive throughout the project."
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Seeking a creative designer to develop a complete brand identity package including logo, color scheme, and brand guidelines for a new startup.",
    budget: 2000,
    category: "Graphic Design",
    skills: ["Logo Design", "Branding", "Adobe Creative Suite"],
    deadline: "2024-03-20",
    clientRating: 5.0,
    clientFeedback: "Exceeded our expectations with innovative designs and attention to detail."
  }
];

const CATEGORIES = ["Web Design", "Mobile Development", "Graphic Design", "Content Writing", "Digital Marketing"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2">Freelance Projects</h1>
        <p className="text-foreground/60 mb-8">Find your next opportunity from our curated list of projects</p>
        
        <SearchAndFilter
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          categories={CATEGORIES}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No projects found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;