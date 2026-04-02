import { View, StyleSheet } from "react-native";

const PreviewLayoutChildView = () => {
  return (
    <>
      <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default PreviewLayoutChildView;
