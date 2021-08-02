import React from "react";
import styled from "styled-components/macro";

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
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    text-transform: uppercase;
  }
  .link {
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.link.text};
    }
  }
`;
