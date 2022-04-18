import { async } from "@firebase/util";
import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import EmailLogIn from "../EmailLogIn/EmailLogIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      
    if(user){
        navigate(from, { replace: true });
    }

    if (error) {
      errorElement =  <p className='text-danger w-50 mx-auto d-block'>Error: {error?.message}</p>
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const handleResetPassword = async() =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      toast('Email sent');
    }

    const nevigateRegister = event =>{
        navigate('/register');
    }

  return (
    <div className="mt-5 container w-50 mx-auto mb-4">
      <h1 className="text-center text-success pt-5">Please Login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button className="w-50 mx-auto d-block" variant="success" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="w-50 mx-auto d-block" >New Here? <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={nevigateRegister}>Please Register</Link></p>
      <p className="w-50 mx-auto d-block" >Forget Password? <button className="btn btn-link text-success pe-auto text-decoration-none" onClick={handleResetPassword}>Reset Password</button></p>
      <EmailLogIn></EmailLogIn>
      <ToastContainer />
    </div>
  );
};
export default Login;
