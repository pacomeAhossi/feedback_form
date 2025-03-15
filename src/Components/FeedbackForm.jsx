import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    })

    const handleChanges = (event) => {
        const {name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    };
  return (
    <>
        <nav>
            Tell Us What You Think
        </nav>
        <form className="feedback-form">
            <h2>We'd Love to Hear From You!</h2>
            <p>Please share your feedback with us.</p>
            <input type="text" name='name' placeholder='Your Name' />
            <input type="email" name='email' placeholder='Your Email' />
            <textarea name="feedback" cols="30" rows="10" placeholder='Your Feedback'></textarea>
            <button type='submit'>Submit feedback</button>
        </form>
    </>
  );
};

export default FeedbackForm;
