<div align="center">
  <img src="https://raw.githubusercontent.com/sptruz/convert/main/assets/logo.svg" alt="@MKAbuMattar/sptruz"
   width="400" height="200"
  />

  <h1>@sptruz/convert</h1>

<a href="https://sptruz.vercel.app/">https://sptruz.vercel.app/</a>

  <p>@sptruz/convert is a package for a color conversion.</p>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save @sptruz/convert

#yarn
yarn add @sptruz/convert

#pnpm
pnpm add @sptruz/convert
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access @sptruz/convert on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import * as sptruzConvert from 'https://deno.land/x/sptruz_convert@0.0.0-beta.0.0.2/mod.ts';
```

or letest version:

```ts
import * as sptruzConvert from 'https://deno.land/x/sptruz_convert/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sptruz/convert/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/@sptruz/convert/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the @sptruz/convert.

## Basic usage

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  // HEX color

  // convert hex to rgb
  console.log(sptruzConvert.hex.rgb('#ff0000'));
  // output: [255, 0, 0, 1]

  /* ***************** */

  // HSL color

  // convert hsl to rgb
  console.log(sptruzConvert.hsl.rgb([0, 100, 50]));
  // output: [255, 0, 0]

  // convert hsl to string
  console.log(sptruzConvert.hsl.string([0, 100, 50]));
  // output: 'hsl(0, 100%, 50%)'

  /* ***************** */

  // RGB color

  // convert rgb to hex
  console.log(sptruzConvert.rgb.hex([255, 0, 0]));
  // output: '#ff0000'

  // convert rgb to hsl
  console.log(sptruzConvert.rgb.hsl([255, 0, 0]));
  // output: [0, 100, 50]

  // convert rgb to string
  console.log(sptruzConvert.rgb.string([255, 0, 0]));
  // output: 'rgb(255, 0, 0)'
})();
```

## Supports

- HEX | example: #ff0000
  - RGB
- HSL | example: [0, 100, 50]
  - RGB
  - String
- RGB | example: [255, 0, 0]
  - HEX
  - HSL
  - String

## License

@sptruz/convert is licensed under the [MIT License](https://raw.githubusercontent.com/sptruz/convert/main/LICENSE).

Created with ♥ by [@MKAbuMattar](https://github.com/MKAbuMattar).
