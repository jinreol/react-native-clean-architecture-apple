import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { MusicStackParamList } from "@presentation/navigation/types";
import MusicListHeader from "@presentation/screens/music/components/MusicListHeader";
import MusicListItemView from "@presentation/screens/music/components/MusicListItemView";
import MusicListSeparator from "@presentation/screens/music/components/MusicListSeparator";
import MusicListTopAppBar from "@presentation/screens/music/components/MusicListTopAppBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ListRenderItem,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<MusicStackParamList, "MusicList">;

const MusicListScreen = ({ navigation, route }: Props) => {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { item } = route.params;
  const renderItem: ListRenderItem<SongItem> = ({ item }) => (
    <MusicListItemView width={width} item={item} />
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.color.background,
          paddingTop: insets.top,
        },
      ]}
    >
      <FlatList
        ListHeaderComponent={<MusicListHeader width={width} />}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: SongItem) => item.id}
        ItemSeparatorComponent={() => <MusicListSeparator />}
      />

      {/* Top App Bar */}
      <View
        style={{
          position: "absolute",
          top: insets.top,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <MusicListTopAppBar
          title={item.title}
          artist={item.artist}
          onPressArrowLeft={() => navigation.goBack()}
          onPressMore={() => {
            // TODO: More 아이콘 클릭 시 실행할 동작을 여기에 구현
            console.log("More icon pressed");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MusicListScreen;

export interface SongItem {
  id: string;
  song: string;
  album: string;
  playTime: string;
}

const DATA: SongItem[] = [
  {
    id: "1",
    song: "Talking to Myself",
    album: "Crown the Empire",
    playTime: "2:17",
  },
  {
    id: "2",
    song: "Shotgun",
    album: "Crown the Empire",
    playTime: "1:23",
  },
  {
    id: "3",
    song: "First",
    album: "Crown the Empire",
    playTime: "3:47",
  },
  {
    id: "4",
    song: "Talking to Myself",
    album: "Crown the Empire",
    playTime: "1:59",
  },
  {
    id: "5",
    song: "Shotgun",
    album: "Crown the Empire",
    playTime: "4:02",
  },
  {
    id: "6",
    song: "Talking to Myself",
    album: "Crown the Empire",
    playTime: "2:17",
  },
  {
    id: "7",
    song: "Shotgun",
    album: "Crown the Empire",
    playTime: "1:23",
  },
  {
    id: "8",
    song: "First",
    album: "Crown the Empire",
    playTime: "3:47",
  },
  {
    id: "9",
    song: "Talking to Myself",
    album: "Crown the Empire",
    playTime: "1:59",
  },
  {
    id: "10",
    song: "Shotgun",
    album: "Crown the Empire",
    playTime: "4:02",
  },
];
