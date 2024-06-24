import React from "react";
import { Typography, Button } from "@mui/material";
import AlgorithmsList from "src/components/algorithmsList";
import Section from "src/components/section";
import Head from "src/components/head";
import { getLanguage, getLanguages } from "src/lib/languages";
import { getLanguageName, Language } from "src/lib/repositories";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageIcon from "src/components/icon";
import { OpenInNew } from "@mui/icons-material";
import { GetStaticPaths, GetStaticProps } from "next";
import useTranslation from "src/hooks/translation";
import { shouldUseISR } from "src/lib/aws";
import { Algorithm } from "src/lib/models";
import classes from "./style.module.css";

export default function LanguagePage({
  language,
  languageKey,
}: {
  language: { name: Language; algorithms: Algorithm[] };
  languageKey: string;
}) {
  const t = useTranslation();

  return (
    <>
      <Head
        title={getLanguageName(language.name)}
        description={t("languageMetaDescription", { language: language.name })}
        tags={[language.name]}
      />
      <Section>
        <div className={classes.titleContainer}>
          <Typography variant="h4">
            <LanguageIcon language={language.name} className={classes.icon} />
            {getLanguageName(language.name)}
          </Typography>
          <div>
            <Button
              startIcon={<OpenInNew />}
              href={`https://github.com/TheAlgorithms/${language.name}`}
            >
              {t("githubRepository")}
            </Button>
            {["c", "c-plus-plus", "julia"].includes(
              language.name.toLowerCase()
            ) && (
                <Button
                  startIcon={<OpenInNew />}
                  href={`https://thealgorithms.github.io/${language.name
                    .replace(/^c$/, "C")
                    .replace(/^c-plus-plus$/, "C-Plus-Plus")
                    .replace(/^julia$/, "Julia/dev")}`}
                >
                  {t("documentationLanguage")}
                </Button>
              )}
          </div>
        </div>
        <AlgorithmsList
          algorithms={language.algorithms.map((algorithm) => ({
            ...algorithm,
            slug: `${algorithm.slug}?lang=${languageKey}`,
          }))}
        />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const language = await getLanguage(params.language.toString());
  if (!language) return { notFound: true };
  return {
    props: {
      language,
      languageKey: params.language.toString(),
      ...(await serverSideTranslations(locale, ["common", "categories"])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () =>
  shouldUseISR
    ? {
      paths: [],
      fallback: "blocking",
    }
    : {
      paths: getLanguages(),
      fallback: false,
    };
