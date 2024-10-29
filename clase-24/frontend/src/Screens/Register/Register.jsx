import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';

export const extractFormData = (form_fields, form_values) => {
    for (let field in form_fields) {
        form_fields[field] = form_values.get(field);
    }
    return form_fields;
};

function Register() {
    const form_fields = {
        name: '',
        email: '',
        password: '',
    };

    const { formValuesState, setFormValuesState, handleChangeInputValue } = useForm(form_fields);

    const handleSubmitRegisterForm = (e) => {
        e.preventDefault();
        const form_HTML = e.target;
        const form_values = new FormData(form_HTML);
        const form_values_object = extractFormData(form_fields, form_values);

        fetch('http://127.0.0.1:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form_values_object),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((body) => {
                if (!body.ok) {
                    if (body.status === 400) {
                        // TODO: SHOW ERROR MESSAGE
                    }
                    // TODO: SHOW ERROR MESSAGE
                    // use setError maybe
                    console.log(body);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmitRegisterForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name" placeholder="Enter your name" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChangeInputValue} />
                </div>
                <button type="submit">Register</button>
                <div>
                    <span>
                        Si ya tenes cuenta haz click <Link to="/login">aqui</Link>{' '}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Register;
