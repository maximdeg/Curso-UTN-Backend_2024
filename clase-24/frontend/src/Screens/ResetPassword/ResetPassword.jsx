import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { extractFormData } from '../../utils.js/extractFormData';

function ResetPassword() {
    const { reset_token } = useParams();
    // TODO: VERIFY TOKEN
    const handlePasswordForm = (e) => {
        e.preventDefault();

        const form_HTML = e.target;
        const form_values = new FormData(form_HTML);
        const form_fields = {
            password: '',
        };
        const form_values_object = extractFormData(form_fields, form_values);

        fetch(`http://127.0.0.1:3000/api/auth/reset-password/${reset_token}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form_values_object),
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1>PASSWORD RESET</h1>

            <form onSubmit={handlePasswordForm}>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                {/* <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div> */}
                <button type="submit">Reset Password</button>
                <div>
                    <span>
                        If you don't have an account you can <Link to="/register">register</Link>{' '}
                    </span>
                </div>
                <div>
                    <span>
                        If you remember your password plase <Link to="/forgot-password">Login</Link>{' '}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;
