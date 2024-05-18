import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function Header() {
  const {user,isLoading}=useUser();//This useUser is a hook From clerk and it fetch the data from the expo server
  //user&& it means if the user is exist show the view that inside() and if dosn't exist it don't show enything
  return user&& (
    <View style={styles.container}>
      <View style={styles.profileContainer1}>
        <View style={styles.profileContainer}>
          <Image style={styles.userImage} source={{uri:user?.imageUrl}}/>
          <View>
            <Text style={{color:Colors.WHITE}}>Welcome</Text>
            <Text style={{color:Colors.WHITE,fontWeight:'bold'}}>{user?.fullName}</Text>
          </View>
        </View>
        <View>
            <FontAwesome name="bookmark" size={24} color="black" />
        </View>
      </View>
      <View>
        <TextInput style={styles.textInput} placeholder='Search'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:15,
    paddingTop:50,
    backgroundColor:Colors.PRIMARY,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },
  profileContainer1:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    gap:8,
    alignItems:'center'
  },
  textInput:{
    padding:6,
    paddingLeft:16,
    marginTop:25,
    borderWidth:1,
    borderRadius:99,
    backgroundColor:Colors.WHITE
  },
  userImage:{
    width:45,
    height:45,
    borderRadius:99,
  }
})
