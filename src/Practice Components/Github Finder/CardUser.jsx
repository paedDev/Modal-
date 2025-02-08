import React from "react";

const CardUser = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    location,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div>
      <div>
        <img
          src={avatar_url || "https://via.placeholder.com/150"}
          alt={"User Avatar"}
          className="rounded-full h-48 w-48"
        />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
};

export default CardUser;
