import { Button } from "@mui/material";
import { Add, Edit, Translate } from "@mui/icons-material";
import { Algorithm } from "src/lib/models";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useTranslation from "src/hooks/translation";
import AddExplanation from "./addExplanation";
import AddImplementation from "./addImplementation";
import AddTranslation from "./addTranslation";
import classes from "./style.module.css";
import NextLink from "next/link";

export default function EditPage({ algorithm }: { algorithm: Algorithm }) {
  const router = useRouter();
  const [addImplementationOpen, setAddImplementationOpen] = useState(false);
  const [addTranslationOpen, setAddTranslationOpen] = useState(false);
  const [addExplanationOpen, setAddExplanationOpen] = useState(false);
  const t = useTranslation();

  return (
    <div className={classes.container}>
      {algorithm.explanationUrl.en ? (
        <>
          {!algorithm.explanationUrl[router.locale] && (
            <>
              <Button
                startIcon={<Translate />}
                className={classes.button}
                onClick={() => setAddTranslationOpen(true)}
              >
                {t("editPageTranslate")}
              </Button>
              <AddTranslation
                algorithm={algorithm}
                open={addTranslationOpen}
                onClose={() => setAddTranslationOpen(false)}
              />
            </>
          )}
          <NextLink
            href={(
              algorithm.explanationUrl[router.locale] ||
              algorithm.explanationUrl.en
            )
              .replace("/blob/", "/edit/")
              .replace("/tree/", "/edit/")}
            passHref
          >
            <Button startIcon={<Edit />} className={classes.button}>
              {t("editPageEdit")}
            </Button>
          </NextLink>
        </>
      ) : (
        <>
          <Button
            startIcon={<Add />}
            className={classes.button}
            onClick={() => setAddExplanationOpen(true)}
          >
            {t("editPageAddExplanation")}
          </Button>
          <AddExplanation
            open={addExplanationOpen}
            onClose={() => setAddExplanationOpen(false)}
          />
        </>
      )}
      <Button
        startIcon={<Add />}
        className={classes.button}
        onClick={() => setAddImplementationOpen(true)}
      >
        {t("editPageAddImplementation")}
      </Button>
      <AddImplementation
        algorithm={algorithm}
        open={addImplementationOpen}
        onClose={() => setAddImplementationOpen(false)}
      />
    </div>
  );
}
