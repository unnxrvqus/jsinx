#!/usr/bin/env node

import { CliApplication } from "../src/CliApplication.js";

const app = new CliApplication();

await app.run(process.argv);