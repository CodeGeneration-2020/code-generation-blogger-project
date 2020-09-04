import React from 'react';
import { Helmet } from 'react-helmet-async';
import UsersAPI from '../../../services/users.service';

export function HomePage() {
  const createComment = () => {
    UsersAPI.createComment('blogger', 3, 1, 'HELLO BLOGGER2');
  };
  const getComments = () => {
    UsersAPI.getComments('blogger', 1, 0, 5);
  };
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <button onClick={() => createComment()}>CREATE COMMENT</button>
        <button onClick={() => getComments()}>GET COMMENTS</button>
      </div>
    </div>
  );
}
