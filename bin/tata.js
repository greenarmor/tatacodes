#!/usr/bin/env node
import { dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const binary = `${__dirname}/../dist/tata`;

const child = spawn(binary, process.argv.slice(2), {
  stdio: "inherit"
});

child.on("close", code => process.exit(code));
