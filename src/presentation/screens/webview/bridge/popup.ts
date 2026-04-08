import { BridgeMessage } from "@presentation/screens/webview/bridge/bridgeMessage";
import { Alert } from "react-native";

const popupResponse = (data: BridgeMessage) => {
  if (data.method == "confirm") {
    Alert.alert("웹 응답 수신", `ID: ${data.id}\n결과: ${data.result}`);
  }
};

export default popupResponse;
