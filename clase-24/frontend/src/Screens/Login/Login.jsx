import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { extractFormData } from '../../utils/extractFormData.js';
import { POST } from '../../fetching/http.fetching.js';
import { getUnnauthenticatedHeaders } from '../../utils/Headers.js';

function Login() {
    const navigate = useNavigate();
    const handleLoginForm = async (e) => {
        try {
            e.preventDefault();

            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                email: '',
                password: '',
            };
            const form_values_object = extractFormData(form_fields, form_values);

            const response = await POST('http://127.0.0.1:3000/api/auth/login', {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(form_values_object),
            });

            const access_token = response.payload.token;
            console.log(access_token);

            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('user_info', JSON.stringify(response.payload.user));
            navigate('/home');
        } catch (err) {
            console.error(err.message);
            // TODO: SHOW ERROR MESSAGE
        }
    };

    return (
        <div>
            <h1>LOGIN</h1>

            <form onSubmit={handleLoginForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>
                        If you don't have an account you can <Link to="/register">register</Link>{' '}
                    </span>
                </div>
                <div>
                    <span>
                        If you forgot your password please <Link to="/forgot-password">click here</Link>{' '}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
