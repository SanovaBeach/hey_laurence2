import React from "react";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="line"></div>
        <div className="line"></div>
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  position: absolute;
  top: 6rem;
  left: 6rem;

  .line {
    width: 0.5rem;
    background-color: gray;
    height: 10rem;
  }
`;
