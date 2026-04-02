import { CssStackParamList } from "@presentation/navigation/types";
import CSS01TextColorScreen from "@presentation/screens/css/CSS01TextColorScreen";
import CSS02HeightWidthScreen from "@presentation/screens/css/CSS02HeightWidthScreen";
import CSS03FlexScreen from "@presentation/screens/css/CSS03FlexScreen";
import CSS04FlexDirectionScreen from "@presentation/screens/css/CSS04FlexDirectionScreen";
import CSS05LayoutDirectionScreen from "@presentation/screens/css/CSS05LayoutDirectionScreen";
import CSS06JustifyContentScreen from "@presentation/screens/css/CSS06JustifyContentScreen";
import CSS07AlignItemsScreen from "@presentation/screens/css/CSS07AlignItemsScreen";
import CSS08AlignSelfScreen from "@presentation/screens/css/CSS08AlignSelfScreen";
import CSS09AlignContentScreen from "@presentation/screens/css/CSS09AlignContentScreen";
import CssScreen from "@presentation/screens/CssScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<CssStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Css" component={CssScreen} />
      <Stack.Screen name="CSS01TextColor" component={CSS01TextColorScreen} />
      <Stack.Screen
        name="CSS02HeightWidth"
        component={CSS02HeightWidthScreen}
      />
      <Stack.Screen name="CSS03Flex" component={CSS03FlexScreen} />
      <Stack.Screen
        name="CSS04FlexDirection"
        component={CSS04FlexDirectionScreen}
      />
      <Stack.Screen
        name="CSS05LayoutDirection"
        component={CSS05LayoutDirectionScreen}
      />
      <Stack.Screen
        name="CSS06JustifyContent"
        component={CSS06JustifyContentScreen}
      />
      <Stack.Screen name="CSS07AlignItems" component={CSS07AlignItemsScreen} />
      <Stack.Screen name="CSS08AlignSelf" component={CSS08AlignSelfScreen} />
      <Stack.Screen
        name="CSS09AlignContent"
        component={CSS09AlignContentScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
