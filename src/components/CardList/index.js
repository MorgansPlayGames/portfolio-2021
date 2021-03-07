import React, { useState, useEffect } from "react";
import projList from "../lib/projectList";
import ProjectDisplay from "./ProjectDisplay";

function CardList() {
  // const [projectList, setProjectList] = useState(projList)
  const [currentProject, setCurrentProject] = useState(<ProjectDisplay project={projList[0]} />)
  

  const changeProjectIndex = (projIndex, event) => {
    // event.preventDefault();
    setCurrentProject(<ProjectDisplay project={projList[projIndex.index]} />)
  };

  return (
    <section className="container flex-wrap project-list bg-gray-800 m-auto">
      {projList.map((project, index) => (
        <div key={index} className="card m-2 p-2 w-64 max-h-128 flex-wrap">
          <h5 className="m-1 p-1 text-xl text-left">{project.name}</h5>
          <img className="p-2 m-2" src={project.image} />
          <a
            className={`button text-left bg-gray-700 p-2 m-2 rounded-md project-button project-button-${index}`}
            onClick={(e) => changeProjectIndex({index}, e)}
            href="#project-display"
          >
            View Project
          </a>
        </div>
      ))}
      <div className="col mb-8">
        {currentProject}
      </div>
    </section>
  );
}

export default CardList;
