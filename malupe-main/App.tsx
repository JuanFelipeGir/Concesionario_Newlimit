import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./src/Home/HomeScreen"
import Home from "./src/Home/Home"
import DrivingTestRequest from "./src/Components/DrivingTestRequest"
import QuotatingRequest from "./src/Components/QuotatingRequest"
import VehicleSearch from "./src/Components/VehicleSearch";
import Contact from "./src/Components/Contact";
import DealsAndOffers from "./src/Components/DealsAndOffers";
import WorkShopService from "./src/Components/WorkShopServices/WorkShopService";
import ServiceHistory from "./src/Components/WorkShopServices/ServiceHistory";

const Stack = createStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="DrivingTestRequest" component={DrivingTestRequest}/>
          <Stack.Screen name="QuotatingRequest" component={QuotatingRequest}/>
          <Stack.Screen name="VehicleSearch" component={VehicleSearch}/>
          <Stack.Screen name="Contact" component={Contact}/>
          <Stack.Screen name="DealsAndOffers" component={DealsAndOffers}/>
          <Stack.Screen name="WorkShopService" component={WorkShopService}/>
          <Stack.Screen name="ServiceHistory" component={ServiceHistory}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App