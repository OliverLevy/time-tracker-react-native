import { StyleSheet } from "react-native";

export const input = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  textArea: {
    height: 80,
  },
  radius: {
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: "#fcfcfc",
  },
  active: {
    backgroundColor: "#ebebeb",
  },
});

export const text = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: -2,
    textAlign: "center",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  white: {
    color: "white",
  },
});

export const swipeDrawer = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  shadow: {
    margin: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 5,
  },
});

export const btn = StyleSheet.create({
  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    position: "relative",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 5,
  },
  blue: {
    backgroundColor: "#007AFF",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    // backgroundColor: "#6be86b",
    backgroundColor: "green",
  },
  half: {
    width: "49%",
  },
  full: {
    width: "100%",
  },
  disabled: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },

  shadow: {
    margin: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 5,
  },
});
