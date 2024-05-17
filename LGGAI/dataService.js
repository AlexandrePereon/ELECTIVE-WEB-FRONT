import text from "./assets/Script.txt";

export const streamData = async (message, setMessageStream, onStreamEnd) => {
  const prompt = `Only give an answer in the language of the question and with informations contained in this text ${text} and give the line of your source in the text : ${message}`;
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        prompt: prompt,
        stream: true,
      }),
    });
    if (response.body != null) {
      const reader = response.body.getReader();
      let { done, value } = await reader.read();
      const decoder = new TextDecoder();
      let completeResponse = "";
      while (!done) {
        const chunk = decoder.decode(value, { stream: true });
        const chunkResponse = JSON.parse(chunk).response;
        completeResponse += chunkResponse;
        setMessageStream((prev) => prev + chunkResponse);
        ({ done, value } = await reader.read());
      }
      onStreamEnd(completeResponse);
    }
  } catch (error) {
    console.error("Erreur lors de la requête:", error);
  }
};
