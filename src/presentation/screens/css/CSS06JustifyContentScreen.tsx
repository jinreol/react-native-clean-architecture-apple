import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import PreviewLayoutChildView from "@presentation/screens/css/PreviewLayoutChildView";
import { useState } from "react";

const CSS06JustifyContentScreen = () => {
  const [justifyContent, setJustifyContent] = useState<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >("flex-start");

  return (
    <PreviewLayout
      label="justifyContent"
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}
    >
      <PreviewLayoutChildView />
    </PreviewLayout>
  );
};

export default CSS06JustifyContentScreen;
