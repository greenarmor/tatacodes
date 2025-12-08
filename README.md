# Tata Coding Agent 0.0.1

Tata Coding Agent is a rebranded distribution of the Codex TUI command-line interface design for Neovim usability. This repository packages the prebuilt `dist/tata` binary alongside a lightweight Node.js launcher (`bin/tata.js`) so you can install the tool globally through modern JavaScript package managers.

## Global installation from a local checkout

1. Clone the repository:
   ```bash
   git clone https://github.com/greenarmor/tatacodes.git
   cd tatacodes
   ```
2. Install globally with your preferred package manager:
   ```bash
   npm install -g ./tatacodes
   # or
   pnpm add -g ./tatacodes
   ```
3. Confirm the CLI is on your PATH (the command is exported as `tata`, matching the `package.json` `bin` field):
   ```bash
   tata --version
   ```
## Install from npm Package Manager site

```bash
npm install -g @greenarmor/tatacodes

pnpm install -g @greenarmor/tatacodes
```

After installation, run `tata --help` to access the Tata Coding Agent 0.0.1
