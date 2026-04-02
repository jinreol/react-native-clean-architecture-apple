import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

const CSS09AlignContentScreen = () => {
  const [alignContent, setAlignContent] = useState<string>("flex-start");

  return (
    <PreviewLayout
      label="alignContent"
      values={[
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
      ]}
      selectedValue={alignContent}
      setSelectedValue={setAlignContent}
    >
      <View style={[styles.box, { backgroundColor: "orangered" }]} />
      <View style={[styles.box, { backgroundColor: "orange" }]} />
      <View style={[styles.box, { backgroundColor: "mediumseagreen" }]} />
      <View style={[styles.box, { backgroundColor: "deepskyblue" }]} />
      <View style={[styles.box, { backgroundColor: "mediumturquoise" }]} />
      <View style={[styles.box, { backgroundColor: "mediumslateblue" }]} />
      <View style={[styles.box, { backgroundColor: "purple" }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 100,
  },
});

export default CSS09AlignContentScreen;
