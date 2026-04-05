import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View } from "react-native";

const MusicListSeparator = () => {
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.color.main,
        opacity: 0.24,
        marginStart: 72,
      }}
    />
  );
};

export default MusicListSeparator;
