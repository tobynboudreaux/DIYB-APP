import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
            <Link to="/register"> Sign Up</Link>
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
