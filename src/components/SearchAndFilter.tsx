import { Search, Filter } from "lucide-react";

interface SearchAndFilterProps {
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  categories: string[];
}

export function SearchAndFilter({
  onSearchChange,
  onCategoryChange,
  categories,
}: SearchAndFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/60" />
        <input
          type="text"
          placeholder="Search projects..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/20"
        />
      </div>
      
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/60" />
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="pl-10 pr-8 py-2 rounded-lg border border-border bg-background appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/20"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}