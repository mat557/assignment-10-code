import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 w-50 mx-auto d-block'>
            <div className='pt-3'>
                <h4 className='text-center'>Question-3:Difference between authorization and authentication</h4>
                <p className='text-center'>Ans: Authentication and authorization both can be used in same website.
                And they almost have the same purpose to be implemented in a website both are related to website's serurity.
                But there are significant deference between them . The authentication process check the user information for 
                providing access to the website resourses.And authentication is done before authorixation . On the other hand ,
                authorization is the process of verifying what specific applications, files, and data a user has access to.
                </p>
            </div>

            <div className='pt-3'>
                <h4 className='text-center'>Question-2: Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='text-center'>
                Ans: I am using firebase for authentication with email/password , facebook ,gmail ,github etc. It provide easy way to implement authentication
                system in my website.Another reason is , it provite free hosting to the web application ,
                there are many other option than using firebase . One of the easiest way is using react firebase authentication hooks for website . Many developer uses Auth0, MongoDB,
                Passport, Okta for their website which are compititor to firebase. 
                </p>
            </div>

            <div className='pt-3'>
                <h4 className='text-center'>Question-3: What other services does firebase provide other than authentication</h4>
                <p className='text-center'>Ans:As for newbie it offer some free resourse to practice with.Fire 
                base can be used for multiple puposes other then authentication.It provide authentication for not only web application but also for game , apps etc.
                In short the uses of fire base are 1.Fast & Safe Hosting , 2.Firebase Cloud Messaging for Cross-Platform
                3.Firebase Testing Services to Improve App Quality,4.Free Use of Firebase Dynamic Links etc .</p>
            </div>
        </div>
    );
};

export default Blog;