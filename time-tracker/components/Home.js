import React from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "../css";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <View style={{ height: 450, backgroundColor: "pink" }}>
        <ScrollView>
          <Text style={styles.header}>What happens if I change this?</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen