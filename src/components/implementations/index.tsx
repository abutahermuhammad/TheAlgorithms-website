"use client";
import { useMediaQuery } from "@mui/material";
import { Implementation } from "src/lib/models";
import { Language, getLanguageName } from "src/lib/repositories";
import LanguageIcon from "src/components/icon";

export default function Implementations({
  implementations,
}: {
  implementations: { [key in Language]?: Implementation };
}) {
  const smallWidth = useMediaQuery(
    "((max-width: 1200px) and (min-width: 700px)) or (max-width: 400px)"
  );
  const numIcons = smallWidth ? 4 : 6;

  return (
    <div className="flex justify-end">
      {Object.keys(implementations)
        .slice(0, numIcons)
        .map((language: Language | string) => (
          <div key={language} className="me-2.5">
            <LanguageIcon
              language={language}
              // @ts-ignore
              title={getLanguageName(language)}
            />
          </div>
        ))
      }

      {Object.keys(implementations).length > numIcons && (
        <p className="text-xs flex items-center">
            +{Object.keys(implementations).length - numIcons}
        </p>
      )}
    </div>
  );
}
