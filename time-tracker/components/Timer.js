import React, { useState, useEffect, useRef } from "react";
import { unixToDateTime, clock } from "../helpers";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles, input, btn, text, swipeDrawer } from "../css";

const Timer = (props) => {
  const swiper = useRef(null);

  const [start, setStart] = useState(props.start);
  const [isActive, setIsActive] = useState(props.isActive);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [timeSince, setTimeSince] = useState(0);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setTimeSince(timeSince + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const startTimer = () => {
    setTimeSince(0);
    setIsActive(true);
    setStart(Date.now());
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resumeTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setTimeSince(0);
    setStart(0);
  };

  const edit = () => {
    setEditing(!editing);
    swiper.current.close();
  };

  const saveEdit = () => {
    setEditing(false);
  };

  const deleteTimer = () => {
    const newArr = props.timers.filter((timer) => timer.id !== props.id);
    props.setTimers(newArr);
  };

  const swipeRight = () => {
    return (
      <View style={[swipeDrawer.card, swipeDrawer.shadow]}>
        <TouchableOpacity style={[btn.full, btn.green, btn.btn]} onPress={edit}>
          <Text style={[text.white]}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[btn.full, btn.red, btn.btn]}
          onPress={deleteTimer}
        >
          <Text style={[text.white]}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={swipeRight} ref={swiper}>
      <View style={[styles.card, styles.shadow]}>
        <TextInput
          style={[
            input.input,
            input.radius,
            editing ? input.active : input.disabled,
          ]}
          onChangeText={setTitle}
          value={title}
          placeholder="Stopwatch Name"
          editable={editing}
        />
        <TextInput
          style={[
            input.input,
            input.radius,
            input.textArea,
            editing ? input.active : input.disabled,
          ]}
          onChangeText={setDescription}
          value={description}
          multiline={true}
          placeholder="Stopwatch Description"
          editable={editing}
        />
        <View style={btn.btnContainer}>
          {isActive && timeSince >= 0 && (
            <TouchableOpacity
              style={[btn.btn, btn.half, btn.red]}
              onPress={stopTimer}
            >
              <Text style={[text.text, text.white]}>Stop</Text>
            </TouchableOpacity>
          )}

          {!isActive && timeSince === 0 && (
            <TouchableOpacity
              style={[btn.btn, btn.half, btn.green]}
              onPress={startTimer}
            >
              <Text style={[text.text, text.white]}>Start</Text>
            </TouchableOpacity>
          )}

          {!isActive && timeSince > 0 && (
            <TouchableOpacity
              style={[btn.btn, btn.half, btn.green]}
              onPress={resumeTimer}
              // disabled={isActive}
            >
              <Text style={[text.text, text.white]}>resume</Text>
              {isActive && <View style={btn.disabled}></View>}
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[btn.btn, btn.half, btn.red]}
            onPress={resetTimer}
            disabled={isActive}
          >
            <Text style={[text.text, text.white]}>Reset</Text>
            {isActive && <View style={btn.disabled}></View>}
          </TouchableOpacity>
        </View>
        {start !== 0 && <Text>Created: {unixToDateTime(start)}</Text>}
        <Text>timer: {clock(timeSince)} seconds</Text>
        {editing && (
          <TouchableOpacity
            style={[btn.btn, btn.full, btn.green]}
            onPress={saveEdit}
          >
            <Text style={[text.text, text.white]}>Save</Text>
          </TouchableOpacity>
        )}
        <Text style={[text.small, text.corner]}>swipe left</Text>
      </View>
    </Swipeable>
  );
};

export default Timer;
