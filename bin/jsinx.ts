#!/usr/bin/env node

console.log("JSINX WORKS");

import { CliApplication } from "../src/CliApplication.js";

const app = new CliApplication();

await app.run(process.argv);