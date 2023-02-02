import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { CreateMeal } from "@screens/CreateMeal";
import { Statistics } from "@screens/Statistics";
import { Feedback } from "@screens/Feedback";
import { InfoMeal } from "@screens/InfoMeal";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createMeal" component={CreateMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="infoMeal" component={InfoMeal} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
