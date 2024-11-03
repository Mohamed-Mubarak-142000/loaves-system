import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function rgbaStringToHex(rgbaString: string) {
  // Extract RGB and alpha values from the string using a regular expression
  const match = rgbaString.match(
    /(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*\)/
  );

  if (!match) {
    return null;
  }

  const r = parseFloat(match[1]);
  const g = parseFloat(match[3]);
  const b = parseFloat(match[5]);
  const a = parseFloat(match[7]);

  // Convert RGB to hexadecimal
  const hex = (
    (1 << 24) +
    (Math.round(r) << 16) +
    (Math.round(g) << 8) +
    Math.round(b)
  )
    .toString(16)
    .slice(1);

  // If alpha is not 1, include it in the hex representation
  const alphaHex = Math.round(a * 255)
    .toString(16)
    .toUpperCase();
  const hexColor = alphaHex === "FF" ? hex : hex + alphaHex;

  return `#${hexColor}`;
}
