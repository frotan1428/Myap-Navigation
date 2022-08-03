import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Index from "./components/00-index";
import { NavigationAction } from '@react-navigation/native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";

import Debugging from "./components/14-debuggin/Debugging";

import Flex1 from "./components/01-flex/flex1";
import Flex2 from "./components/01-flex/flex2";
import Flex3 from "./components/01-flex/flex3";
import Flex4 from "./components/01-flex/flex4";
import Flex5 from "./components/01-flex/flex5";
import Flex6 from "./components/01-flex/flex6";
import Flex7 from "./components/01-flex/flex7";
import Flex8 from "./components/01-flex/flex8";
import Flex9 from "./components/02-style-types/flex9";
import Internal from "./components/02-style-types/internal";



const Stack=  createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen  name="Index" component={Index}/>
          <Stack.Screen  name="Flex1" component={Flex1}/>
          <Stack.Screen  name="Flex2" component={Flex2}/>
          <Stack.Screen  name="Flex3" component={Flex3}/>
          <Stack.Screen  name="Flex4" component={Flex4}/>
          <Stack.Screen  name="Flex5" component={Flex5}/>
          <Stack.Screen  name="Flex6" component={Flex6}/>
          <Stack.Screen  name="Flex7" component={Flex7}/>
          <Stack.Screen  name="Flex8" component={Flex8}/>
          <Stack.Screen  name="Flex9" component={Flex9}/>
          <Stack.Screen  name="Internal" component={Internal}/>
         
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
