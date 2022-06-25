import * as React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  MAIN_COLOR,
  NAVBAR_APPBAR_TYPOGRAPHY,
  NAVBAR_CONTAINER_DISPLAY,
  NAVBAR_ICON_BUTTON_DISPLAY,
  QUATERNARY_COLOR,
  SECONDARY_COLOR,
} from "../theme/theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import NewsPaperIcon from "@mui/icons-material/Newspaper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const titles = [
  { header: "NEWS", href: "/news", icon: <NewsPaperIcon /> },
  { header: "PORTFOLIO/ABOUT", href: "/", icon: <AccountBoxIcon /> },
  { header: "WRITINGS", href: "/writings", icon: <BorderColorIcon /> },
  { header: "CONTACT", href: "/contact", icon: <PhoneIcon /> },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: MAIN_COLOR }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              display: NAVBAR_ICON_BUTTON_DISPLAY,
            }}
          >
            <MenuIcon
              sx={{
                display: NAVBAR_ICON_BUTTON_DISPLAY,
              }}
            />
          </IconButton>
          <Container
            sx={{
              display: NAVBAR_CONTAINER_DISPLAY,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {titles.map((title) => (
              <Typography
                // variant="p"
                noWrap
                component="a"
                href={title.href}
                sx={{ ...NAVBAR_APPBAR_TYPOGRAPHY, color: SECONDARY_COLOR }}
              >
                <span
                  style={{
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    color: QUATERNARY_COLOR,
                  }}
                >
                  {title.icon}
                </span>
                <span>{title.header}</span>
              </Typography>
            ))}
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: NAVBAR_ICON_BUTTON_DISPLAY,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {titles.map((title) => (
            <ListItem key={title.header} disablePadding>
              <ListItemButton>
                <Typography
                  sx={{
                    mr: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {title.icon}
                </Typography>{" "}
                <ListItemText primary={title.header} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
