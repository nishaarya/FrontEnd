import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password)
    }

    return (

        <form className='register-form' onSubmit={handleSubmit}>

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

            <button value='submit'>Submit</button>

            <Link className='link' to='/'>Log In</Link>
            
        </form>

    )
}
export default Register;