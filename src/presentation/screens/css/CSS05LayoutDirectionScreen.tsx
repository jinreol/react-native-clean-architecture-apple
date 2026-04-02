import PreviewLayout from "@presentation/screens/css/PreviewLayout";
import PreviewLayoutChildView from "@presentation/screens/css/PreviewLayoutChildView";
import { useState } from "react";

const CSS05LayoutDirectionScreen = () => {
  const [layoutDirection, setlayoutDirection] = useState<"ltr" | "rtl">("ltr");

  return (
    <PreviewLayout<"ltr" | "rtl">
      label="direction"
      values={["ltr", "rtl"]}
      selectedValue={layoutDirection}
      setSelectedValue={setlayoutDirection}
    >
      <PreviewLayoutChildView />
    </PreviewLayout>
  );
};

export default CSS05LayoutDirectionScreen;
