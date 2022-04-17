import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }


    const handleRegister = event =>{
        event.preventDefault();
    }



  return (
    <div className="mt-5 container w-50 mx-auto mb-4">
      <h1 className="text-center text-success pt-5">register</h1>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an acoount? <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
    </div>
  );
};

export default Register;
