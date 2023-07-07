import openai from './config/open-ai.js';
import readLineSync from 'readline-sync';
import colors from 'colors';




async function main() {

    console.log(colors.bold.green('Welcome to the Chatbot Programm!'));
    console.log(colors.bold.green('You can start chatting with the bot'));

    // storing conversation history
    const chatHistory = [];

    while (true) {
        const userInput = readLineSync.question(colors.yellow('You: '));

        try {
            // Contructing messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({role, content}));

            console.log(messages);
            // add latest user input
            messages.push({role: 'user', content: userInput});


            // call the API with user input
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: messages
            });

            // displaying completion text/content
            const completionText = completion.data.choices[0].message.content;

            
            if (userInput.toLocaleLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }

            console.log(colors.green('Bot: ') + completionText);


            // Updating chat history with input and response

            chatHistory.push(['user', userInput]);
            chatHistory.push(['assistant', completionText]);

        } 
        catch (error) {
            console.error(colors.red(error));
        }
    }


}

main();