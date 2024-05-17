import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from "react-native";

import LangchainProcessor from "./utils/LangchainProcessor";

const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [messageList, setMessageList] = React.useState([
    {
      message: "Hi, I'm Martin IA !",
      type: "bot",
    },
  ]);

  const handleAddMessage = (message, type) => {
    setMessageList((prevState) => [
      ...prevState,
      { message: message, type: type },
    ]);
  };

  const sendMessage = async (text) => {
    // Use the processor to get a reply
    await LangchainProcessor(text, messageList, handleAddMessage);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddMessage(text, "user");
    onChangeText(""); // Réinitialiser le champ de texte après l'envoi
    const response = await sendMessage(text);
  };

  React.useEffect(() => {
    console.log("messageList", messageList);
  }, [messageList]);
  return (
    <SafeAreaView style={styles.page}>
      {messageList.map((message, index) => {
        console.log(index % 1);
        return (
          <Text
            key={index}
            style={message.type === "bot" ? styles.answer : styles.question}
          >
            {message.message}
            {"\n"}
            {"\n"}
          </Text>
        );
      })}
      <div style={styles.container}>
        <TextInput
          style={styles.input}
          id="textInputQuestion"
          onChangeText={onChangeText}
          placeholder={"write your prompt here..."}
        />
        <Button
          onPress={(e) => handleSubmit(e)}
          title="Send"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </div>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "60rem",
    padding: 10,
  },
  question: {
    width: "fit-content",
    position: "relative",
    alignSelf: "self-end",
    padding: 10,
    textAlign: "right",
    backgroundColor: "lightgrey",
    marginBottom: 10,
  },
  answer: {
    padding: 10,
    textAlign: "left",
    marginBottom: 10,
  },
  container: {
    margin: "auto",
    border: "solid",
    borderWidth: 1,
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "fit-content",
  },
  page: {
    margin: "auto",
    width: "70%",
  },
});

export default App;
