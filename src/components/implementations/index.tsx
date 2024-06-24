import { Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Implementation } from "src/lib/models";
import { Language, getLanguageName } from "src/lib/repositories";
import LanguageIcon from "src/components/icon";
import Translation from "src/components/translation";
import useTranslation from "src/hooks/translation";
import classes from "./style.module.css";

export default function Implementations({
  implementations,
}: {
  implementations: { [key in Language]?: Implementation };
}) {
  const smallWidth = useMediaQuery(
    "((max-width: 1200px) and (min-width: 700px)) or (max-width: 400px)"
  );
  const numIcons = smallWidth ? 4 : 6;
  const t = useTranslation();

  return (
    <div className={classes.rootSmall}>
      {Object.keys(implementations)
        .slice(0, numIcons)
        .map((language: Language) => (
          <div key={language} className={classes.icon}>
            <LanguageIcon
              language={language}
              tooltip={
                <Translation
                  name="langImplementation"
                  variables={{ language: getLanguageName(language) }}
                />
              }
            />
          </div>
        ))}
      {Object.keys(implementations).length > numIcons && (
        <Tooltip
          title={t("languages_count").replace(
            "{}",
            (Object.keys(implementations).length - numIcons).toString()
          )}
        >
          <Typography color="textSecondary" className={classes.more}>
            +{Object.keys(implementations).length - numIcons}
          </Typography>
        </Tooltip>
      )}
    </div>
  );
}
