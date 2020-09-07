import React from "react";

const Followee = ({ followee, users }) => {
  const { user } = followee;

  const followees = users.filter((u) => u._id === user);

  const followeeInfo = followees[0];
  console.log(followees, followeeInfo, users, followee);
  return (
    <div>
      <p>{followeeInfo && followeeInfo.name}</p>
    </div>
  );
};

export default Followee;
