import * as React from "react";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Avatar,
  Container,
  FormControl,
  Grid,
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
  ANAHITA_COLOR,
  // BACKGROUND_COLOR,
  FONT_FAMILY,
  NAVBAR_APPBAR_TYPOGRAPHY,
  NAVBAR_CONTAINER_DISPLAY,
  NAVBAR_ICON_BUTTON_DISPLAY,
  PERSIAN_FONT_FAMILY,
} from "../../public/theme/theme";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, useTheme } from "@mui/material/styles";
import { US } from "country-flag-icons/react/3x2";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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

  const { t } = useTranslation();

  const { locale: language, pathname: url } = useRouter();
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
        router.push(url, url, { locale: "el" });
        break;
      case "fa":
        router.push(url, url, { locale: "fa" });
        break;

      default:
        router.push(url, url, { locale: "en" });
        break;
    }
  };

  const redirection = (link: string) => {
    switch (language) {
      case "el":
        router.push(link, link, { locale: "el" });
        break;
      case "fa":
        router.push(link, link, { locale: "fa" });
        break;
      default:
        router.push(link, link, { locale: "en" });
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
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
            <Grid
              item
              md={2}
              sm={2}
              lg={2}
              xl={2}
              xs={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src="/logo.png"
                variant="square"
                sx={{
                  width: 150,
                  height: "auto",
                  marginRight: 5,
                }}
              />
            </Grid>
            {titles.map((title) => (
              <>
                {title.header !== "CHOOSE YOUR LANGUAGE" ? (
                  <Typography
                    // variant="p"
                    noWrap
                    component="a"
                    onClick={() => redirection(title.href ?? "")}
                    sx={{ ...NAVBAR_APPBAR_TYPOGRAPHY, color: ANAHITA_COLOR }}
                    key={title.header}
                  >
                    <span
                      style={{
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        color: ANAHITA_COLOR,
                      }}
                    >
                      {title.icon}
                    </span>
                    <span
                      style={{
                        fontFamily:
                          language === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                      }}
                    >
                      {t(`NAVBAR.${title.header}`)}
                    </span>
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
                        <MenuItem
                          value={l.code}
                          key={l.code}
                          sx={{ color: "black" }}
                        >
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
            <Grid
              item
              md={2}
              sm={2}
              lg={2}
              xl={2}
              xs={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src="/logo.png"
                variant="square"
                sx={{
                  width: 150,
                  height: "auto",
                  marginRight: 5,
                  marginLeft: 2,
                  marginBottom: 1,
                  marginTop: 1,
                }}
              />
            </Grid>
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
            <>
              {title.header !== "CHOOSE YOUR LANGUAGE" ? (
                <Typography
                  // variant="p"
                  noWrap
                  component="a"
                  href={title.href}
                  sx={{ ...NAVBAR_APPBAR_TYPOGRAPHY, color: ANAHITA_COLOR }}
                  key={title.header}
                >
                  <span
                    style={{
                      marginLeft: "15px",
                      marginRight: "10px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      color: ANAHITA_COLOR,
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
