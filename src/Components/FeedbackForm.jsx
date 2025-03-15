import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    })

    // handleChanges pour gérer le changement des inputs si l'utilisateur entre une donnée
    const handleChanges = (event) => {
        const {name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    };

    // handleSubmit pour gérer la soummission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        // Construction du message de confirmation
        const confirmationMessage = `
            Name : ${formData.name}
            Email : ${formData.email}
            Feedback : ${formData.feedback}
        `;

        // isConfirmed recueillir si le user a confirmer ou annuler la boite de dialogue
        const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
        // si isConfirmed est true, on affiche le commentaire dans la co,sole et on réinitialise le state
        // Puis un alert pour lui dire merci
        if(isConfirmed) {
            console.log('Submitting data', formData);

            setFormData({
                name: '',
                email: '',
                feedback: ''
            });

            alert('Thak you for your valuable feedback!');
        }

    };

  return (
    <>
        <nav>
            Tell Us What You Think
        </nav>
        <form className="feedback-form">
            <h2>We'd Love to Hear From You!</h2>
            <p>Please share your feedback with us.</p>
            <input type="text" name='name' placeholder='Your Name'  value={formData.name} onChange={handleChanges}/>
            <input type="email" name='email' placeholder='Your Email'  value={formData.email} onChange={handleChanges}/>
            <textarea name="feedback" cols="30" rows="10" placeholder='Your Feedback' value={formData.feedback} onChange={handleChanges}></textarea>
            <button type='submit'>Submit feedback</button>
        </form>
    </>
  );
};

export default FeedbackForm;
