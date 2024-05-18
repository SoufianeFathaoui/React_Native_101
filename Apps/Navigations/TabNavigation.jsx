import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeSreen/Home';
import Profile from '../Screens/ProfileScreen/Profile';
import Booking from '../Screens/Booking/Booking';
import { StyleSheet, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../utils/Colors';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    //screenOptions={{headerShown:false}} for hide the header name of component when you click in the tabScreen
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY}} >
      <Tab.Screen
        name="home"//name of routh
        component={Home}//The component you like to show
        options={{ // options for Control the name of bar and the icons
          //This is for control the text of label in the bar
          tabBarLabel:({color})=>(
            <Text style={{fontSize:15,color:color}}>Home</Text>
          ),
          //this for icons
          tabBarIcon:({color,size})=>(
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen name="profile" component={Profile}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{fontSize:15,color:color}}>Profile</Text>
          ),
          tabBarIcon:({color,size})=>(
            <FontAwesome6 name="user-large" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen name="booking" component={Booking}
        options={{
          tabBarLabel:({color})=>(
            <Text style={styles.Tabs}>Booking</Text>
          ),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="bookmark" size={24} color={color} />
          )
            
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  Tabs:{
    fontSize:15,
  }
})
