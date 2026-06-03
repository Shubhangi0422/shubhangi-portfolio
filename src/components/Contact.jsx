import "../styles/Contact.css";
import resume from "../assets/Resume.pdf";

function Contact() {
    return (
        <section id="contact" className="contact-section">

            <div className="contact-container">

                <h2>Let's Connect</h2>

                <p>
                    I'm always open to discussing new
                    opportunities, collaborations and
                    exciting projects.
                </p>

                <div className="contact-grid">

                    <a href="mailto:shubhangi8117@gmail.com">
                        📧 Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shubhangi-jain-58665522b"
                        target="_blank"
                    >
                        💼 LinkedIn
                    </a>

                    <a href={resume} download>
                        📄 Resume
                    </a>

                    <a href="tel:+916399315490">
                        📱 Phone
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contact;