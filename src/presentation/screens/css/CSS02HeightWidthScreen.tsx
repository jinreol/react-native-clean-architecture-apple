import { View } from "react-native";

const CSS02HeightWidthScreen = () => {
  return (
    <View>
      <View style={styles.size50}></View>
      <View style={styles.size100}></View>
      <View style={styles.size150}></View>
    </View>
  );
};

const styles = {
  size50: {
    width: 50,
    height: 50,
    backgroundColor: "powderblue",
  },
  size100: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
  },
  size150: {
    width: 150,
    height: 150,
    backgroundColor: "steelblue",
  },
};

export default CSS02HeightWidthScreen;
