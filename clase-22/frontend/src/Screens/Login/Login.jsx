import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h1>LOGIN</h1>

            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>
                        {' '}
                        If you don't have an account you can{' '}
                        <Link to="/register">register</Link>{' '}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
