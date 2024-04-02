"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Maintenance",
    description: "Maintenance",
    image: "/images/projects/1.png",
    tag: ["Maintenance"],
  },
  {
    id: 2,
    title: "Dépannage",
    description: "Depannage",
    image: "/images/projects/2.png",
    tag: ["Dépannage"],
  },
  {
    id: 3,
    title: "Assemblage",
    description: "Assemblage",
    image: "/images/projects/3.png",
    tag: ["Assemblage"],
  },
  {
    id: 4,
    title: "Conseil & Formation",
    description: "ConseilFormation",
    image: "/images/projects/4.png",
    tag: ["Conseil & Formation"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Maintenance");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
      <section id="projects">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-primary-500 mt-4 mb-4 md:mb-12">
          Nos services
        </h2>
        <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Maintenance"
          isSelected={tag === "Maintenance"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dépannage"
          isSelected={tag === "Dépannage"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Assemblage"
            isSelected={tag === "Assemblage"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Conseil & Formation"
          isSelected={tag === "Conseil & Formation"}
        />

      </div>
          <div ref={ref} className="text-white flex flex-wrap justify-center items-center">
              {filteredProjects.map((project, index) => (
                  <motion.div className="w-1/2"
                              key={index}
                              variants={cardVariants}
                              initial="initial"
                              animate={isInView ? "animate" : "initial"}
                              transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <ProjectCard
                          key={project.id}
                          title={project.title}
                          imgUrl={project.image}
                          descriptionComponent={project.description}
                      />
                  </motion.div>
              ))}
          </div>
    </section>
  );
};

export default ProjectsSection;
