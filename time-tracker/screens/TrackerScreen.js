import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, View, Text } from "react-native";
import { Tracker, NewTracker } from "../components";
import { styles } from "../css";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";


const TrackerScreen = () => {
  const [trackers, setTrackers] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <Tracker
        id={item.id}
        title={item.title}
        description={item.description}
        start={item.start}
        isActive={item.isActive}
        trackers={trackers}
        setTrackers={(e) => setTrackers(e)}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareFlatList
        ListHeaderComponent={<NewTracker setTrackers={(e) => setTrackers(e)} />}
        ListHeaderComponentStyle={styles.inner}
        data={trackers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrackerScreen;
