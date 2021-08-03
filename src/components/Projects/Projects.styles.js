import styled, { ThemeConsumer } from "styled-components/macro";

export const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  padding: 3rem 0;
`;

export const Wrapper = styled.div`
  padding: 8rem 0;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 80rem;
  max-height: 60rem;
  margin: 5rem 0;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  max-height: 40rem;
`;
export const TextWrapper = styled.div`
  width: 100%;
  max-width: 90%;
  margin-left: 3rem;
  margin-top: 2rem;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

//  skills component
export const SkillsWrapper = styled.div`
  .skills-image {
    width: 5rem;
    height: 5rem;
    margin: 0 1rem;
  }
`;

// Links component
export const LinksWrapper = styled.div`
  .live {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.button.background};
    padding: 1rem 2rem;
    margin-right: 2rem;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.button.text};
    border-radius: 1rem;
    transition: all 0.3s linear;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.text};
      color: ${({ theme }) => theme.colors.button.background};
    }
  }
  .github {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    font-size: 2.2rem;
    border-radius: 1rem;
    text-decoration: none;
    padding: 1rem 2rem;
    transition: all 0.3s linear;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.text};
      color: ${({ theme }) => theme.colors.button.background};
    }
  }
`;
