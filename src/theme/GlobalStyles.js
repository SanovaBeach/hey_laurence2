import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Source Sans Prop', sans-serif
  }

  html {
    font-size: 62.5%;
  }


  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Raleway', sans-serif;    
    transition: all .50s linear;
    font-size: 1.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 5rem;
  max-width: 130rem;

  @media screen and (max-width: 760px) {
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
