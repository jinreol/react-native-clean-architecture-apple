import { BridgeMessage } from "@presentation/screens/webview/bridge/bridgeMessage";

const getJsCode = (message: BridgeMessage) => {
  return `
      (function() {
        const message = ${JSON.stringify(message)};
        // 1. 일반적인 message 이벤트로 전송
        window.postMessage(JSON.stringify(message), '*');
        // 2. 이전 코드에서 작성한 nativeMessage 커스텀 이벤트로도 전송 (호환성)
        window.dispatchEvent(new CustomEvent('nativeMessage', { detail: message }));
      })();
      true;
    `;
};

export default getJsCode;
