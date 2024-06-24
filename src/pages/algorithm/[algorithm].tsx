import React from "react";
import { Typography, Breadcrumbs } from "@mui/material";
import Link from "src/components/link";
import type { Algorithm } from "src/lib/models";
import { getAlgorithm, getAlgorithmSlugs } from "src/lib/algorithms";
import { normalize } from "src/lib/normalize";
import CodePreview from "src/components/codePreview";
import Head from "src/components/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";
import Contributors from "src/components/contributors";
import EditPage from "src/components/editPage";
import { getLanguageName } from "src/lib/repositories";
import useTranslation from "src/hooks/translation";
import { shouldUseISR } from "src/lib/aws";
import classes from "./algorithm.module.css";

export default function AlgorithmPage({
  algorithm,
  locale,
}: {
  algorithm: Algorithm;
  locale: string;
}) {
  const t = useTranslation();

  return (
    // direction should stay ltr whatever the user-selected language is
    <div className="section container" style={{ direction: "ltr" }}>
      <Head
        title={algorithm.name}
        description={t(
          algorithm.body[locale] || algorithm.body.en
            ? "algorithmMetaDescriptionExplained"
            : "algorithmMetaDescription",
          {
            algorithm: algorithm.name,
            implementations: Object.keys(algorithm.implementations)
              .map((key) => getLanguageName(key))
              .join(", "),
          }
        )}
        tags={[
          algorithm.name,
          "Algorithm",
          ...(algorithm.body ? ["Explanation"] : []),
          ...Object.keys(algorithm.implementations).map((key) =>
            getLanguageName(key)
          ),
        ]}
      />
      <Breadcrumbs className={classes.categories}>
        {algorithm.categories.map((category) => (
          <Typography key={category} variant="h6">
            <Link href={`/category/${normalize(category)}`}>
              {t(`categories:${category}`)}
            </Link>
          </Typography>
        ))}
      </Breadcrumbs>
      <Typography variant="h4">{algorithm.name}</Typography>
      <Contributors algorithm={algorithm} />
      {algorithm.implementations &&
        Object.values(algorithm.implementations).length > 0 && (
          <CodePreview algorithm={algorithm} />
        )}
      {(algorithm.body[locale] || algorithm.body.en || algorithm.body.all) && (
        <>
          <Typography variant="h5">{t("aboutThisAlgorithm")}</Typography>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                (algorithm.body[locale] || algorithm.body.en || "") +
                (algorithm.body.all || ""),
            }}
          />
        </>
      )}
      <EditPage algorithm={algorithm} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const algorithm = await getAlgorithm(params.algorithm.toString());
  if (!algorithm) return { notFound: true };
  return {
    props: {
      algorithm,
      locale,
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
      paths: await getAlgorithmSlugs(),
      fallback: false,
    };
