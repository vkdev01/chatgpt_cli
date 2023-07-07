import { Configuration, OpenAIApi } from 'openai';

import dotenv from 'dotenv';
dotenv.config();

// setting up configurations
const configuation = new Configuration({
    apiKey : process.env.OPENAI_API_KEY,
});

// creating instance of openai object with given configuration
const openai = new OpenAIApi(configuation);


export default openai;