import React, { useState } from "react";
import RandomSpot from "./randomSpot";

function Bio() {
  const experienceIn = [
    "HTML",
    "CSS",
    "Javascript",
    "JQuery",
    "React",
    "Handlebars",
    "Node",
    "Bootstrap",
    "Tailwind",
    "Sequelize",
    "Mongo",
    "MySQL",
    "Express",
    "Ajax",
    "Axios",
  ];
  const [experienceLayout, setExperienceLayout] = useState(
    experienceIn.map((x, i) => <li key={i} className={RandomSpot()}>{x}</li>)
  );

  const changeLayout = () => {
    setExperienceLayout(
      experienceIn.map((x, i) => <li key={i} className={RandomSpot()}>{x}</li>)
    );
  };

  return (
    <section className="m-auto">
      <section>
        <p className="m-16 text-2xl">
          Hello! I am Parker, I'm full stack developer.
        </p>
        <p className="m-16 text-2xl">
          I can create a website, or update an existing one.
        </p>
        <p className="m-16 text-2xl">
          I love finding simple solutions to complex problems.
        </p>
      </section>
      <section>
        <p className="m-8">Experience in:</p>
        <ul className="lg:mx-24">{experienceLayout}</ul>
        <button
          className="m-2 p-2 bg-gray-700 rounded-lg"
          onClick={changeLayout}
        >
          Change the Layout
        </button>
      </section>
      <section className="md:inline-flex">
        <img src={process.env.PUBLIC_URL + 'ParkerHeadshot.jpg'} className=' max-w-lg p-8'/>
        <section className="w-1/2 m-auto">
          <h3 className="m-16 text-2xl bg-gray-800 rounded-lg">About Me:</h3>
          <p className="my-16 text-lg bg-gray-800 rounded-lg">Love to cook</p>
          <p className="my-16 text-lg bg-gray-800 rounded-lg">
            I run tabletop games
          </p>
          <p className="my-16 text-lg bg-gray-800 rounded-lg">
            Hobbiest musician
          </p>
          <p className="my-16 text-lg bg-gray-800 rounded-lg">
            Enjoy the tedium of editing videos
          </p>
          <p className="my-16 text-md bg-gray-800 rounded-lg">
            Casual Videogamer
          </p>
        </section>
      </section>
    </section>
  );
}

export default Bio;
