import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h5>Q1: What is the difference between authorization and authentication?</h5>
            <p>Ans: Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. <br />
                Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.
            </p>
            <h5>Q2: Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>Ans: I'm using Firebase beacuse with Firebase it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if I want to use a pre-built authentication UI, I have it at my disposal as well. <br />
                The other options I have to implement authentication are: Auth0, MongoDB, Passport, Okta, JSON Web Token, Amazon Cognito and Keycloak.
            </p>
            <h5>Q3: What other services does firebase provide other than authentication?</h5>
            <p>Ans: Firebase provides many services other than authentication; such as Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.</p>
        </div>
    );
};

export default Blogs;