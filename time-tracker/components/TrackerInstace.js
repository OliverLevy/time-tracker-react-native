import React, { useState, useRef } from "react";
import { clock } from "../helpers";
import { Text, View, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles, btn, text, swipeDrawer } from "../css";
import DateTimePicker from "@react-native-community/datetimepicker";

const TrackerInstance = ({ item, index, prevLog, setPrevLog }) => {
  const [startDateTime, setstartDateTime] = useState(new Date(item.start));
  const [endDateTime, setEndDateTime] = useState(new Date(item.end));

  const drawer = useRef(null);

  const edit = () => {};

  const deleteTimer = () => {
    const newArr = prevLog.filter((log, i) => i !== index);
    setPrevLog(newArr);
    drawer.current.close();
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
    <Swipeable renderRightActions={swipeRight} ref={drawer}>
      <View style={[styles.card, styles.shadow]}>
        <Text>
          <Text style={text.title}>start:</Text>{" "}
          {new Date(item.start).toLocaleString()}
        </Text>
        <Text>
          <Text style={text.title}>End:</Text>{" "}
          {new Date(item.end).toLocaleString()}
        </Text>
        <Text>
          <Text style={text.title}>Duration:</Text>{" "}
          {clock(item.duration / 1000)}
        </Text>
        <DateTimePicker value={startDateTime} mode="datetime" />
        <DateTimePicker value={endDateTime} mode="datetime" />
        <Text style={[text.small, text.corner]}>swipe left</Text>
      </View>
    </Swipeable>
  );
};

export default TrackerInstance;
