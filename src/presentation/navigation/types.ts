import { AlbumItem } from "@presentation/screens/music/MusicScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootTabParamList = {
  News: undefined;
  MusicStack: undefined;
  CssStack: undefined;
  Axios: undefined;
  Deeplink: { id?: string };
};

export type CssStackParamList = {
  Css: undefined;
  CSS01TextColor: undefined;
  CSS02HeightWidth: undefined;
  CSS03Flex: undefined;
  CSS04FlexDirection: undefined;
  CSS05LayoutDirection: undefined;
  CSS06JustifyContent: undefined;
  CSS07AlignItems: undefined;
  CSS08AlignSelf: undefined;
  CSS09AlignContent: undefined;
};

export type CssProp = NativeStackScreenProps<CssStackParamList, "Css">;

export type MusicStackParamList = {
  Music: undefined;
  MusicList: { item: AlbumItem };
};

export type MusicProp = NativeStackScreenProps<MusicStackParamList, "Music">;
