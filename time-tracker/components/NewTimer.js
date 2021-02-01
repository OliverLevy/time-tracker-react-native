import React, { useState, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles, input, btn, text } from "../css";

const NewTimer = ({ setTimers }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const startTimer = () => {
    const output = {
      start: Date.now(),
      title: title,
      description: description,
      id: Date.now(),
      isActive: true,
    };
    setTimers((item) => [...item, output]);
    titleInput.current.clear();
    descriptionInput.current.clear();
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Text style={text.header}>Stopwatch</Text>
      <TextInput
        style={[input.input, input.radius, input.active]}
        onChangeText={setTitle}
        placeholder="Stopwatch Name"
        ref={titleInput}
      />
      <TextInput
        style={[input.input, input.radius, input.textArea, input.active]}
        onChangeText={setDescription}
        multiline={true}
        placeholder="Stopwatch Description"
        ref={descriptionInput}
      />
      <View style={btn.container}>
        <TouchableOpacity
          style={[btn.btn, btn.full, btn.green]}
          onPress={startTimer}
        >
          <Text style={[text.text, text.white]}>Start New Stopwatch</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewTimer;
