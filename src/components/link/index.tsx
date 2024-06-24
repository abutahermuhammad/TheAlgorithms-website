import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import React from "react";

export default function Link({ href, children, className = "", style = {} }: { href: string, children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <NextLink href={href} passHref>
      <MuiLink className={className} style={style}>
        {children}
      </MuiLink>
    </NextLink>
  );
}
