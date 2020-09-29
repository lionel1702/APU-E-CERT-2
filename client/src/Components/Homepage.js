import React from "react";
import apulogo from "../apulogo.svg";
import "./Homepage.css";
function Homepage(props) {
  return (
    <div>
      <header className="App-header">
        <img src={apulogo} className="App-logo" alt="logo" />
        <p>
          This is the homepage of APU E-CERT web application.
          <br />
          For University Admin, visit the account icon to Login.
          <br />
          For Students or Employers, visit the account icon to View and Verify
          Certificate.
          <br />
        </p>
      </header>

      <footer className="footer">
        Final Year Project by Lim Gin Keat © Copyright 2020
      </footer>
    </div>
  );
}

export default Homepage;
