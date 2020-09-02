import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Board from "./Board";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { getPosts } from "../../actions/post";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
  getPosts,
  post: { posts },
}) => {
  useEffect(() => {
    getCurrentProfile() && getPosts();
  }, [getCurrentProfile, getPosts]);
  console.log(user);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <div className="dashboard">
        <p className="lead text-primary">
          <i className="fas fa-user"></i> Welcome {user && user.name}
        </p>

        <div className="follow">
          <p className="my-3">
            {user.followers && user.followers.length === 0
              ? "no followers"
              : `${user.followers.length} followers`}
          </p>

          <p className="my-3">
            {user.followees && user.followees.length === 0
              ? "no following"
              : `${user.followees.length} following`}
          </p>
        </div>

        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Board board={profile.boards} posts={posts} />

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus"></i> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet set up a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              {" "}
              Create Profile
            </Link>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
  getPosts,
})(Dashboard);
