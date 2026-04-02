import React from "react";
import { StyleSheet, View } from "react-native";

const CSS03FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed} />
      <View style={styles.boxDarkOrange} />
      <View style={styles.boxGreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxRed: {
    flex: 1,
    backgroundColor: "red",
  },
  boxDarkOrange: {
    flex: 2,
    backgroundColor: "darkorange",
  },
  boxGreen: {
    flex: 3,
    backgroundColor: "green",
  },
});

export default CSS03FlexScreen;
