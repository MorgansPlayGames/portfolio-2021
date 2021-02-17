import React from "react";

function ProjectDisplay(props) {
  const checkLiveButton = () => {
    if (props.livesite === "#") {
      return;
    } else {
      return <a href={props.livesite}>Livesite</a>;
    }
  };

  return (
    <section className="project-display">
      {console.log("props", props.project)}
      <h3 className="title">{props.project.name}</h3>
      <p className="description">Description: {props.project.description}</p>
      <img src={props.project.image} />

      <h5 className="tech-used">Technology Used:</h5>
      {props.project.technologies.map((tech, index) => (
        <div key={index}>{tech + ", "}</div>
      ))}

      <a href={props.gitlink}>github repo</a>
      {checkLiveButton}
    </section>
  );
}

export default ProjectDisplay;
