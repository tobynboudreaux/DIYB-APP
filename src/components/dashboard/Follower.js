import React from "react";

const Follower = ({ follower, users }) => {
  const { user } = follower;

  const followers = users.filter((u) => u._id === user);

  const followerInfo = followers[0];
  console.log(followers, followerInfo, users, follower);
  return (
    <div>
      <p>{followerInfo && followerInfo.name}</p>
    </div>
  );
};

export default Follower;
