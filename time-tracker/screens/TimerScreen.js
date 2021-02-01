import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, View, Text } from "react-native";
import { Timer, NewTimer } from "../components";
import { styles } from "../css";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

const TimerScreen = () => {
  const [timers, setTimers] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <Timer
        id={item.id}
        title={item.title}
        description={item.description}
        start={item.start}
        isActive={item.isActive}
        timers={timers}
        setTimers={(e) => setTimers(e)}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareFlatList
        ListHeaderComponent={<NewTimer setTimers={(e) => setTimers(e)} />}
        ListHeaderComponentStyle={styles.inner}
        data={timers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    </TouchableWithoutFeedback>
  );
};

export default TimerScreen;
