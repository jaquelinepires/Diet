import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { NewMeal } from '../screens/NewMeal';
import { NewMealFeedback } from "../screens/NewMealFeedback";
import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  
  return(
    <Navigator screenOptions={{ headerShown: false}}>
          <Screen
        name="welcome"
        component={Welcome}
      />
          <Screen
        name="userIdentification"
        component={UserIdentification}
      />
          <Screen
        name="confirmation"
        component={Confirmation}
      />
      <Screen
        name="home"
        component={Home}
      />
            <Screen
        name="statistics"
        component={Statistics}
      />
            <Screen
        name="newMeal"
        component={NewMeal}
      />
            <Screen
        name="newMealFeedback"
        component={NewMealFeedback}
      />
      


    </Navigator>
  )
}