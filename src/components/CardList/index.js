import React, { useState, useEffect } from "react";
import projList from "../lib/projectList";
import ProjectDisplay from "./ProjectDisplay";

function CardList() {
  // const [projectList, setProjectList] = useState(projList)
  const [currentProject, setCurrentProject] = useState(<ProjectDisplay project={projList[0]} />)
  

  const changeProjectIndex = (projIndex, event) => {
    event.preventDefault();
    setCurrentProject(<ProjectDisplay project={projList[projIndex.index]} />)
  };

  return (
    <section className="container flex-wrap project-list">
      {projList.map((project, index) => (
        <div key={index} className="card m-2 p-2">
          <h5 className="m-1 p-1 text-xl text-left">{project.description}</h5>
          <img className="p-2 m-2" src="https://via.placeholder.com/150" />
          <button
            className={`button text-left project-button project-button-${index}`}
            onClick={(e) => changeProjectIndex({index}, e)}
          >
            View Project
          </button>
        </div>
      ))}
      {currentProject}
    </section>
  );
}

export default CardList;
