import React from "react";
import "./styles.css";

const Bio = () => {
  return (
    <div className="container">
      <h1>My React App</h1>

      <h3>Introduction</h3>
      <img src={`${process.env.PUBLIC_URL}/myphoto.jpg`} alt="Vishnuvardhan" width="120" height="120" id="ph" />
      <p>
        Hi there, I am Vishnuvardhan from Hyderabad, Telangana, India. I was born and brought up in my hometown, Warangal.
        I have a bachelor's degree in Electronics and Communications Engineering. I worked as a Mainframe application developer 
        at Colruyt Group for 1 year. Currently, I am pursuing my Master's in Information Technology and Management at Illinois Tech, Chicago.
      </p>

      <p>
        My GitHub link: <a href="https://github.com/Vishnu2400">Github</a>
      </p>
    </div>
  );
};

export default Bio;
