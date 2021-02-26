import react from "react"
import { Link } from "react-router-dom"

function Navbar(){
return (
    <>
      <Link to="/" className="p-2 m-2 float-left bg-gray-400 rounded-lg">
        Home
      </Link>
      <Link to="/contact" className="p-2 m-2 float-left bg-gray-400 rounded-lg">
          Contact Me
      </Link>
      <a
        href="www.linkedin.com/in/parker-morgan-18ab5b1b4"
        target="_blank"
        className="bg-green-900 rounded-lg p-2 m-2 float-right"
      >
        Linkedin
      </a>
    </>
  );
}

export default Navbar;