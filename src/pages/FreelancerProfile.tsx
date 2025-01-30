import { useParams } from "react-router-dom";

// Mock data - in a real app this would come from an API
const MOCK_FREELANCERS = [
  {
    id: 1,
    name: "John Smith",
    title: "Senior Web Developer",
    rating: 4.9,
    completedProjects: 127,
    hourlyRate: 85,
    skills: ["React", "TypeScript", "Node.js"],
    bio: "Full-stack developer with 8+ years of experience specializing in React and Node.js applications.",
    recentProjects: [
      {
        title: "E-commerce Website Redesign",
        feedback: "Excellent work and communication throughout the project.",
        rating: 5
      }
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    rating: 4.8,
    completedProjects: 93,
    hourlyRate: 75,
    skills: ["UI Design", "User Research", "Figma"],
    bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
    recentProjects: [
      {
        title: "Mobile App Development",
        feedback: "Sarah's designs were innovative and user-friendly.",
        rating: 4.8
      }
    ]
  }
];

const FreelancerProfile = () => {
  const { projectId } = useParams();
  
  // In a real app, we would fetch the freelancers who bid on this specific project
  // For now, we'll just show all mock freelancers
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Freelancers Available
        </h1>
        <p className="text-foreground/60 mb-8">
          Qualified professionals who have bid on this project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_FREELANCERS.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {freelancer.name}
                  </h3>
                  <p className="text-foreground/60">{freelancer.title}</p>
                </div>
                <span className="bg-primary px-3 py-1 rounded-full text-sm">
                  ${freelancer.hourlyRate}/hr
                </span>
              </div>

              <p className="text-foreground/80 mb-4">{freelancer.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/50 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm text-foreground/60">
                <span>⭐ {freelancer.rating}/5</span>
                <span>{freelancer.completedProjects} projects completed</span>
              </div>

              <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold mb-2">Recent Project Feedback</h4>
                {freelancer.recentProjects.map((project, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{project.title}</p>
                    <p className="text-foreground/60 italic">
                      "{project.feedback}"
                    </p>
                    <p className="text-foreground/60">Rating: ⭐ {project.rating}/5</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;