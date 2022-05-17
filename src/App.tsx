import React, { useState, useCallback } from "react";
import { Provider } from "react-redux";

import {
  createTheme,
  ThemeProvider,
  TextField,
  CssBaseline,
} from "@mui/material";
import { AppBarComponent, SideBar, Menu } from "./components/index";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routers/index";
import "./App.css";
import { Dashboard, Blotter, TradeTicket } from "./features";
import { store } from "./store";

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    // toggle drawer here
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    // theme change here
  }, [themeMode]);

  const menuClickHandler = (link: string) => {
    navigate(link);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarComponent
          handleDrawerOption={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === "dark"}
          isDrawerOpen={sideBarToggle}
        />

        <SideBar
          isOpen={sideBarToggle}
          handleDrawerToggle={handleDrawerToggle}
          children={<Menu links={ROUTES} menuClickHandler={menuClickHandler} />}
        />
        <Routes>
          <Route path={MAIN} element={<Dashboard />} />
          <Route path={BLOTTER} element={<Blotter />} />
          <Route path={TRADETICKET} element={<TradeTicket />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
