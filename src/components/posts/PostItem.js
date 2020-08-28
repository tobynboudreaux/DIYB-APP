import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, unLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  unLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div>
      <div>
        <Link to="/profile">
          <img className="round-img" src={avatar} alt={name} />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p>
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button onClick={(e) => addLike(_id)}>
          <i className="fas fa-thumbs-up" />
          {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button onClick={(e) => unLike(_id)}>
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/post/${_id}`}>
          Discussion {comments.length > 0 && <span>{comments.length}</span>}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button onClick={(e) => deletePost(_id)}>
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, unLike, deletePost })(
  PostItem
);
