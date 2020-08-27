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
    <div className="profile">
      <img src={avatar} alt="" className="round-img"></img>
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{occupation}</p>
        <p>{location}</p>
        <Link to={`/profile/${_id}`}>View Profile</Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
