# TypeScript definitions for Sketch JavaScript API

## Installation

Install and save to devDependencies:

```sh
npm install --save-dev @types/sketch@npm:@chpio/sketch
```

It's necessary to config TypeScript (use tsconfig.json) to use `es6` lib only, since:

- "Sketch runs JavaScript code in JavaScriptCore, with full ES6 support"
  ([Here](https://developer.sketch.com/plugins/javascript-environment)).
- Otherwise, TypeScript will introduce libs like `DOM`, which leads to duplicated definition to
  `Document` etc., and other unexpected behaviours.

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
// Import all
import sketch from "sketch";

// Or, import just the required modules according to your needs:
import dom from "sketch/dom";
import async from "sketch/async";
import dataSupplier from "sketch/data-supplier";
import ui from "sketch/ui";
import settings from "sketch/settings";

// `document` has the type `undefined | Document`
const document = sketch.getSelectedDocument();

// `page` has the type `Page`
const page = document.selectedPage;
```
