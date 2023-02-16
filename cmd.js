const { Command } = require("commander");

const program = new Command();

program
  .name("navi")
  .description(
    "An AI-powered tool to help parse dense JS files for secrets, sinks, and other interesting bits and understand the functions that implement them."
  )
  .requiredOption(
    "-u, --url <target>",
    "target URL containing source JS or HTML, example: https://hax.com/main.js"
  )
  .option(
    "-l, --list <keyword_list>",
    "file containing keywords to search for",
    "./lists/javascript.txt"
  )
  .option("-r, --regex <pattern>", "regex pattern to search for")
  .option("-s, --shush", "ignore navi")
  .option(
    "-e, --elaborate",
    "Describe the entire function where a keyword is found (default is to just describe the line)"
  );

module.exports = { program };
