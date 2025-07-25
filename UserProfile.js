// src/components/UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt="Avatar" width="100" />
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

export default UserProfile;
