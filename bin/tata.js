#!/usr/bin/env node
import { dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const supportedPlatform = "linux";
const supportedArch = "x64";

if (process.platform !== supportedPlatform || process.arch !== supportedArch) {
  console.error(
    `tata currently ships only a prebuilt ${supportedPlatform}/${supportedArch} binary.\n` +
      `Detected ${process.platform}/${process.arch}.\n` +
      "Please run Tata Coding Agent on a Linux x64 environment."
  );
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const binary = `${__dirname}/../dist/tata`;

const child = spawn(binary, process.argv.slice(2), {
  stdio: "inherit"
});

child.on("error", err => {
  if (err.code === "ENOEXEC") {
    console.error(
      "Failed to execute bundled binary: incompatible executable format for this system."
    );
  } else {
    console.error(`Failed to launch tata binary: ${err.message}`);
  }
  process.exit(1);
});

child.on("close", code => process.exit(code ?? 1));
