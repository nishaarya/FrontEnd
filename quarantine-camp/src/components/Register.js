import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import axiosWithAuth from '../utilities/axiosWithAuth';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const credentials = { username, password };

    const handleSubmit = e => {
        e.preventDefault();
        if ( username.length > 3 || password.length > 6 ) {
            setError(false)
            console.log(credentials)
        } else {
            setError(true)
        };
    };

    return (

        <form className='register-form' onSubmit={handleSubmit}>

            <input
                className='input'
                type='text'
                name='username'
                placeholder='username'
                onChange={e => setUsername(e.target.value)}
            />

            { error && (
                <span> Username must be at least 3 characters long</span>
            )}

            <input
                className='input'
                type='password'
                name='password'
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            />

            { error && (
                <span> Password must be at least 8 characters long</span>
            )}      

            <button value='submit'>sign up</button>

            <Link className='link' to='/'>Log In</Link>
            
        </form>

    )
};

export default Register;
