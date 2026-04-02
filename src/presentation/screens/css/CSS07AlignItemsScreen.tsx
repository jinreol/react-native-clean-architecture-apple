import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

const CSS07AlignItemsScreen = () => {
  const [alignItems, setAlignItems] = useState<
    "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
  >("stretch");
  return (
    <PreviewLayout
      label="alignItems"
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      selectedValue={alignItems}
      setSelectedValue={setAlignItems}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default CSS07AlignItemsScreen;
