import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [match, setMatch] = useState(true);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [registrationError, setRegistrationError] = useState(false);

    const credentials = { username, password1, password2 };

    const handleSubmit = e => {
        e.preventDefault();
        
    // error handling
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
    // error handling

        } if ( match && !passwordError && !usernameError ) {
            console.log(credentials);
            axios
            .post('https://quarantine-camp.herokuapp.com/api/registration/', credentials)
            .then(res => {
                setRegistrationError(false);
                localStorage.setItem('token', res.data.key);
                props.history.push('/world-map');
            })
            .catch(err => {
                console.log(err);
                setRegistrationError(true);
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
                <span> password must be at least 8 characters long</span>
            )}      

            <input
                className='input'
                type='password'
                name='password2'
                placeholder='confirm password'
                onChange={e => setPassword2(e.target.value)}
            />

            { !match ? (
                <span> passwords must match </span>

            ) : registrationError ? (
                    <span> registration error </span>
                    
            ) : null
            }  

            <button value='submit'>sign up</button>

            <Link className='link' to='/'>log in</Link>
            
        </form>

    )
};

export default Register;
