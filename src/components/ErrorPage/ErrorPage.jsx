import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () =>{
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl mt-40 text-red-600 font-extrabold'>❌ This is error page ❌</h1>
            <Link to='/'><button className='bg-green-600 text-white py-5 px-10 rounded-full text-2xl mt-20'>Go to Home Page</button></Link>
            
        </div>
    );
};

export default ErrorPage;