import React from "react";
import GitButton from "./GitButton";

function Footer() {
  return (
    <footer className="my-4 p-4 bg-gray-600">
      <GitButton />
      <a className="bg-green-900 rounded-lg p-2 m-2" href="https://docs.google.com/document/d/1qqWsuTGUr_tNZKjUqWaFZM9ZrQ5ajD-uNg9LgbvJ2ZE/edit?usp=sharing" target="_blank">Resume</a>
    </footer>
  );
}

export default Footer;
