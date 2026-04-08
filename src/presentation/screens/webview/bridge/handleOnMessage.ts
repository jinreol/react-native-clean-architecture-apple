import authRequest from "@presentation/screens/webview/bridge/auth";
import { BridgeMessage } from "@presentation/screens/webview/bridge/bridgeMessage";
import getJsCode from "@presentation/screens/webview/bridge/getJsCode";
import popupResponse from "@presentation/screens/webview/bridge/popup";
import { Alert } from "react-native";
import { WebViewMessageEvent } from "react-native-webview";

export function handleOnMessage(event: WebViewMessageEvent) {
  try {
    const data: BridgeMessage = JSON.parse(event.nativeEvent.data);
    console.log("Web으로부터 받은 데이터:", data);
    if (data.cmd === "request") {
      const message = handleWebRequest(data);
      return getJsCode(message);
    } else if (data.cmd === "response") {
      handleWebResponse(data);
      return undefined;
    } else {
      return undefined;
    }
  } catch (e) {
    console.error("메시지 파싱 에러: ", e);
  }
}

// interface HandleOnMessageProps {
//   webViewRef: React.Ref<WebView<{}>>;
//   event: WebViewMessageEvent;
// }

// bridge 메시지 처리
//export const handleOnMessage2 = ({
//   webViewRef,
//   event,
// }: HandleOnMessageProps) => {
//   try {
//     const data: BridgeMessage = JSON.parse(event.nativeEvent.data);
//     console.log("Web으로부터 받은 데이터:", data);

//     switch (data.cmd) {
//       case "request": // web -> react native
//         handleWebRequest(data);
//         break;
//       case "response": // react native -> web
//         handeWebResponse(data);
//         break;
//     }
//   } catch (e) {
//     console.error("메시지 파싱 에러: ", e);
//   }
// };

// bridge 요청 처리
const handleWebRequest = (data: BridgeMessage) => {
  let response: BridgeMessage | undefined;

  switch (data.class) {
    case "auth":
      response = authRequest(data);
      break;
    case "popup":
      break;
  }

  if (response !== undefined) {
    return response;
  } else {
    const response: BridgeMessage = {
      cmd: "response",
      id: data.id,
      class: data.class,
      method: data.method,
      result: "fail",
    };
    return response;
  }
};

const handleWebResponse = (response: BridgeMessage) => {
  switch (response.class) {
    case "popup": {
      popupResponse(response);
    }
  }
};

// popup.ts

const handeWebResponse = (data: BridgeMessage) => {};
