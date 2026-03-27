import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const repo = "initials-erm";

export default function nextConfig(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: "export",
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    ...(isDev
      ? {}
      : {
          basePath: `/${repo}`,
          assetPrefix: `/${repo}/`,
        }),
  };
}