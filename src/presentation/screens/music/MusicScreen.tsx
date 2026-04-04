import { useAppTheme } from "@presentation/hooks/useAppTheme";
import React from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import SearchIcon from "@assets/svg/ic_search_24.svg";
import MicIcon from "@assets/svg/ic_mic_24.svg";
import { Theme } from "@core/theme/theme";
import { MusicProp } from "@presentation/navigation/types";

// 화면 너미 및 간격 계산
const { width } = Dimensions.get("window");
const GAP = 8;
const ITEM_WIDTH = (width - GAP * 3) / 2;
const SEARCH_BAR_HEIGHT = 48;

// 1. 데이터 구조를 위한 인터페이스 정의
export interface AlbumItem {
  id: string;
  image: ImageSourcePropType; // require('./assets/...') 형태의 타입을 위해 사용
  title: string;
  artist: string;
}

// 2. 샘플 데이터 (타입 적용)
const DATA: AlbumItem[] = [
  {
    id: "1",
    image: require("@assets/png/music_1.png"),
    title: "Ology",
    artist: "Galant",
  },
  {
    id: "2",
    image: require("@assets/png/music_2.png"),
    title: "Retrograd",
    artist: "Crown the Empire",
  },
  {
    id: "3",
    image: require("@assets/png/music_3.png"),
    title: "Under the Garden",
    artist: "ROZES",
  },
  {
    id: "4",
    image: require("@assets/png/music_4.png"),
    title: "Medicine for Headsick",
    artist: "Angelica Garcia",
  },
  {
    id: "5",
    image: require("@assets/png/music_5.png"),
    title: "Plum Apricot Clue",
    artist: "Hanroro",
  },
  {
    id: "6",
    image: require("@assets/png/music_6.png"),
    title: "Lulu",
    artist: "Mrs. Green Apple",
  },
];

// 3. 개별 아이템 컴포넌트 Props 타입 정의
interface GridItemProps {
  item: AlbumItem;
  theme: Theme;
  isDarkMode: boolean;
  onPress: (item: AlbumItem) => void;
}

const GridItem = ({ item, theme, isDarkMode, onPress }: GridItemProps) => {
  const styles = getGridItemStyles(theme, isDarkMode);
  return (
    <TouchableOpacity
      activeOpacity={0.8} // 터치 시 투명도 조절 (0~1)
      onPress={() => onPress(item)} // 클릭 시 아이템 정보 전달
      style={styles.container}
    >
      <Image
        source={item.image}
        style={{ width: ITEM_WIDTH, height: ITEM_WIDTH, borderRadius: 4 }}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[theme.typography.body1, styles.title]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={[theme.typography.caption, styles.artist]}
          numberOfLines={1}
        >
          {item.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MusicScreen = ({ navigation }: MusicProp) => {
  const { theme, isDarkMode } = useAppTheme();
  // 현재 기기의 안전 영역 인셋(Insets) 가져오기
  const insets = useSafeAreaInsets();
  const styles = getMainStyles(theme, isDarkMode, insets);

  // 아이템 클릭 핸들러
  const handleItemPress = (item: AlbumItem) =>
    navigation.navigate("MusicList", { item });

  const renderItem: ListRenderItem<AlbumItem> = ({ item }) => (
    <GridItem
      item={item}
      theme={theme}
      isDarkMode={isDarkMode}
      onPress={handleItemPress}
    />
  );

  return (
    <View style={styles.root}>
      {/* 1. 리스트 부분 */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: AlbumItem) => item.id}
        numColumns={2} // 핵심: 열의 개수를 지정
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {/* 2. 상단 검색바 (Absolute) */}
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBarContainer}>
          <SearchIcon width={24} height={24} />
          <TextInput
            style={[theme.typography.h6, styles.searchInput]}
            placeholder="Search"
            placeholderTextColor={theme.color.main}
          />
          <MicIcon width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default MusicScreen;

/**
 * 메인 화면 스타일 생성 함수
 */
const getMainStyles = (theme: Theme, isDarkMode: boolean, insets: EdgeInsets) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.color.background,
    },
    listContent: {
      paddingHorizontal: GAP,
      // 검색바 높이(48) + 상단 여백(8) + 안전영역(insets.top) + 리스트 자체 상단 여백(30)
      paddingTop: insets.top + 38,
      paddingBottom: insets.bottom + 20,
    },
    columnWrapper: {
      gap: GAP,
    },
    separator: {
      height: 28,
    },
    searchBarWrapper: {
      position: "absolute",
      top: insets.top + 8,
      left: 0,
      right: 0,
      paddingHorizontal: 16,
      zIndex: 1,
    },
    searchBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: isDarkMode ? theme.color.shade : theme.color.background,
      height: SEARCH_BAR_HEIGHT,
      borderRadius: 3,
      paddingHorizontal: 12,
      // 그림자 (iOS)
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      // 그림자 (Android)
      elevation: 3,
    },
    searchInput: {
      flex: 1,
      marginLeft: 24,
      color: theme.color.main,
    },
  });

const getGridItemStyles = (theme: Theme, isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      width: ITEM_WIDTH,
      backgroundColor: isDarkMode ? theme.color.shade : theme.color.background,
      borderRadius: 4,
      // 그림자 (iOS)
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      // 그림자 (Android)
      elevation: 4,
      // overflow: "hidden", // ❌ 제거: iOS shadow 표시를 위해
    },
    textContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    title: {
      color: theme.color.main,
    },
    artist: {
      color: theme.color.main,
      opacity: 0.54,
    },
  });
