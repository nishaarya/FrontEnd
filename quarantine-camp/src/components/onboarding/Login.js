import React from 'react';

const Login = () => {

    const handleChange = e => {
    }

    const handleSubmit = e => {
    }
 
    return (

        <form className='login-form'>

            <input
                className='input'
                type='text'
                name='username'
                placeholder='username'
                onChange={handleChange}
            />

            <input
                className='input'
                type='password'
                name='password'
                placeholder='password'
                onChange={handleChange}
            />
            
            <button onSubmit={handleSubmit}>Submit</button>

        </form>

    )
}
export default Login;