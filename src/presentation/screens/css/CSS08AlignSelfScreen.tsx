import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import { useState } from "react";
import { View, StyleSheet, FlexAlignType } from "react-native";

const CSS08AlignSelfScreen = () => {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>("stretch");

  return (
    <PreviewLayout<FlexAlignType>
      label="alignSelf"
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      selectedValue={alignSelf}
      setSelectedValue={setAlignSelf}
    >
      <View
        style={[
          styles.box,
          {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default CSS08AlignSelfScreen;
