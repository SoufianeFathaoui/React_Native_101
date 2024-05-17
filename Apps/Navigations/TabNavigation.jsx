import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeSreen/Home';
import Profile from '../Screens/ProfileScreen/Profile';
import Booking from '../Screens/Booking/Booking';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="booking" component={Booking} />
    </Tab.Navigator>
  )
}