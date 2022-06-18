import { useRef, useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {

    const [email, setEmail] = useState("");
    const nameInputRef = useRef();
    const [message, setMessage] = useState("")

    const sendMessageHandler = async (e) => {
        e.preventDefault();

        const newMessage = {
            email,
            name: nameInputRef.current.value,
            message
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await res.json();
        
        console.log(result);

    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required
                            ref={nameInputRef}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;