import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import registorScreen from './screens/RegistorScreen';
import Home from './screens/Home';
import AddChat from './screens/AddChat';
const Stack = createNativeStackNavigator();


const globalStyele = {
  headerStyle: { backgroundColor: 'blue', },
  headerTitleStyle: { color: 'white', alignSelf: 'center' },
  headerTintColor: 'white',
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator initialRouteName='Login' screenOptions={globalStyele}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registor" component={registorScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddChat" component={AddChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
