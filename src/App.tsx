import React, { useState, useCallback } from 'react';
import { createTheme, ThemeProvider, TextField, CssBaseline } from "@mui/material";
import { AppBarComponent, SideBar, Menu } from "./components/index"
import { BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routers/index";
import './App.css';

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);


  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    }
  });

  const handleDrawerToggle = React.useCallback(() => {
    // toggle drawer here
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    // theme change here 
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerOption={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sideBarToggle}
      />

      <BrowserRouter>
        <SideBar
          isOpen={sideBarToggle}
          handleDrawerToggle={handleDrawerToggle}
          children={<Menu links={ROUTES} />}
        />
      </BrowserRouter>
    </ThemeProvider>

  );
};


export default App;
