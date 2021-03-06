import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _ from "lodash";
import { useTheme } from "./theme/useTheme";
import { getFromLS } from "./utils/storage";

const ThemedButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.body};
  border-radius: 10rem;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  margin: 0 0.5rem;
  margin: 0.5rem 0;

  @media screen and (max-width: 760px) {
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 5rem;
  margin-right: 5rem;

  @media screen and (max-width: 1000px) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 760px) {
    margin-bottom: 1rem;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 760px) {
    flex-direction: row;
  }
`;

export default (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();
  const [active, setActive] = useState(false);

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  const ThemeCard = (props) => {
    return (
      <ThemedButton
        onClick={(theme) => themeSwitcher(props.theme)}
        style={{
          backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
          color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
          fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
        }}
      ></ThemedButton>
    );
  };

  return (
    <div>
      <Container>
        <ColumnContainer>
          {themes.length > 0 &&
            themes.map((theme) => (
              <ThemeCard theme={data[theme]} key={data[theme].id} />
            ))}
        </ColumnContainer>
      </Container>
    </div>
  );
};
