import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { SvgIconComponent } from "@mui/icons-material";

const drawerWidth = 50;

const SidebarWrapper = styled("div")(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    overflow: "hidden", // Prevents scrollbar
  },
}));

type IconTypeMap = {
  WidgetsIcon: SvgIconComponent;
  HomeIcon: SvgIconComponent;
  MailIcon: SvgIconComponent;
  Drafts: SvgIconComponent;
};

const iconMapping: IconTypeMap = {
  WidgetsIcon: WidgetsIcon,
  HomeIcon: HomeIcon,
  MailIcon: MailIcon,
  Drafts: DraftsIcon,
};

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#202028",
            overflow: "hidden",
          },
        }}
      >
        <List>
          {["WidgetsIcon", "HomeIcon", "MailIcon", "Drafts"].map(
            (text, index) => {
              const ElementIcon = iconMapping[text as keyof IconTypeMap];
              return (
                <ListItem key={index} sx={{ height: 60 }}>
                  <ListItemIcon className="icons">
                    <ElementIcon
                      sx={{ cursor: "pointer" }}
                      color={text === "HomeIcon" ? "primary" : "inherit"}
                    />
                  </ListItemIcon>
                </ListItem>
              );
            }
          )}
        </List>
      </Drawer>
    </SidebarWrapper>
  );
};

export default Sidebar;
