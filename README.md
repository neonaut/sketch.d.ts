# TypeScript definitions for Sketch JavaScript API

## Installation

Install and save to devDependencies:

```sh
npm install --save-dev @types/sketch@npm:@chpio/sketch
```

It's necessary to config TypeScript (use tsconfig.json) to use `es6` lib, since:

- "Sketch runs JavaScript code in JavaScriptCore, with full ES6 support"
  ([Here](https://developer.sketch.com/plugins/javascript-environment)).

```json
{
    "compilerOptions": {
        "lib": [
            "es6"
        ]
    }
}
```

## Summary
This package contains type definitions for [Sketch JavaScript API](https://developer.sketch.com/reference/api).

## Examples

```ts
import sketch from "sketch";

// `document` has the type `undefined | Document`
const document = sketch.getSelectedDocument();

// `page` has the type `Page`
const page = document.selectedPage;
```
