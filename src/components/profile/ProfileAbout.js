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
    <div>
      <h2>{name.trim().split(" ")[0]}'s Bio</h2>
      <p>{bio && <span>{bio}</span>}</p>
      <div>
        <h2>Skill Set</h2>
        <div>
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
