import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
      <p>{bio && <span>{bio}</span>}</p>
      <div>
        <h2 className="text-light">Skill Set</h2>
        <div className="skills">
          {skills.map((skill) => (
            <div key={skill}>
              <i className="fa fa-check"></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
