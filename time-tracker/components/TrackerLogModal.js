import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";
import { styles, btn, text } from "../css";
import TrackerInstance from "./TrackerInstace";

const TrackerLogModal = ({ prevLog, total }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <TouchableOpacity
        style={[btn.btn, btn.full, btn.green]}
        onPress={handleModal}
      >
        <Text style={[text.white]}>View Logs</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalIsOpen}>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <Text style={text.header}>Logs</Text>
            <Text>
              <Text style={text.title}>Total:</Text> {total}
            </Text>
            <View style={{ position: "absolute", top: 20, left: 10 }}>
              <Button onPress={handleModal} title="Close" />
            </View>
          </View>
          <ScrollView>
            <View>
              <View>
                {prevLog.map((item, i) => {
                  return <TrackerInstance item={item} i={i} key={i} />;
                })}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default TrackerLogModal;
