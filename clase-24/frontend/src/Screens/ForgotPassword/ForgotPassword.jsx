import React from 'react';
import { Link } from 'react-router-dom';
import { extractFormData } from '../../utils/extractFormData';

function ForgotPassword() {
    const handleEmailForm = async (e) => {
        try {
            e.preventDefault();

            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                email: '',
            };

            // TODO: CHECK IF EMAIL IS VALID

            const form_values_object = extractFormData(form_fields, form_values);

            const response = await POST('http://127.0.0.1:3000/api/auth/forgot-password', {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(form_values_object),
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1>Forgot my password</h1>

            <form onSubmit={handleEmailForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                </div>

                <button type="submit">Send recovery token</button>
                <div>
                    <span>
                        If you don't have an account you can <Link to="/register">register</Link>{' '}
                    </span>
                </div>
                <div>
                    <span>
                        If you have an account you can <Link to="/login">login</Link>{' '}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
