# @parasrp/delay

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm version](https://img.shields.io/npm/v/@parasrp/delay)
![npm downloads](https://img.shields.io/npm/dw/@parasrp/delay)
![install size](https://packagephobia.com/badge?p=@parasrp/delay)
![bundle size](https://img.shields.io/bundlephobia/min/@parasrp/delay)

A lightweight, promise-based JavaScript utility to pause execution for a specified duration. Perfect for adding timeouts, staggering API calls, or building simple animations.

---
## ✨ Features

- 🪶 **Lightweight & Fast**: Zero overhead, minimal footprint.
- 🤝 **Promise-based**: Works seamlessly with `async/await`.
- 📦 **Zero Dependencies**: Keeps your node_modules clean.
- 🌍 **Universal**: Works in Node.js, browsers, and modern JS environments.
- ⏱️ **Flexible Units**: Supports `milliseconds`, `seconds`, `minutes`, and `hours`.

---
## 📦 Installation

Install the package via npm:
```bash
npm install @parasrp/delay
```

Install the package via yarn:
```bash
yarn add @parasrp/delay
```

---
## ✨ Features
You can use @parasrp/delay with both CommonJS and ES Modules.

ES6 Modules:
```js
import delay from "@parasrp/delay";
```

CommonJS:
```js
const delay = require("@parasrp/delay");
```

---
## 📖 API

```js
/**
    * Sleep (pause execution) for a given time with unit
    * @param {number} value - The amount of time to wait
    * @param {'milliseconds'|'seconds'|'minutes'|'hours'} [unit='milliseconds'] - The unit of time (default is milliseconds)
    * @returns {Promise<void>} - A Promise that resolves after the specified delay
**/
await delay(value, unit?);
```

---
## Examples

Using async/await:
```js
async function demo() {
  console.log("Waiting 2 seconds...");
  await delay(2, "seconds"); // waits 2000 ms
  console.log("Done!");

  console.log("Waiting 1 minute...");
  await delay(1, "minutes"); // waits 60000 ms
  console.log("Finished!");
}

demo();
```

Using .then():
```js
console.log("Start waiting...");

delay(1000).then(() => {
  console.log("Finished waiting 1000 milliseconds");
});

delay(0.5, "hours").then(() => {
  console.log("Finished waiting 30 minutes");
});

```

---
## 👤 Author
**Paras R Poshiya**
* [GitHub](https://github.com/parasposhiya)
* [GitLab](https://gitlab.com/parasposhiya)
