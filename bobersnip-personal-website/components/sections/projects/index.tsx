import React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include product listings, cart functionality, user authentication, and payment processing.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/project-ecommerce.jpg",
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, and team collaboration.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/project-taskmanager.jpg",
    github: "https://github.com/username/task-manager",
    demo: "https://taskmanager-demo.example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current weather data and forecasts for any location. Built with React and OpenWeather API, featuring interactive maps and charts.",
    tags: ["React", "API Integration", "Chart.js"],
    image: "/project-weather.jpg",
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-demo.example.com"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-default-50 dark:bg-default-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={title({ size: "lg" })}>My Projects</h2>
          <div className={subtitle({ class: "mt-4 mx-auto" })}>
            Check out some of my recent work
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl overflow-hidden shadow-lg border border-default-200 dark:border-default-800 hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-default-200 dark:bg-default-800 flex items-center justify-center">
                <span className="text-default-400">[Project Image]</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-default-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      as={Link}
                      isExternal
                      href={project.github}
                      variant="flat"
                      color="default"
                      size="sm"
                      startContent={<GithubIcon size={16} />}
                    >
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      as={Link}
                      isExternal
                      href={project.demo}
                      color="primary"
                      size="sm"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
