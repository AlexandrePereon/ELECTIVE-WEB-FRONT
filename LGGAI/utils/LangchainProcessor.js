import { ChatOllama } from "langchain/chat_models/ollama"; // Update the import path for ChatOllama
import { HumanMessage, SystemMessage } from "langchain/schema";

// This component is responsible for processing new messages from the user and getting a reply from Ollama
const LangchainProcessor = async (
  newMessage,
  oldMessages,
  handleAddMessage
) => {
  // The default prompt template is
  const promptTemplate = `
    Only give an answer in the language of the question and with informations contained in this text  and give the line of your source in the text : {question}
    `;

  const prompt = promptTemplate.replace("{question}", newMessage);

  const chat = new ChatOllama({
    temperature: 0,
    model: "llama2", // Update the model to match Ollama's format if necessary
  });

  try {
    // Recreate the formatted messages array with the previous messages every time a new message comes in from the user
    const formattedMessages = oldMessages.map((msg) => {
      if (msg.type === "bot") {
        return new SystemMessage(msg.message);
      } else {
        return new HumanMessage(msg.message);
      }
    });

    // Add the new human message to the list with the prompt template
    formattedMessages.push(new HumanMessage(prompt));

    // Call Ollama to get a reply
    const result = await chat.predictMessages(formattedMessages);

    // Extract the content from the AIMessage
    const botResponseContent = result.content;
    handleAddMessage(botResponseContent, "bot");
    console.log(botResponseContent);
    // Return the response
    return botResponseContent;
  } catch (error) {
    console.error("Error processing message with Ollama:", error);
    return "Sorry, I faced an error processing your message.";
  }
};

export default LangchainProcessor;
