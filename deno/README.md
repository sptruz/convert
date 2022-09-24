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

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the @sptruz/convert.

## Basic usage

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const hex2rgb_RED = sptruzConvert.hex.rgb('#ff0000');
  console.log(hex2rgb_RED);

  // output: [255, 0, 0, 1]

  const rgb2string_RED = sptruzConvert.rgb.string(hex2rgb_RED);

  console.log(rgb2string_RED);

  // output: rgba(255,0,0,1)

  const hex2hsl_RED = sptruzConvert.rgb.hsl(sptruzConvert.hex.rgb('#ff0000'));

  console.log(hex2hsl_RED);

  // output: [0, 100, 50]

  const hsl2string_RED = sptruzConvert.hsl.string(hex2hsl_RED);

  console.log(hsl2string_RED);

  // output: hsl(0,100%,50%)
})();
```

## API

### hex

#### hex.rgb(hex)

Converts a hex color to rgb.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const hex2rgb_RED = sptruzConvert.hex.rgb('#ff0000');
  console.log(hex2rgb_RED);

  // output: [255, 0, 0, 1]
})();
```

### hsl

#### hsl.rgb(hsl)

Converts a hsl color to rgb.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const hsl2rgb_RED = sptruzConvert.hsl.rgb([0, 100, 50]);
  console.log(hsl2rgb_RED);

  // output: [255, 0, 0, 1]
})();
```

#### hsl.string(hsl)

Converts a hsl color to string.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const hsl2string_RED = sptruzConvert.hsl.string([0, 100, 50]);
  console.log(hsl2string_RED);

  // output: hsl(0,100%,50%)
})();
```

### rgb

#### rgb.hex(rgb)

Converts a rgb color to hex.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const rgb2hex_RED = sptruzConvert.rgb.hex([255, 0, 0, 1]);
  console.log(rgb2hex_RED);

  // output: #ff0000
})();
```

#### rgb.hsl(rgb)

Converts a rgb color to hsl.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const rgb2hsl_RED = sptruzConvert.rgb.hsl([255, 0, 0, 1]);
  console.log(rgb2hsl_RED);

  // output: [0, 100, 50]
})();
```

#### rgb.string(rgb)

Converts a rgb color to string.

```ts
import sptruzConvert from '@sptruz/convert';

(() => {
  const rgb2string_RED = sptruzConvert.rgb.string([255, 0, 0, 1]);
  console.log(rgb2string_RED);

  // output: rgba(255,0,0,1)
})();
```
