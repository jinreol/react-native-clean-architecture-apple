import { View, Text } from "react-native";

const CSS01TextColorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWieght: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
};

export default CSS01TextColorScreen;
