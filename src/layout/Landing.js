import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div>
        <div>
          <h1> DIY-B </h1>
          <p>
            Do It Yourself-Bookshelf allows you to share DIY Recipes with fellow
            builders and really get to know the community you pour you heart and
            soul into.{" "}
          </p>
          <div>
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
