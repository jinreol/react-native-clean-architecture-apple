import { CssProp } from "@presentation/navigation/types";
import { Button, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: CssProp) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <View style={{ height: 16 }} />
      <Button
        title="CSS #01 - Text Color"
        onPress={() => navigation.navigate("CSS01TextColor")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #02 - Height & Width"
        onPress={() => navigation.navigate("CSS02HeightWidth")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #03 - flex"
        onPress={() => navigation.navigate("CSS03Flex")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #04 - flexDirect"
        onPress={() => navigation.navigate("CSS04FlexDirection")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #05 - layoutDirection"
        onPress={() => navigation.navigate("CSS05LayoutDirection")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #06 - justifyContent"
        onPress={() => navigation.navigate("CSS06JustifyContent")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #07 - alignItems"
        onPress={() => navigation.navigate("CSS07AlignItems")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #08 - alignSelf"
        onPress={() => navigation.navigate("CSS08AlignSelf")}
      />
      <View style={{ height: 8 }} />
      <Button
        title="CSS #09 - alignContent"
        onPress={() => navigation.navigate("CSS09AlignContent")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
