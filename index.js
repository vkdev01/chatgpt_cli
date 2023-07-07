import { Configuration, OpenAIApi } from 'openai';

import dotenv from 'dotenv';
dotenv.config();

// setting up configurations
const configuation = new Configuration({
    apiKey : process.env.OPENAI_API_KEY,
});

// creating instance of openai object with given configuration
const openai = new OpenAIApi(configuation);



async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'What is Capital of India?'
            }
        ]
    });


    console.log(chatCompletion.data.choices[0].message.content);

}

main();