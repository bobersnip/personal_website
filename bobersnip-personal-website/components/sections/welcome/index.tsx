import React from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Welcome = () => {
  return (
    <section id="welcome" className="flex flex-col items-center justify-center min-h-[90vh] py-20">
      <div className="inline-block max-w-3xl text-center justify-center">
        <h1 className="mb-4">
          <span className={title({ size: "lg" })}>Hi, I'm&nbsp;</span>
          <span className={title({ color: "violet", size: "lg" })}>Bob&nbsp;</span>
        </h1>
        <h2 className={title({ size: "md" })}>
          Full Stack Developer & Designer
        </h2>
        <div className={subtitle({ class: "mt-6 mx-auto" })}>
          I build modern, responsive web applications with a focus on user experience and performance.
          Passionate about creating beautiful interfaces and solving complex problems.
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href="#contact"
        >
          Contact Me
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full", size: "lg" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};
