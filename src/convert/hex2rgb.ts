import { HEX_REGEX } from '../constants/pattern.regex';

const hex2rgb = (hex: string) => {
  const hexMatch = HEX_REGEX.exec(hex);
  if (!hexMatch) {
    throw new TypeError(`Input should be a valid HEX color: ${hex}`);
  }

  hex = hex.replace(/^#/, '');

  let alpha = 1;

  if (hex.length === 8) {
    alpha = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alpha = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const number = Number.parseInt(hex, 16);
  const r = number >> 16;
  const g = (number >> 8) & 255;
  const b = number & 255;
  const a = alpha;

  return [r, g, b, a];
};

export default hex2rgb;
