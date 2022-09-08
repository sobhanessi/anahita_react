import * as React from "react";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  NAVBAR_APPBAR_TYPOGRAPHY,
  NAVBAR_CONTAINER_DISPLAY,
  NAVBAR_ICON_BUTTON_DISPLAY,
} from "../../public/theme/theme";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, useTheme } from "@mui/material/styles";
import { US } from "country-flag-icons/react/3x2";
import { useRouter } from "next/router";

const drawerWidth = 240;

const titles = [
  { header: "HOME", href: "/", icon: <HomeIcon /> },
  { header: "MENU", href: "/menu", icon: <MenuBookIcon /> },
  { header: "CONTACT", href: "/contact", icon: <PhoneIcon /> },
  {
    header: "CHOOSE YOUR LANGUAGE",
    languages: [
      { header: "ENGLISH", icon: <US />, code: "en" },
      { header: "فارسی", icon: "", code: "fa" },
      // { header: "عربی", icon: "", code: "ar" },
    ],
  },
];

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

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

export default function Navbar(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { locale: language } = useRouter();
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLanguage = (event: SelectChangeEvent) => {
    switch (event.target.value) {
      case "el":
        router.push("/menu", "/menu", { locale: "el" });
        break;
      case "fa":
        router.push("/menu", "/menu", { locale: "fa" });
        break;
      case "en":
        router.push("/menu", "/menu", { locale: "en" });
        break;
      default:
        router.push("/menu", "/menu", { locale: "en" });
        break;
    }
  };
  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              display: NAVBAR_ICON_BUTTON_DISPLAY,
              color: "black",
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
              <>
                {title.header !== "CHOOSE YOUR LANGUAGE" ? (
                  <Typography
                    // variant="p"
                    noWrap
                    component="a"
                    href={title.href}
                    sx={{ ...NAVBAR_APPBAR_TYPOGRAPHY, color: "black" }}
                    key={title.header}
                  >
                    <span
                      style={{
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                      }}
                    >
                      {title.icon}
                    </span>
                    <span>{title.header}</span>
                  </Typography>
                ) : (
                  <FormControl sx={{ m: 2, minWidth: 140 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Language
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={language}
                      label="Language"
                      onChange={handleLanguage}
                      displayEmpty
                    >
                      <MenuItem value="el" key="el">
                        <em>ΕΛΛΗΝΙΚΑ</em>
                      </MenuItem>
                      {title?.languages?.map((l) => (
                        <MenuItem value={l.code} key={l.code}>
                          {l.header}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </>
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
          {/* {titles.map((title) => (
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
          ))} */}

          {titles.map((title) => (
            <>
              {title.header !== "CHOOSE YOUR LANGUAGE" ? (
                <Typography
                  // variant="p"
                  noWrap
                  component="a"
                  href={title.href}
                  sx={{ ...NAVBAR_APPBAR_TYPOGRAPHY, color: "black" }}
                  key={title.header}
                >
                  <span
                    style={{
                      marginLeft: "15px",
                      marginRight: "10px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    {title.icon}
                  </span>
                  <span>{title.header}</span>
                </Typography>
              ) : (
                <FormControl sx={{ m: 2, minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={language}
                    label="Language"
                    onChange={handleLanguage}
                    displayEmpty
                  >
                    <MenuItem value="el" key="el">
                      <em>ΕΛΛΗΝΙΚΑ</em>
                    </MenuItem>
                    {title?.languages?.map((l) => (
                      <MenuItem value={l.code} key={l.code}>
                        {l.header}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}
    </Box>
  );
}
