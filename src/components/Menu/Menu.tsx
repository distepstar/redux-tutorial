import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";


import { RouterType } from "../../routers";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@mui/material";


interface Props {
  links: RouterType[];
}

const Menu: React.FC<Props> = ({ links }): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <MenuList>
        {links?.map((link) => (
          <MenuItem key={link.path} onClick={() => navigate(link.path)}>
            <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
            <ListItemText>{link.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </div>

  )
}


export default Menu;
