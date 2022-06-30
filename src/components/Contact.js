// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({kontak}) => {
    return (
        <div className="contact">
                <div className="contact-photo">
                    <img src={kontak.photo} />
                </div>
                <div className="contact-info">
                    <h2>{kontak.name}</h2>
                    <p>{kontak.phone}</p>
                    <p>{kontak.email}</p>
                </div>
            </div>
    )
}

export default Contact;


            
   

