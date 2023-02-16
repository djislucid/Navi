const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// config
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Write function to fetch a URL and return the file contents (like a js or html uri)
// additionally, I would add the code which essentially greps for the keywords I want to search the JS file using a wordlist of keywords
// Then write the code to pass the contents as a prompt to davinci and use the 'completions' method
// Then figure out how you want to display this
openai.listModels()
	.then((models) => {
		const modelTypes = models.data;
		modelTypes.data.map((model) => {
			console.log(model.id, /*model.permission*/);
		});
	})
	.catch((e) => console.log(e));
