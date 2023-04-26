import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="headings">
            <h3>Ready to get started?</h3>
            <h3>Talk to us Today</h3>
          </div>
          <div className="button-container">
            <NavLink to="/">
              <Button className="btn">Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
       <div className="section">
        <h3>HARI SHARAN CHAULAGAIN</h3>
        <p>
          I'm a React developer.
        </p>
      </div>
      <div className="section">
        <h3>Social media</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/hari-sharan-chaulagain-592b4225b/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/Harisharan1221">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/harisharanChaulagain">Git Hub</a>
          </li>
        </ul>
      </div>
      <div className="section">
        <h3>Contact me</h3>
        <p>
          Phone: 0898768 <br />
          Email: chaulagaihari12345@gmail.com <br />
          Address: Banepa
        </p>
      </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 3rem 0;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};

  .contact-short {
    max-width: 100vh;
    margin: auto;
  }

  .grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .headings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 2rem;
  }

  .headings h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
  }

  .btn {
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out;
  }

  .btn:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f7f7f7;
  font-size: 1.2rem;

  .section {
    flex-basis: 30%;
    margin-bottom: 2rem;

    h3 {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #666;
          }
        }
      }
    }

    p {
      margin: 0;
    }
  }
`;

export default Footer;
