import Navbar from "src/components/navbar";
import React, { ReactNode } from "react";
import useTranslation from "src/hooks/translation";
import classes from "./style.module.css";

export default function PlaygroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = useTranslation();
  return (
    <div className={classes.root}>
      <Navbar title={t("codeplayground")} wide />
      {children}
    </div>
  );
}
