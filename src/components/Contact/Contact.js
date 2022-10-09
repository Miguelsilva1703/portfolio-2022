import React from "react";
import { ContactSection, ContactWrap, BgImg } from "./ContactElements";
import contactImg from "../../images/Contact.jpg";
/**import ContactForm from "../Reusables/ContactForm/Form";*/

const Contact = () => {
    return (
        <>
            <ContactSection id="contact">
                <BgImg src={contactImg} />
                <ContactWrap>
                    <h1>HELLOO THERE</h1>
                </ContactWrap>
            </ContactSection>
        </>
    );
};

export default Contact;


                 /**
<ContactForm />
 */