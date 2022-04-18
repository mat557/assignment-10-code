import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth from "../../../firebase.init";
import EmailLogIn from "../EmailLogIn/EmailLogIn";


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification:true});

    const navigateLogin = () =>{
        navigate('/login');
    }

    
    if(user){
        navigate('/home');
    }
    


    const handleRegister = event =>{
        event.preventDefault();

        // const name = event.target.email.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }
    

  return (
    <div className="mt-5 container w-50 mx-auto mb-4">
      <h1 className="text-center text-success pt-5">Register</h1>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        
        <Button className="w-50 mx-auto d-block" variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p className="w-50 mx-auto d-block" >Already have an acoount? <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
      <EmailLogIn></EmailLogIn>
    </div>
  );
};

export default Register;
