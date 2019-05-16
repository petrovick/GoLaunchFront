import React from 'react';
import { Form, Input } from '@rocketseat/unform';

const NewGame = (props) => {
  function handleSubmit(data) {
    console.log(data);

    /**
     * {
     *   email: 'email@example.com',
     *   password: "123456"
     * }
     */
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>PUT A SELECT OF THE GAME HERE</p>
      <Input name="email" />
      <Input name="password" type="password" />

      <button type="submit">Sign in</button>
    </Form>
  );
};
export default NewGame;
