import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Translate } from "@mui/icons-material";
import Translation from "src/components/translation";
import useTranslation from "src/hooks/translation";
import { Algorithm } from "src/lib/models";
import { useRouter } from "next/router";
import classes from "./style.module.css";

export default function AddTranslation({
  algorithm,
  open,
  onClose,
}: {
  algorithm: Algorithm;
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslation();
  const router = useRouter();

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className={classes.title}>
        <Translate className={classes.icon} /> {t("addTranslation")}
      </DialogTitle>
      <DialogContent>
        <Typography className={classes.paragraph}>
          <Translation
            name="addTranslationInfo"
            links={[
              "https://github.com/TheAlgorithms/Algorithms-Explanation",
              algorithm.explanationUrl.en,
            ]}
            variables={{
              ogFilename: algorithm.explanationUrl.en.split("/").pop(),
              locale: router.locale,
            }}
          />
        </Typography>
        <Typography className={classes.paragraph}>
          <Translation
            name="editPageHelp"
            links={["https://the-algorithms.com/discord/"]}
          />
        </Typography>
      </DialogContent>
    </Dialog>
  );
}