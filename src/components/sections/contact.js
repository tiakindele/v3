import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledContactForm = styled.form`
`

const Contact = () => {
  const revealContainer = useRef(null);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
    sr.reveal(revealContainer.current, srConfig())
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="title">say <span className="highlighted-lg">hello</span></h2>
      <p>
        I am always interested in making new connections and having conversations! Looking forward to hearing from you.
      </p>
      <a className="email-link" href={`mailto:${email}`}>reach out</a>

      {success && (
        <p style={{ color: "green" }}>Thanks for your message! </p>
      )}

      <StyledContactForm name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </StyledContactForm>
    </StyledContactSection>
  );
};

export default Contact;
