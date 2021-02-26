import React from "react";

function ProjectDisplay(props) {
  function checkLiveButton() {
    console.log(props.project.livesite);
    if (props.project.livesite != "#") {
      return (
        <a
          href={props.project.livesite}
          target="__blank"
          className="text-xl bg-green-900 rounded-md p-2 m-2 float-right"
        >
          Livesite
        </a>
      );
    }
  }

  return (
    <section id="project-display" className="m-4 p-2 bg-gray-700 rounded-xl">
      <h3 className="title text-4xl p-2 m-2">{props.project.name}</h3>
      <p className="description text-xl p-2 m-2">
        Description: {props.project.description}
      </p>
      <img src={props.project.image} />
      <div className="grid-cols-4 justify-items-center">
        <h5 className="tech-used text-xl float-left">Technology Used:</h5>
        {props.project.technologies.map((tech, index) => (
          <p key={index} className="p-2 m-2 rounded-lg bg-blue-900 float-left">
            {tech}
          </p>
        ))}
      
      <a
        href={props.project.gitlink}
        target="__blank"
        className="text-xl bg-green-900 rounded-md p-2 m-2 float-right"
      >
        github repo
      </a>
      {checkLiveButton()}
      </div>
    </section>
  );
}

export default ProjectDisplay;
