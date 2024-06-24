"use client";
import { Paper, Typography, useTheme } from "@mui/material";
import Link from "src/components/link";
import useTranslation from "src/hooks/translation";
import styles from "./style.module.css";
import NextLink from "next/link";
import Container from "../ui/container";
import clsx from "clsx";

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
        <div className={styles.logoCol}>
          <h2 className="">The Algorithms</h2>
          <p>GitHub's largest open-source algorithm library</p>
        </div>
        <div className={clsx(styles.listCol, styles.list1)}>
          <h2 className={styles.listTitle}>Menu</h2>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">About</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Donate</Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link href="/en-US/about">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.listCol, styles.list2)}>
          <h2 className={styles.listTitle}>Legal</h2>
          <ul className={styles.footerMenu}>
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
