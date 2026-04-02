import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import PreviewLayoutChildView from "@presentation/screens/css/PreviewLayoutChildView";
import { useState } from "react";

const CSS04FlexDirectionScreen = () => {
  const [flexDirection, setflexDirection] = useState<
    "column" | "row" | "column-reverse" | "row-reverse"
  >("column");
  return (
    <PreviewLayout<"column" | "row" | "column-reverse" | "row-reverse">
      label="flexDirection"
      values={["column", "row", "column-reverse", "row-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <PreviewLayoutChildView />
    </PreviewLayout>
  );
};

export default CSS04FlexDirectionScreen;
