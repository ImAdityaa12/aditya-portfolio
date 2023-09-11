"use client";
import React from "react";
import "../scss/sections/_projects.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  const projectsData = [
    {
      image: "/GeniCraft.png",
      projectName: "GeniCraft",
      projectLink: "https://geni-craft.vercel.app/",
      projectDescription:
        "GeniCraft is a cool web app that uses AI to do lots of fun stuff. It makes sure your login is safe with Clerk. You can chat with it, make cool pictures and code with AI from OpenAI. It also helps you make music and videos using Replicate. It's like having a creative AI buddy for all your digital projects!",
      projectTech: ["Next.js", "Typescript","HTML", "Taiwind CSS", "OpenAI API", "Replicate API"],
      projectExternalLinks: {
        github: "https://github.com/ImAdityaa12/GeniCraft",
        externalLink: "https://geni-craft.vercel.app/",
      },
    },
    {
      image: "/CinemaVerse.png",
      projectName: "CinemaVerse",
      projectLink: "https://cinemaverseaditya.netlify.app/",
      projectDescription:
        "CinemaVerse is an innovative movie website powered by React and Redux Toolkit, integrating the TMDb API. It offers a user-friendly interface with popular movie listings, detailed movie pages, user reviews, and responsive design, providing an immersive movie-watching experience for enthusiasts.",
      projectTech: ["React", "Redux Toolkit", "SCSS", "TMDB API", "JavaScript"],
      projectExternalLinks: {
        github: "https://github.com/ImAdityaa12/CinemaVerse",
        externalLink: "https://cinemaverseaditya.netlify.app/",
      },
    },
    {
      image: "/ShopIt.png",
      projectName: "Shop It",
      projectLink: "https://github.com/ImAdityaa12/Shop-It",
      projectDescription:
        "Shop It is a feature-rich ecommerce website built with React and Strapi, enabling seamless online shopping. The platform showcases a diverse product range, with detailed descriptions and images for informed purchasing decisions. It integrates the Stripe payment gateway for secure transactions and offers an intuitive interface, making it an efficient and enjoyable ecommerce solution.",
      projectTech: [
        "React",
        "Strapi",
        "Stripe",
        "React Icons",
        "React Router",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/ImAdityaa12/Shop-It",
        externalLink: "https://github.com/ImAdityaa12/Shop-It",
      },
    },
    {
      image: "/MetaVersus.png",
      projectName: "Meta Versus",
      projectLink: "https://metaversus-aditya.netlify.app/",
      projectDescription:
        "MetaVersus is a cutting-edge Next.js 13 website, enriched with Framer Motion and Tailwind CSS. This modern platform captivates users with fluid animations, seamless transitions, and interactive elements. Leveraging Next.js 13's latest features, MetaVersus delivers an engaging user experience, while Framer Motion and Tailwind CSS contribute to its stylish and responsive design.",
      projectTech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Next Js",
      ],
      projectExternalLinks: {
        github: "https://github.com/ImAdityaa12/MetaVerses-App",
        externalLink: "https://metaversus-aditya.netlify.app/",
      },
    },
    {
      image: "/NikePage.png",
      projectName: "Nike Landing Page",
      projectLink: "https://nike-landingpage-tailwindcss-aditya.netlify.app/",
      projectDescription:
        "I built a responsive Nike website using React and Tailwind CSS. It's user-friendly and looks good on any device. I used different React components and Tailwind CSS styles to make it work and look great. You can access it easily on Netlify, and it shows I'm good at web development and making websites that people like to use.  ",
      projectTech: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "React",
      ],
      projectExternalLinks: {
        github: "https://github.com/ImAdityaa12/Nike-Landing-Page-React-and-Tailwind-CSS-",
        externalLink: "https://nike-landingpage-tailwindcss-aditya.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Things I&apos; ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div className="project" key={projectName}
              initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;