import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import axiosWithAuth from '../utilities/axiosWithAuth';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const credentials = { username, password }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(credentials)
    }
 
    return (

        <form className='login-form' onSubmit={handleSubmit}>

            <input
                className='input'
                type='text'
                name='username'
                placeholder='username'
                onChange={e => setUsername(e.target.value)}
            />

            <input
                className='input'
                type='password'
                name='password'
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            />
            
            <button value='submit'>log in</button>

            <Link className='link' to='/register'>Register</Link>

        </form>

    )
}
export default Login;