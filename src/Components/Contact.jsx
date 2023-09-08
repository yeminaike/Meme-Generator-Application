import React from 'react';
import profile from "../Images/profile.png"
import { useState } from 'react';




function Contact () {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    return ( 
        <main>
        <article className="card">
            <img src={profile} className="card--image" />
            <div className="card--info">
                <img 
                    src={`../images/star-empty.png`} 
                    className="card--favorite"
                    onClick={toggleFavorite}
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
     );
}

export default Contact;