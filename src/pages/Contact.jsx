import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      .contact-form {
        max-width: 50rem;
        margin: auto;
      }
      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7069.294838937302!2d85.5173582!3d27.635434450000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f3381de1441%3A0xc75a3757bd7ce81f!2sNaya%20Basti%2C%20Banepa%2045210%2C%20Nepal!5e0!3m2!1sen!2sin!4v1682520688768!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        llowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xgebrqqp" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
