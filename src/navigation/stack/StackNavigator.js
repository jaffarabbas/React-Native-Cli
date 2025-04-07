import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import ScreenC from "./screens/ScreenC";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ScreenA" component={ScreenA} options={{ title: "Screen A",headerShown: false }} />
                <Stack.Screen name="ScreenB" component={ScreenB} options={{ title: "Screen B",headerShown: false }} />
                <Stack.Screen name="ScreenC" component={ScreenC} options={{ title: "Screen C",headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;