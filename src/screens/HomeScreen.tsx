import * as React from 'react'
import { Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import BoyScreen from './BoyScreen';
import GirlScreen from './GirlScreen';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
          <Tab.Screen name="Boy" options={{ tabBarIcon: () => <Text>👦🏻</Text> }} component={BoyScreen} />
          <Tab.Screen name="Girl" options={{  tabBarIcon: () => <Text>👩🏼</Text> }} component={GirlScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen
