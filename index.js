import openai from './config/open-ai.js';
import readLineSync from 'readline-sync';
import colors from 'colors';




async function main() {

    console.log(colors.bold.green('Welcome to the Chatbot Programm!'));
    console.log(colors.bold.green('You can start chatting with the bot'));


    while (true) {
        const userInput = readLineSync.question(colors.yellow('You: '));

        try {
            // call the API with user input


            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: userInput
                    }
                ]
            });

            // displaying completion text/content
            const completionText = completion.data.choices[0].message.content;

            
            if (userInput.toLocaleLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }

            console.log(colors.green('Bot: ') + completionText);

        } 
        catch (error) {
            console.error(colors.red(error));
        }
    }


}

main();