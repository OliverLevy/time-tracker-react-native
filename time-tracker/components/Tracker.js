import React, { useState, useEffect } from "react";
import { clock } from "../helpers";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles, input, btn, text } from "../css";
import TrackerLogModal from "./TrackerLogModal";

const Tracker = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [start, setStart] = useState(props.start);
  const [prevLog, setPrevLog] = useState([]);
  const [isActive, setIsActive] = useState(props.isActive);
  const [timeSince, setTimeSince] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setTimeSince(timeSince + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const startNewLog = () => {
    setTimeSince(0);
    setIsActive(true);
    setStart(Date.now());
  };

  const stop = () => {
    const end = Date.now();
    const duration = end - start;

    const log = {
      start: start,
      end: end,
      duration: duration,
    };
    setPrevLog([...prevLog, log]);
    setIsActive(false);
  };

  const total = () => {
    let output = 0;
    prevLog.forEach((item) => {
      output += item.duration;
    });
    return output;
  };

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Swipeable>
      <View style={[styles.card, styles.shadow]}>
        <TextInput
          style={[input.input, input.radius, input.active]}
          value={title}
          onChange={setTitle}
          placeholder="Time Tracker Name"
        />
        <TextInput
          style={[input.input, input.radius, input.textArea, input.active]}
          value={description}
          onChange={setDescription}
          placeholder="Time Tracker Description"
        />
        <Text>{clock(timeSince)}</Text>
        <Text>
          <Text style={text.title}>Total:</Text> {clock(total() / 1000)}
        </Text>
        <View style={btn.btnContainer}>
          {isActive ? (
            <TouchableOpacity
              style={[btn.btn, btn.full, btn.red]}
              onPress={stop}
            >
              <Text style={[text.white]}>Stop</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[btn.btn, btn.full, btn.green]}
              onPress={startNewLog}
            >
              <Text style={[text.white]}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
        <TrackerLogModal prevLog={prevLog} total={clock(total() / 1000)} />
      </View>
    </Swipeable>
  );
};

export default Tracker;
