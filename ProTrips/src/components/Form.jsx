import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', contacts: '' });
    const [errors, setErrors] = useState({});
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!formData.firstName) formErrors.firstName = 'Please enter your First Name';
        if (!formData.lastName) formErrors.lastName = 'Please enter your Last Name';
        if (!formData.email) formErrors.email = 'Please enter your Email';
        if (!formData.contacts) {
            formErrors.contacts = 'Please enter your Phone Number';
        } else if (formData.contacts.length !== 10 || isNaN(formData.contacts)) {
            formErrors.contacts = 'Please enter a valid 10-digit Phone Number';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setRegistrationSuccess(true);
            setTimeout(() => {
                setRegistrationSuccess(false);
                setFormData({ firstName: '', lastName: '', email: '', contacts: '' });
            }, 3000);
        }
    };

    return (
        <div>
            {registrationSuccess && <div className="message">Registration successful!</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                    
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                    
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="error">{errors.email}</div>}
                    
                    <input type="text" name="contacts" placeholder="Phone number" value={formData.contacts} onChange={handleChange} />
                    {errors.contacts && <div className="error">{errors.contacts}</div>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
