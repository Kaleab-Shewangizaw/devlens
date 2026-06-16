#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

program
  .name("devlens")
  .description("AI-powered dev CLI tool")
  .version("1.0.0");

program
  .command("explain <file>")
  .description("Explain a file")
  .action((file) => {
    console.log(`Explaining file: ${file}`);
  });

program.parse();