import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectDescriptions from "./ProjectDescriptions";


const ProjectCard = ({ imgUrl, title, descriptionComponent  }) => {
    const DescriptionComponent = ProjectDescriptions[descriptionComponent];
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold text-primary-500 mb-2">{title}</h5>
          <DescriptionComponent />
      </div>
    </div>
  );
};

export default ProjectCard;
