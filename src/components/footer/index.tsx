"use client";
import { Paper, Typography, useTheme } from "@mui/material";
import useTranslation from "src/hooks/translation";
import styles from "./style.module.css";
import Container from "../ui/container";
import clsx from "clsx";
import GitterIcon from "@/assets/icons/Gitter";
import Discord from "@/assets/icons/Discord";
import Link from "next/link";
import X from "@/assets/icons/X";
import GitHub from "@/assets/icons/GitHub";

const SOCIAL_MEDIA = [
  {
    label: "GitHub",
    href: "https://github.com/TheAlgorithms/",
    icon: GitHub,
  },
  {
    label: "X",
    href: "https://the-algorithms.com/discord/",
    icon: X,
  },
  {
    label: "Gitter",
    href: "https://matrix.to/#/#TheAlgorithms_community:gitter.im",
    icon: GitterIcon,
  },
  {
    label: "Discord",
    href: "https://the-algorithms.com/discord/",
    icon: Discord,
  }
];

const MENU = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Donate",
    href: "/donate",
  },
  {
    label: "Team",
    href: "/team",
  }
];

const LEGAL = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms and Conditions",
    href: "/terms",
  },
  {
    label: "Imprint",
    href: "/imprint",
  },

];

export default function Footer() {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} >
      {/* <div className={`section container ${styles.grid}`}>
        <img
          src="/logo_t.svg"
          className={styles.logo}
          alt="The Algorithms logo"
        />
        <Typography className={styles.name}>
          &#169; The Algorithms {currentYear}
        </Typography>
        <div className={styles.list}>
          <Link href="/#about">{t("algorithmExplaniationFooter")}</Link>
          <Link href="/#aboutUs">{t("aboutUsFooter")}</Link>
          <Link href="/#programmingLanguages">
            {t("programmingLanguagesTitle")}
          </Link>
          <Link href="/#contribute">{t("contributeTitle")}</Link>
          <Link href="/#donate">{t("donateTitle")}</Link>
        </div>
        <div className={styles.list}>
          <NextLink
            href="https://github.com/TheAlgorithms/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </NextLink>
          <NextLink
            href="https://matrix.to/#/#TheAlgorithms_community:gitter.im"
            target="_blank"
            rel="noreferrer"
          >
            Gitter
          </NextLink>
          <NextLink
            href="https://twitter.com/The_Algorithms"
            target="_blank"
            rel="noreferrer"
          >
            X
          </NextLink>
          <NextLink
            href="https://github.com/TheAlgorithms/website"
            target="_blank"
            rel="noreferrer"
          >
            {t("sourceCodeFooter")}
          </NextLink>
          <NextLink
            href="mailto:hello@the-algorithms.com"
            target="_blank"
            rel="noreferrer"
          >
            {t("contact")}
          </NextLink>
        </div>
        <NextLink
          className={styles.vercelLogo}
          href="https://vercel.com?utm_source=thealgorithms&utm_campaign=oss"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/powered-by-vercel-t.svg" alt="Powered by Vercel" />
        </NextLink>
      </div> */}
      <Container className={clsx(styles.container, styles.footerGrid)}>
        {/* Logo Column Start */}
        <div className={styles.logoCol}>
          <h2 className={styles.logoTitle}>The Algorithms</h2>
          <p>GitHub's largest open-source algorithm library</p>

          <div className={styles.footerSocialMenu}>
            {SOCIAL_MEDIA.map(({ label, href, icon: Icon }) => (
              <Link
                className={styles.footerLink}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className={styles.socialIcon} />
              </Link>
            ))}
          </div>
        </div>
        {/* Logo Column End */}

        {/* Menu Column Start */}
        <div className={clsx(styles.listCol, styles.list1)}>
          <h2 className={styles.listTitle}>Menu</h2>
          <ul className={styles.footerMenu}>
            {MENU.map(({ label, href }) => (
              <li className={styles.footerMenuItem} key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu Column End */}

        {/* Legal Column Start */}
        <div className={clsx(styles.listCol, styles.list2)}>
          <h2 className={styles.listTitle}>Legal</h2>
          <ul className={styles.footerMenu}>
            {LEGAL.map(({ label, href }) => (
              <li className={styles.footerMenuItem} key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Terms of service</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Privacy policy</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Community policy</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Code of conduct</Link>
            </li>
          </ul>
        </div>
        {/* Legal Column End */}

        <div className={clsx(styles.listCol, styles.list3)}>
          <h2 className={styles.listTitle}>Support</h2>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Product help</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Report an issue</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.listCol, styles.list4)}></div>
      </Container>

      <Container className={clsx(styles.container, styles.copyFooter)}>
        <p className={styles.copyText}>Visit <a href="https://thealgorithms.com">thealgorithms.com</a> not-for-profit parent, the Dot9 foundation.</p>
        <p className={styles.copyText}>Portions of this content are @2024 by individual thealgorithm.com contributors. Content available under a CC BY-SA 4.0 license.</p>
      </Container>
    </footer>
  );
}
