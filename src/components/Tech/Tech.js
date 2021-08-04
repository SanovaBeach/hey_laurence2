import React from "react";
import styled from "styled-components/macro";
import { tech } from "../../content/tech";

const Tech = () => {
  return (
    <>
      <Heading>Technologies I know</Heading>
      <Wrapper>
        {tech.map((item, index) => {
          const { img, name } = item;
          return (
            <section className="content" key={index}>
              <img src={img} alt={name} className="image" />
              <p className="name">{name}</p>
            </section>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Tech;

const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  padding: 3rem 0;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20rem;
    width: 20rem;

    @media screen and (max-width: 480px) {
      height: 14rem;
      width: 14rem;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    max-width: 10rem;
    max-height: 10rem;
    margin: 1rem 1.5rem;
    object-fit: contain;
    padding: 1rem;
  }

  .name {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;
