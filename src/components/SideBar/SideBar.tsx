import React from "react";
import { Divider, Drawer, IconButton, Typography } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}))

interface Props {
  isOpen: boolean;
  children: any
  handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 240;


const SideBar: React.FC<Props> = ({ isOpen, children, handleDrawerToggle }): JSX.Element => {

  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          }

        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              Repo Logo
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              {
                theme.direction === "ltr" ? (<ChevronLeftIcon />) : (<ChevronRightIcon />)
              }
            </IconButton>
          </LogoStyled>
        </DrawerHeader>
        <Divider />
        {children}
      </Drawer>
    </>
  )
}

export default SideBar;
