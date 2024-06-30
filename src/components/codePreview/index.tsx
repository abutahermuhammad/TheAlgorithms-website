import React, { useRef, useState } from "react";
import "highlight.js/styles/atom-one-light.css";
import { Algorithm } from "src/lib/models";
import {
  Button,
  Card,
  Dialog,
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Select,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useTranslation from "src/hooks/translation";
import { getLanguageName, Language } from "src/lib/repositories";
import LanguageIcon from "src/components/icon";
import {
  Close,
  Fullscreen,
  MoreHoriz,
  OpenInNew,
  PlayArrow,
} from "@mui/icons-material";
import NextLink from "next/link";
// import { StringParam, useQueryParam, withDefault } from "next-query-params";
import classes from "./style.module.css";
import { StringParam, useQueryParam, withDefault } from "use-query-params";

export default function CodePreview({ algorithm }: { algorithm: Algorithm }) {
  const { implementations } = algorithm;
  const [selectedLanguage, setSelectedLanguage] = useQueryParam(
    "lang",
    withDefault(StringParam, Object.keys(implementations)[0])
  );
  const t = useTranslation();
  const mobile = useMediaQuery("(max-width: 800px)");
  const [fullScreen, setFullScreen] = useState(false);
  const theme = useTheme();
  const fabRef = useRef();
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);

  return (
    <div className={`${classes.container}`}>
      <div className={classes.codeBox}>
        <div className={classes.code}>
          <pre
            className={classes.pre}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: implementations[selectedLanguage].code,
            }}
          />
        </div>
        {mobile ? (
          <>
            <Fab
              className={classes.fab}
              color="primary"
              ref={fabRef}
              onClick={() => setMobileMoreMenuOpen(true)}
            >
              <MoreHoriz />
            </Fab>
            <Menu
              anchorEl={fabRef.current}
              open={mobileMoreMenuOpen}
              onClose={() => setMobileMoreMenuOpen(false)}
              className={classes.mobileMenu}
            >
              <NextLink
                href={`/playground?algorithm=${algorithm.slug}&language=${selectedLanguage}`}
                passHref
              >
                <MenuItem>
                  <PlayArrow />
                  <Typography>{t("playgroundTryCode")}</Typography>
                </MenuItem>
              </NextLink>
              <MenuItem onClick={() => setFullScreen(true)}>
                <Fullscreen />
                <Typography>{t("fullscreen")}</Typography>
              </MenuItem>
              <Link
                href={implementations[selectedLanguage].url}
                target="_blank"
                rel="noreferrer"
              >
                <MenuItem>
                  <OpenInNew />
                  <Typography>{t("viewOnGithub")}</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </>
        ) : (
          <>
            <div className={classes.buttonsTop}>
              <Button
                startIcon={<OpenInNew />}
                href={implementations[selectedLanguage].url}
                target="_blank"
                rel="noreferrer"
              >
                {t("viewOnGithub")}
              </Button>
              <IconButton
                className={classes.fullscreen}
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                }}
                onClick={() => setFullScreen(true)}
              >
                <Fullscreen />
              </IconButton>
            </div>
            <div className={classes.buttonsBottom}>
              <NextLink
                href={`/playground?algorithm=${algorithm.slug}&language=${selectedLanguage}`}
                passHref
              >
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.tryCode}
                  startIcon={<PlayArrow />}
                >
                  {t("playgroundTryCode")}
                </Button>
              </NextLink>
            </div>
          </>
        )}
      </div>

      {mobile ? (
        <FormControl className={classes.mobileImplementations}>
          <InputLabel>Implementation in</InputLabel>
          <Select value={selectedLanguage}>
            {Object.keys(implementations).map((language) => (
              <MenuItem
                value={language}
                onClick={() => setSelectedLanguage(language)}
                key={language}
              >
                <div className={classes.item}>
                  <LanguageIcon language={language} />
                  <Typography>{getLanguageName(language)}</Typography>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <div className={classes.implementations}>
          {Object.keys(implementations).map((language: Language) => (
            <Tooltip
              key={language}
              title={t("langImplementation", {
                language: getLanguageName(language),
              })}
            >
              <Card
                className={
                  language === selectedLanguage
                    ? `${classes.card} ${classes.current}`
                    : classes.card
                }
              >
                <IconButton
                  className={classes.implementation}
                  onClick={() => {
                    if (language !== "jupyter") {
                      setSelectedLanguage(language);
                    }
                  }}
                  href={
                    language === "jupyter"
                      ? implementations[language].url
                      : undefined
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("langImplementation", {
                    language: getLanguageName(language),
                  })}
                >
                  <LanguageIcon language={language} />
                </IconButton>
              </Card>
            </Tooltip>
          ))}
        </div>
      )}

      <Dialog
        fullScreen
        open={fullScreen}
        onClose={() => setFullScreen(false)}
        className={classes.dialog}
      >
        <div className={classes.codeBoxFullscreen}>
          <div className={classes.code}>
            <pre
              className={classes.pre}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: implementations[selectedLanguage].code,
              }}
            />
          </div>
          <div className={classes.buttonsTop}>
            <Button
              startIcon={<OpenInNew />}
              href={implementations[selectedLanguage].url}
              target="_blank"
              rel="noreferrer"
            >
              {t("viewOnGithub")}
            </Button>
            <IconButton
              className={classes.fullscreen}
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
              }}
              onClick={() => setFullScreen(false)}
            >
              <Close />
            </IconButton>
          </div>
          {!mobile && (
            <div className={classes.buttonsBottom}>
              {selectedLanguage === "python" && (
                <NextLink
                  href={`/playground?algorithm=${algorithm.slug}&language=python`}
                  passHref
                >
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.tryCode}
                    startIcon={<PlayArrow />}
                  >
                    {t("playgroundTryCode")}
                  </Button>
                </NextLink>
              )}
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}