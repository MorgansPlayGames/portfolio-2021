import React from "react";

function Card(props) {
//console.log(props)
  return (
    <div className="card m-2 p-2">
        <h5 className ="m-1 p-1 text-xl text-left">Project Title</h5>
        <img className="p-2 m-2" src="https://via.placeholder.com/150" />
        <a className="text-left">View Project</a>
    </div>
    
     
  );
}

export default Card;
