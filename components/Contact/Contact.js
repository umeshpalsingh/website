import { section_contact, heading, sub_heading, contact_form } from './contact.module.scss';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jhywzrz', 'template_2cdu6bq', form.current, 'LxWzTSxd0zzqtqzjK')
            .then((result) => {
                toast.success('Your email has been successfully sent.');
            }, (error) => {
                toast.error("There was an error, Please try again.");
            });

        setName('');
        setEmail('');
        setMessage("");
    };

    /*-----------------TO CLEAR THE INPUT FIELD AFTER FORM SUBMIT ---------------------*/
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleName(e) {
        const newValue = e.target.value;
        setName(newValue);
    }
    function handleEmail(e) {
        const newValue = e.target.value;
        setEmail(newValue);
    }
    function handleMessage(e) {
        const newValue = e.target.value;
        setMessage(newValue);
    }
    /*----------------------------------------------------------------------------------*/

    return (
        <section id='contact' className={section_contact}>
            <h1 className={heading}>Contact.</h1>
            <h2 className={sub_heading}>
                Got a question or proposal, or just want to say hello? <br /> Go ahead.
            </h2>
            <form ref={form} onSubmit={sendEmail} className={contact_form}>
                <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder='Name'
                    name='from_name'
                    required />
                <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder='Email'
                    name="user_email"
                    required />
                <textarea
                    value={message}
                    onChange={handleMessage}
                    name='message'
                    placeholder='Message'
                    cols="51"
                    rows="4"
                    required></textarea>

                <button>Send Message</button>

            </form>
            <Toaster position='bottom-right' />
        </section>
    );
}