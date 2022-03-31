import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const { friendId } = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      <h3>this is detail bondhu. {friendId}</h3>
      <h4>{friend.name}</h4>
      <h5>{friend.email}</h5>
      <h6>{friend.website}</h6>
      <p>{friend.address?.city}</p>
    </div>
  );
};

export default FriendDetail;
