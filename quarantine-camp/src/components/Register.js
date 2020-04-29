import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from '../utilities/axiosWithAuth';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [match, setMatch] = useState(true);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const credentials = { username, password1, password2 };

    const handleSubmit = e => {
        e.preventDefault();

        if ( password1 !== password2 ) {
            setMatch(false);
        } else {
            setMatch(true);

        } if ( username.length < 3 ) {
            setUsernameError(true);
        } else {
            setUsernameError(false);

        } if (password1.length < 8 ) {
            setPasswordError(true);
        } else {
            setPasswordError(false);

        } if ( match && !passwordError && !usernameError ) {
            console.log(credentials);
            axiosWithAuth()
            .post('register/', credentials)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
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

            { usernameError && (
                <span> Username must be at least 3 characters long</span>
            )}

            <input
                className='input'
                type='password'
                name='password1'
                placeholder='password'
                onChange={e => setPassword1(e.target.value)}
            />

            { passwordError && (
                <span> Password must be at least 8 characters long</span>
            )}      

            <input
                className='input'
                type='password'
                name='password2'
                placeholder='confirm password'
                onChange={e => setPassword2(e.target.value)}
            />

            { !match && (
                <span> Passwords must match </span>
            )}  

            <button value='submit'>sign up</button>

            <Link className='link' to='/'>Log In</Link>
            
        </form>

    )
};

export default Register;
