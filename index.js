const { Configuration, OpenAIApi } = require("openai");
const { program } = require("./cmd");
const axios = require("axios");
require("dotenv").config();

// openai config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// default config file
let configDir;
if (process.env.NAVI_CONFIG) {
  configDir = process.env.NAVI_CONFIG;
} else {
  configDir = `${process.env.HOME}/.config/navi/config.json`;
}

// begin program
program.parse(process.argv);
const options = program.opts();

// scrape the target URL
axios
  .get(options.url)
  .then((response) => {
    // searchForKeywords here
    console.log(response.data);
  })
  .catch((e) => console.error(e));

const searchForKeywords = (data) => {
  // grep the source for the keywords from a wordlist
  // for each keyword, print the finding in the style of grep -n -C 2 (context and line number)
  // if -e or --elaborate option is specified, print the entire function where the keyword was found
  // this function would simply return the lines, another function will invoke navi
};

const naviLook = (source) => {
  // if the -e or --elaborate option was specified navi would describe the entire function instead of just -C 2
  // if --shush is specified, navi keeps quiet
  // we would use the data from searchForKeywords (source) as a prompt to davinci
  // this function would ask davinci for a description of (source)
};

/*
openai
  .listModels()
  .then((models) => {
    const modelTypes = models.data;
    modelTypes.data.map((model) => {
      console.log(model.id model.permission);
    });
  })
  .catch((e) => console.log(e));
*/
