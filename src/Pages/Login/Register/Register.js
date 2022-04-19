import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center mt-2'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Your name</Form.Label>
                    <Form.Control ref={nameRef} type='name' placeholder='Enter your name' required />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type='email' placeholder='Enter email' required />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type='password' placeholder='Password' required />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check onClick={() => setAgree(!agree)} type='checkbox' className={`${agree ? 'text-success' : 'text-danger'}`} label='Accept terms and conditions' />
                </Form.Group>

                <Button
                    disabled={!agree}
                    variant='primary w-50 mx-auto d-block mb-3' type='submit'>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login.</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;