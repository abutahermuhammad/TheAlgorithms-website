import React from "react";
import { Language } from "src/lib/repositories";
import clsx from "clsx";
import Image from "next/image";

function icon(name: string, version: string) {
  return (
    <Image
      src={`https://rawcdn.githack.com/devicons/devicon/develop/icons/${name}/${name}-${version}.svg`}
      width={16}
      height={16}
      alt={name}
    />
  );
}

export default function LanguageIcon({
  language,
  className = "",
  color = "original",
  ...rest
}: {
    language: string;
    className?: string;
    color?: "original" | "plain" | "original-wordmark";
    rest?: React.HTMLAttributes<HTMLDivElement>;
  }) {

  return (
    <div className={clsx("w-4 h-4", className)} {...rest}>
      {/* <span className="w-5 h-5 dark:grayscale dark:invert/50 dark:brightness-50 "> */}
        {(() => {
          switch (language.toLowerCase() as Language | string) {
            case "ruby":
              return icon("ruby", color);
            case "python":
              return icon("python", color);
            case "javascript":
              return icon("javascript", color);
            case "c-plus-plus":
              return icon("cplusplus", color);
            case "java":
              return icon("java", color);
            case "c":
              return icon("c", color);
            case "f-sharp":
              return icon("fsharp", color);
            case "go":
              return icon("go", color);
            case "rust":
              return icon("rust", "original");
            case "aarch64_assembly":
              return icon("aarch64", color);
            case "c-sharp":
              return icon("csharp", color);
            case "dart":
              return icon("dart", color);
            case "r":
              return icon("r", color);
            case "php":
              return icon("php", color);
            case "elixir":
              return icon("elixir", color);
            case "kotlin":
              return icon("kotlin", color);
            case "scala":
              return icon("scala", color);
            case "jupyter":
              return icon("jupyter", color);
            case "haskell":
              return icon("haskell", color);
            case "ocaml":
              return icon("ocaml", color);
            case "swift":
              return icon("swift", color);
            case "elm":
              return icon("elm", color);
            case "matlab-octave":
              return icon("matlab", color);
            case "julia":
              return icon("julia", color);
            case "lua":
              return icon("lua", color);
            case "typescript":
              return icon("typescript", color);
            case "zig":
              return icon("zig", color);
            case "nim":
              return icon("nim", color);
            default:
              throw new Error(`Missing icon for ${language}`);
          }
        })()}
    </div>
  );
}
