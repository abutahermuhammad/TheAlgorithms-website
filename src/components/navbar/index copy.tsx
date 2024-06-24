import React, { useState, useEffect, useRef } from "react";
import useTranslation from "src/hooks/translation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  ListItem,
} from "@mui/material";
import { JumboThemeProvider } from "src/hooks/themes";
import Link from "src/components/link";
import { useRouter } from "next/router";
import SearchBar from "src/components/searchBar";
import LangSelect from "src/components/langSelect";
import GithubOriginalIcon from "react-devicons/github/original";
import {
  Brightness7,
  Close,
  Menu,
  NightsStay,
  Translate,
} from "@mui/icons-material";
import { useQuery } from "src/hooks/query";
import { useDarkTheme } from "src/hooks/darkTheme";
import classes from "./style.module.css";
import NextLink from "next/link";

export default function Navbar({
  position = "fixed",
  title,
  wide = false,
}: {
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  title?: string;
  wide?: boolean;
}) {
  const t = useTranslation();
  const [query, setQuery] = useQuery();
  const [atTop, setAtTop] = useState(false);
  const smallScreen = useMediaQuery("(max-width:800px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const langSelectRef = useRef();
  const [langSelectOpen, setLangSelectOpen] = useState(false);
  const router = useRouter();
  const isHome = router.route === "/";
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const menu = [
    {
      name: t("aboutTextNavbar"),
      href: "/#aboutUs",
      target: "_self",
    },
    {
      name: t("donateButton"),
      href: "https://liberapay.com/TheAlgorithms/donate",
      target: "_blank",
    },
  ];

  useEffect(() => {
    setAtTop(window.scrollY < 1);
    window.addEventListener("scroll", () => {
      setAtTop(window.scrollY < 1);
    });
  }, []);

  function switchTheme() {
    setDarkTheme((currentDarkTheme: boolean) => {
      localStorage.setItem("theme", currentDarkTheme ? "light" : "dark");
      return !darkTheme;
    });
  }

  return (
    <AppBar
      className={
        !menuOpen && atTop && isHome
          ? classes.root
          : `${classes.root} ${classes.scrolled}`
      }
      position={position}
    >
      <JumboThemeProvider>
        <Toolbar
          className={`${classes.toolbar} ${wide ? classes.wide : "container"}`}
        >
          <Link href="/" style={{ color: "white" }}>
            <Typography variant="h6" className={classes.title}>
              <img src="/logo_t.svg" alt="The Algorithms logo" />
              <div className={classes.titleBox}>
                <div className={classes.bigTitle}>The Algorithms</div>
                <div className={classes.smallTitle}>{title}</div>
              </div>
            </Typography>
          </Link>
          {!(isHome && atTop) && !smallScreen && (
            <SearchBar query={query} setQuery={setQuery} small />
          )}
          {smallScreen ? (
            <>
              <IconButton
                onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
              >
                {menuOpen ? <Close /> : <Menu />}
              </IconButton>
            </>
          ) : (
            <div>
              <IconButton
                ref={langSelectRef}
                onClick={() => setLangSelectOpen(true)}
                aria-label="Select Language"
              >
                <Translate />
              </IconButton>
              <IconButton
                onClick={() => switchTheme()}
                aria-label="Switch to dark Theme"
              >
                {darkTheme ? <Brightness7 /> : <NightsStay />}
              </IconButton>
              <IconButton
                href="https://github.com/TheAlgorithms"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubOriginalIcon color="white" />
              </IconButton>
              {menu.map((item) => (
                <Button key={item.name} href={item.href} target={item.target}>
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
        <SwipeableDrawer
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          open={menuOpen && smallScreen}
          anchor="right"
          classes={{
            paper: darkTheme ? classes.drawerDark : classes.drawer,
          }}
        >
          <ListItem className={classes.drawerSearch}>
            <SearchBar query={query} setQuery={setQuery} small />
          </ListItem>
          {menu.map((item) => (
            <MenuItem key={item.name}>
              <Button
                href={item.href}
                target={item.target}
                className={classes.sidebarLink}
              >
                {item.name}
              </Button>
            </MenuItem>
          ))}
          <MenuItem>
            <NextLink
              className={classes.unstyledLink}
              href="https://github.com/TheAlgorithms"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </NextLink>
          </MenuItem>
          <MenuItem onClick={() => switchTheme()}>
            {darkTheme ? t("lightModeNavbar") : t("darkModeNavbar")}
          </MenuItem>
          <MenuItem onClick={() => setLangSelectOpen(true)}>
            <Translate className={classes.translateIcon} />
            {t("changeLanguageNavbar")}
          </MenuItem>
        </SwipeableDrawer>
        <LangSelect
          open={langSelectOpen}
          onClose={() => setLangSelectOpen(false)}
          anchor={langSelectRef.current}
        />
      </JumboThemeProvider>
    </AppBar>
  );
}
