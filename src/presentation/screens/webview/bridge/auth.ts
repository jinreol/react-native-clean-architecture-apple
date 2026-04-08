import { BridgeMessage } from "@presentation/screens/webview/bridge/bridgeMessage";

const authRequest = (data: BridgeMessage) => {
  switch (data.method) {
    case "login":
      // 로그인 처리
      const response: BridgeMessage = {
        cmd: "response",
        id: data.id,
        class: "auth",
        method: "login",
        result: "success",
        parameter: {
          userName: "사연진",
          email: data.parameter.email,
          tel: "010-1111-2222",
          sex: "female",
        },
      };
      return response;
  }
};

export default authRequest;
