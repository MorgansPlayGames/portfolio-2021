import React, { useState } from "react";
import projList from "./lib/projectList";
import ProjectDisplay from "./ProjectDisplay";

function CardList() {
  const [projectIndex, setProjectIndex] = useState(0);
  return (
    <section className="container flex-wrap">
      {projList.map((project, index) => (
        <div key={index} className="card m-2 p-2">
          <h5 className="m-1 p-1 text-xl text-left">{project.description}</h5>
          <img className="p-2 m-2" src="https://via.placeholder.com/150" />
          <a className="text-left project-display-button">View Project</a>
        </div>
      ))}
      {console.log("CardList:", projList[projectIndex])}
      <ProjectDisplay project={projList[projectIndex]} />
    </section>
  );
}

export default CardList;
