import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    occupation,
    location,
    skills,
  },
}) => {
  return (
    <div key={_id} className="profile bg-light">
      <img src={avatar} alt="" className="round-img"></img>
      <div>
        <h2>{name}</h2>
        <p className="status">{status && <span>{status}</span>}</p>
        <p>{occupation && <span>{occupation}</span>}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          <i className="fas fa-arrow-alt-circle-right"></i> View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
