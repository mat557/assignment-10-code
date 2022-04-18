import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const EmailLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement =  <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-success w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-success w-50 '></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-success w-50 mx-auto d-block'>Google Signin</button>
            </div>
        </div>
    );
};

export default EmailLogIn;