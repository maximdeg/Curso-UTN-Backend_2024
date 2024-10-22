import React from 'react';
import { Link } from 'react-router-dom';

export const extractFormData = (form_fields, form_values) => {
    for (let field in form_fields) {
        form_fields[field] = form_values.get(field);
    }
    return form_fields;
};
function Login() {
    const handleLoginForm = (e) => {
        e.preventDefault();

        const form_HTML = e.target;
        const form_values = new FormData(form_HTML);
        const form_fields = {
            email: '',
            password: '',
        };
        const form_values_object = extractFormData(form_fields, form_values);

        fetch('http://127.0.0.1:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form_values_object),
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    
    return (
        <div>
            <h1>LOGIN</h1>

            <form onSubmit={handleLoginForm}>
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
