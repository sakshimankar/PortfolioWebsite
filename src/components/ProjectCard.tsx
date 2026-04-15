import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
  link: string | null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  "ML / AI": "bg-violet-100 text-violet-700",
  Visualization: "bg-blue-100 text-blue-700",
  "Data Engineering": "bg-emerald-100 text-emerald-700",
  Analytics: "bg-orange-100 text-orange-700",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Category badge */}
        <span
          className={cn(
            "inline-flex w-fit text-xs font-semibold px-3 py-1 rounded-full",
            categoryColors[project.category] || "bg-secondary text-secondary-foreground"
          )}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-display font-bold leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Problem / Solution */}
        <div className="space-y-3 pt-2 border-t border-border/60">
          <div>
            <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
              Problem
            </span>
            <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
              Solution
            </span>
            <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mt-2"
          >
            View Project <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
