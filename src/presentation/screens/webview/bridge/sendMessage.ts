import { BridgeMessage } from "@presentation/screens/webview/bridge/bridgeMessage";
import getJsCode from "@presentation/screens/webview/bridge/getJsCode";

export const showConfirmPopup = () => {
  const request: BridgeMessage = {
    cmd: "request", // 요청임을 명시
    id: "234567",
    class: "popup",
    method: "confirm",
    parameter: {
      title: "안녕하세요",
      message: "지금 가입 하시겠습니까? 오늘까지 가입하시면 30% 할인됩니다.",
      positiveButton: "확인",
      nagativeButton: "취소",
    },
  };
  return getJsCode(request);
};
