import hex2rgb from './convert/hex2rgb';
import hsl2rgb from './convert/hsl2rgb';
import hsl2string from './convert/hsl2string';
import rgb2hex from './convert/rgb2hex';
import rgb2hsl from './convert/rgb2hsl';
import rgb2string from './convert/rgb2string';

export default {
  hex: {
    rgb: hex2rgb,
  },
  hsl: {
    rgb: hsl2rgb,
    string: hsl2string,
  },
  rgb: {
    hex: rgb2hex,
    hsl: rgb2hsl,
    string: rgb2string,
  },
};
