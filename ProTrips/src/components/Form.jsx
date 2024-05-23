import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', contacts: ''});
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const missingFields = Object.keys(formData).filter(field => !formData[field]);
        if (missingFields.length > 0) {
            alert(`Please fill ${missingFields.join(', ')}`);
            return;
        }
        if (formData.contacts.length !== 10 || isNaN(formData.contacts)) {
            alert('Please enter a valid 10-digit contacts number!');
            return;
        }
        setRegistrationSuccess(true);
        setTimeout(() => {
            setRegistrationSuccess(false);
            setFormData({firstName: '', lastName: '', email: '', contacts: ''});
        }, 3000); 
    };

    return (
        <div>
            {registrationSuccess && (
                <div className="message">
                    Registration successful!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="contacts" placeholder="Phone number" value={formData.contacts} onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
