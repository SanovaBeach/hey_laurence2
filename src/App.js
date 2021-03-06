import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Container } from "./theme/GlobalStyles";
import * as themes from "./theme/themes.json";
import { setToLS } from "./utils/storage";
import { useTheme } from "./theme/useTheme";
import ThemeSelector from "./ThemeSelector";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";
import { projects } from "./content/projects";
import Projects from "./components/Projects/Projects";

function App() {
  setToLS("all-themes", themes.default);
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container>
            <ThemeSelector setter={setSelectedTheme} />
            <Intro />
            <Tech />
            <Projects projects={projects} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
