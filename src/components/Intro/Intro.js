import React from "react";
import styled from "styled-components/macro";
import Contact from "../Contact/Contact";

const Intro = () => {
  return (
    <Wrapper>
      <h2 className="name">Laurence Balazo</h2>
      <a
        className="link"
        href="mailto:laurencebalazo@gmail.com?subject=Hey, Laurence"
      >
        laurencebalazo@gmail.com
      </a>
      <Contact />
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  position: relative;

  .name {
    text-transform: uppercase;
    @media screen and (max-width: 480px) {
      font-size: 2.2rem;
    }
  }
  .link {
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.link.text};
    }
  }
`;
