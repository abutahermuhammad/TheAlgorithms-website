"use client";
import Image from "next/image";
import Container from "../ui/container";
import Styles from "./navbar.module.css";
import { Button, Input } from "@mui/material";
import { DarkMode, LightMode, Search, Translate } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect } from "react";
import NavPopupMenu, { TNavPopupMenuOption } from "./NavPopupMenu";
import locales from "@/lib/locales";
import clsx from "clsx";

const MENU = [
  {
    name: "Algorithms",
    link: "/algorithm",
  },
  // {
  //   name: "Contribute",
  //   link: "/contribute",
  // },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Contact",
  //   link: "/contact",
  // },
  {
    name: "Donate",
    link: "/donate",
  },
];

const THEMES = [
  {
    label: "Light",
    icon: LightMode,
  },
  {
    label: "Dark",
    icon: DarkMode,
  },
];

// Map language codes to language names
const LANGUAGES: TNavPopupMenuOption[] = Object.entries(locales).map(([s, { name, code, icon }]) => ({
  label: name,
  value: code,
  icon: `flags/${icon}.svg`,
}));

function SearchBox() {
  return (
    <form>
      <Input
        placeholder="Search for algorithms"
        size="small"
        disableUnderline
        endAdornment={<Search sx={{ height: "18px", color: "white", opacity: "0.6" }} />}
        style={{
          width: "100% !important",
          maxWidth: "314px !important",
          height: "34px",
          padding: "9px 15px 5px 15px",
          fontSizeAdjust: "0.6",
          color: "white",
          backgroundColor: "#35404D33",
          borderWidth: "2px",
          borderColor: "#35404D",
          borderRadius: "4px",

          fontSize: "14px",
        }}
      />
    </form>
  )
}



/**
 * Renders a menu component with links.
 *
 * @param {Array<{ name: string, link: string }>} links - An array of objects containing the name and link of each menu item.
 * @returns {JSX.Element} - The rendered menu component.
 */
function Menu({ links }: { links: Array<{ name: string, link: string }> }): JSX.Element {
  return (
    <div className="flex gap-1">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          className="text-white hover:opacity-70 text-[15px]"
          passHref
        >
          <Button variant="text" color="inherit" size="small">
            {link.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}


export default function NavigationBar() {
  const [theme, setTheme] = React.useState("light");
  const [language, setTLanguage] = React.useState("en");
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setTLanguage(newLanguage);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(language);
    console.log(theme);

  }, [theme, language]);

  return (
    <header className={clsx("fixed top-0 left-0 right-0 z-[9999] w-full flex flex-col justify-center items-center text-white", { ["bg-primary"]: isScrolled })} >
      <nav className="w-full h-[50px] flex justify-center items-center">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link href="/home" passHref>
            <Image
              src={"/logo_t.svg"}
              width={28}
              height={20.51}
              alt="The Algorithms"
              priority={true}
              />
            </Link>
            <SearchBox />
          </div>

          <div className="flex items-center gap-6">
            <Menu links={MENU} />
            <NavPopupMenu onSelect={handleLanguageChange} title="English" icon={<Translate />} options={LANGUAGES} />
            <NavPopupMenu onSelect={handleThemeChange} title="Light" icon={<LightMode />} options={THEMES} />
          </div>
        </Container>
      </nav>
    </header>
  )
}
