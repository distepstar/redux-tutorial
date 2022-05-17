import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch as ThemeSwitch, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface Props {
  handleDrawerOption: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isDrawerOpen: boolean;
}

const AppBarComponent: React.FC<Props> = ({ handleDrawerOption, onThemeChange, isDarkMode, isDrawerOpen }): JSX.Element => {

  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          >
            <Box sx={{
              display: "flex",
              alignItems: "center"
            }}>
              <IconButton
                color="inherit"
                onClick={handleDrawerOption}
                edge="start"
                sx={{
                  mr: 2,
                  ...(isDrawerOpen && { display: "none" })
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="subtitle1" component="div" sx={{ flexGlow: 1 }}>
                React Repo Trading App
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center"
            }}>
              {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
              <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )

}
export default AppBarComponent;
