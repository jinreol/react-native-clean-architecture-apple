import { View, Text } from "react-native";
import Play from "@assets/svg/ic_play_circle_outline_40.svg";
import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { SongItem } from "@presentation/screens/music/MusicListScreen";

interface MusicListTopAppBarProps {
  width: number;
  item: SongItem;
}

const MusicListItemView = ({ width, item }: MusicListTopAppBarProps) => {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        width: width,
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Play width={40} height={40} style={{ marginStart: 16 }} />
      <View style={{ flex: 1, marginStart: 26 }}>
        <Text style={[theme.typography.body1, { color: theme.color.main }]}>
          {item.song}
        </Text>
        <Text
          style={[
            theme.typography.body2,
            { color: theme.color.main, opacity: 0.54 },
          ]}
        >
          {item.album}
        </Text>
      </View>
      <Text
        style={[
          theme.typography.body1,
          { marginEnd: 16, color: theme.color.main },
        ]}
      >
        {item.playTime}
      </Text>
    </View>
  );
};

export default MusicListItemView;
