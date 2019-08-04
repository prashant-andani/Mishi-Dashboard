import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const cred = { userName: 'admin', password: 'admin' };
let Login = props => {
  const [form, setValues] = useState({
    username: '',
    password: ''
  });

  const onLogin = e => {
    const { username, password } = form;
    e.preventDefault();
    if (username === cred.userName && password === cred.password) {
      props.history.push(`/dashboard`);
    } else {
      console.log('Invalid UserName or Password');
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Row className="row">
      <Col md={{ span: 6, offset: 3 }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="email"
              placeholder="Enter email"
              value={form.username}
              onChange={updateField}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={updateField}
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Username: Admin, Password: Admin
          </Form.Text>
          <Button variant="primary" onClick={onLogin}>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
Login = connect()(Login);

export default Login;
