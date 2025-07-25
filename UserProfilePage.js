// src/pages/UserProfilePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [username]);

  if (!user) return <p>Loading...</p>;
  if (user.message === 'Not Found') return <p>User not found</p>;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt="Avatar" width="100" />
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
    </div>
  );
}

export default UserProfilePage;
