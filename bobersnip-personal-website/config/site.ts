export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bob's Portfolio",
  description: "Full Stack Developer & Designer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "GitHub",
      href: "https://github.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
