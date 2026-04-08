export interface BridgeMessage {
  cmd: BridgeCmd;
  id: string;
  class: "auth" | "popup";
  method: string;
  parameter?: any;
  result?: "success" | "fail";
}

// 요청/응답 구분
export type BridgeCmd = "request" | "response";

// 응답 데이터 분류
export type BridgeClass = "auth" | "popup";

// 응답 결과
export type result = "success" | "fail";
