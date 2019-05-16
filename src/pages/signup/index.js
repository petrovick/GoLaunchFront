import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  isGamer: Yup.boolean(),
  password: Yup.string().when('$updatePassword', {
    is: true,
    then: Yup.string()
      .min(4)
      .required(),
    otherwise: Yup.string().strip(true),
  }),
});

export default function Signup() {
  const [updatePassword, setUpdatePassword] = useState(false);

  const initialData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    isGamer: true,
  };

  function handleSubmit(data) {
    debugger;
    console.tron.log(data);
  }

  return (
    <Form
      schema={schema}
      initialData={initialData}
      context={{ updatePassword }}
      onSubmit={handleSubmit}
    >
      <Input name="name" />
      <Input name="email" />
      <Input name="password" type="password" />
      <Input name="isGamer" type="checkbox" />


      <button type="submit">Save</button>
    </Form>
  );
}
