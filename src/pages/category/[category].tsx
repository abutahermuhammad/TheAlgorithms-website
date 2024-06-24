import React from "react";
import AlgorithmsList from "src/components/algorithmsList";
import { getCategories, getCategory } from "src/lib/categories";
import Section from "src/components/section";
import Head from "src/components/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";
import useTranslation from "src/hooks/translation";
import { shouldUseISR } from "src/lib/aws";

export default function Category({ category }) {
  const t = useTranslation();

  return (
    <>
      <Head title={t(`categories:${category.name}`)} />
      <Section title={t(`categories:${category.name}`)}>
        <AlgorithmsList algorithms={category.algorithms} />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const category = await getCategory(params.category.toString());
  if (!category) return { notFound: true };
  return {
    props: {
      category,
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
      paths: await getCategories(),
      fallback: false,
    };
