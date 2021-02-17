import React from "react";
import RandomSpot from "./randomSpot";

function Bio() {
  return (
    <section className="">
      <p className="m-16 text-2xl">
        Hello! I am Parker, I'm full stack developer.
      </p>
      <p className="m-16 text-2xl">
        I can create a website, or update an existing one.
      </p>
      <p className="m-16 text-2xl">
        I love finding simple solutions to complex problems.
      </p>
      <p className="m-8">Experience in:</p>
      <ul className="md:mx-12">
        <li className={RandomSpot()}>HTML</li>
        <li className={RandomSpot()}>CSS</li>
        <li className={RandomSpot()}>Javascript</li>
        <li className={RandomSpot()}>JQuery</li>
        <li className={RandomSpot()}>React</li>
        <li className={RandomSpot()}>Handlebars</li>
        <li className={RandomSpot()}>Node</li>
        <li className={RandomSpot()}>Bootstrap</li>
        <li className={RandomSpot()}>Mongo</li>
        <li className={RandomSpot()}>Sequelize</li>
        <li className={RandomSpot()}>Express</li>
        <li className={RandomSpot()}>Ajax</li>
        <li className={RandomSpot()}>Axios</li>
      </ul>
      <h3 className="m-16 text-2xl">About Me:</h3>
      <p className="my-16 text-lg">Love to cook</p>
      <p className="my-16 text-lg">I run tabletop games</p>
      <p className="my-16 text-lg">Hobbiest musician</p>
      <p className="my-16 text-lg">Enjoy the tedium of editing videos</p>
      <p className="my-16 text-md">Casual Videogamer</p>
    </section>
  );
}

export default Bio;
