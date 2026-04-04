import { MusicStackParamList } from "@presentation/navigation/types";
import MusicListScreen from "@presentation/screens/music/MusicListScreen";
import MusicScreen from "@presentation/screens/music/MusicScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<MusicStackParamList>();

const MusicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Music"
        component={MusicScreen}
        options={{ title: "Music", headerShown: false }}
      />
      <Stack.Screen
        name="MusicList"
        component={MusicListScreen}
        options={{ title: "MusicList", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MusicStack;
