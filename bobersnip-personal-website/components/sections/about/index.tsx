import React from "react";
import { Button } from "@heroui/button";
import { title, subtitle } from "@/components/primitives";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API", 
  "Tailwind CSS", "HeroUI", "Git", "Docker", "AWS"
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={title({ size: "lg" })}>About Me</h2>
          <div className={subtitle({ class: "mt-4 mx-auto" })}>
            Get to know more about me and my background
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className={title({ size: "sm", class: "mb-4" })}>Who am I?</h3>
            <p className="text-default-600 mb-4">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications.
              I specialize in creating modern, responsive, and user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-default-600 mb-4">
              My journey in web development started when I built my first website in college. Since then,
              I've worked with various technologies and frameworks to create solutions for clients across different industries.
            </p>
            <p className="text-default-600">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
              I'm always eager to learn and stay updated with the latest trends in web development.
            </p>
          </div>

          <div>
            <div className="rounded-lg p-6 border-none bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <h3 className={title({ size: "sm", class: "mb-4" })}>Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Button
                    key={skill}
                    color="primary"
                    variant="flat"
                    radius="sm"
                    size="sm"
                    className="cursor-default"
                  >
                    {skill}
                  </Button>
                ))}
              </div>

              <h3 className={title({ size: "sm", class: "mt-8 mb-4" })}>Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Senior Frontend Developer</h4>
                  <p className="text-default-500">Tech Solutions Inc. • 2021 - Present</p>
                </div>
                <div>
                  <h4 className="font-semibold">Full Stack Developer</h4>
                  <p className="text-default-500">Web Innovations • 2018 - 2021</p>
                </div>
                <div>
                  <h4 className="font-semibold">Junior Developer</h4>
                  <p className="text-default-500">Digital Creations • 2016 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
