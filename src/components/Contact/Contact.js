import React from "react";
import styled from "styled-components/macro";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="line"></div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/laurence-balazo-51a782216/"
            className="link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/SanovaBeach" className="link">
            <FaGithub className="icon" />
          </a>
        </div>
        <p className="contact">Socials</p>
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  position: absolute;
  top: 6rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .line {
    width: 2px;
    background-color: gray;
    height: 40rem;
  }

  .socials {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }
  .link {
    color: ${({ theme }) => theme.colors.link.text};
    text-decoration: none;
    &:hover {
    }
  }
  .icon {
    font-size: 5rem;
    height: 5.5rem;
  }

  .contact {
    transform: rotate(270deg);
    margin-top: 5rem;
  }
`;
