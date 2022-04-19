import React from 'react';
import google from '../../../images/google.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (errorGoogle || errorGithub) {
        errorElement = <p className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</p>
    }

    if (userGoogle || userGithub) {
        navigate('/home');
    }

    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Sign In with Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img src={github} alt="" />
                    <span className='px-2'>Sign In with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;