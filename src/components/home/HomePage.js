import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Admin</h1>
      <p>React, Redux y React Router</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Saber Mas
      </Link>
    </div>
  );
}

export default HomePage;
