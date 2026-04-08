import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { handleOnMessage } from "@presentation/screens/webview/bridge/handleOnMessage";
import { showConfirmPopup } from "@presentation/screens/webview/bridge/sendMessage";
import { useRef } from "react";
import { View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView, { WebViewMessageEvent } from "react-native-webview";

const WebViewScreen = () => {
  const { theme } = useAppTheme();
  const webViewRef = useRef<WebView>(null);
  const WEB_URL = "https://react-native-test-bridge.netlify.app/";
  const onMessage = (event: WebViewMessageEvent) => {
    const jsCode = handleOnMessage(event);
    jsCode && webViewRef.current?.injectJavaScript(jsCode);
  };

  const sendMessage = () => {
    const jsCode = showConfirmPopup();
    jsCode && webViewRef.current?.injectJavaScript(jsCode);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.color.background }}
      edges={["bottom"]}
    >
      <View
        style={{
          backgroundColor: "#f8f9fa",
          borderBottomWidth: 1,
          borderBottomColor: "#dee2e6",
        }}
      >
        <Button
          title="웹에게 팝업 요청 보내기 (Confirm)"
          onPress={sendMessage}
        />
      </View>
      <WebView
        ref={webViewRef}
        // source={{ uri: WEB_URL }}
        source={{ html: HTML_SOURCE }}
        onMessage={onMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        webviewDebuggingEnabled={true}
      />
    </SafeAreaView>
  );
};

export default WebViewScreen;

// TEST용
const HTML_SOURCE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Native WebView Bridge Test</title>
    <style>
      body {
        font-family: sans-serif;
        padding: 20px;
        line-height: 1.6;
      }
      .card {
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: #fafafa;
      }
      button {
        width: 100%;
        padding: 12px;
        background-color: #007aff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }
      pre {
        background: #333;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
        overflow-x: auto;
      }
    </style>
  </head>
  <body>
    <h2>React Native WebView Bridge Test #005</h2>
    <div class="card">
      <h3>1. Web -> Native 요청</h3>
      <button onclick="requestLogin()">로그인 요청 전송</button>
    </div>
    <div id="log-area" class="card">
      <h3>로그 결과</h3>
      <pre id="log">수신된 데이터가 여기에 표시됩니다.</pre>
    </div>

    <script>
      // 로그 출력 함수
      function log(data) {
        document.getElementById("log").innerText = JSON.stringify(data, null, 2);
      }

      // [보내기] Web -> Native: Login Request
      function requestLogin() {
        const request = {
          cmd: "request",
          id: "123456",
          class: "auth",
          method: "login",
          parameter: {
            email: "kim@example.com",
            password: "112233",
          },
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(request));
      }

      // [받기] Native -> Web: Request 또는 Response 수신
      window.addEventListener("nativeMessage", function (e) {
        const data = e.detail;
        console.log("로그인 결과 수신:", data);
        log(data);

        if (data.cmd === "request") {
          if (data.class === "popup") {
            if (data.method === "confirm") {
              const isOk = confirm(
                data.parameter.message,
              );

              // 응답(Response) 전송
              const response = {
                cmd: "response", // 응답임을 명시
                id: data.id,
                class: "popup",
                method: "confirm",
                result: isOk ? "success" : "fail",
              };
              window.ReactNativeWebView.postMessage(JSON.stringify(response));
            }
          }
        } else if (data.cmd === "response") {
          if (data.class === "auth") {
            if (data.method === "login") {
              // Native -> Web 응답 처리 (예: 로그인 결과 보여주기)
              console.log("로그인 결과 수신:", data.parameter);
              alert(data.parameter.userName + "님 환영합니다.");
            }
          }
        }
      });
    </script>
  </body>
</html>
`;
