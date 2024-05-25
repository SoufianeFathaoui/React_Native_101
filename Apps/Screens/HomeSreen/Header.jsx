import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function Header() {
  const { user, isLoading } = useUser(); // useUser is a hook from Clerk that fetches the user data

  // Only render the view if the user exists
  return user && (
    <View style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.profileContainer1}>
        
        {/* User Info */}
        <View style={styles.profileContainer}>
          <Image style={styles.userImage} source={{ uri: user?.imageUrl }} />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userNameText}>{user?.fullName}</Text>
          </View>
        </View>
        
        {/* Bookmark Icon */}
        <View>
          <FontAwesome name="bookmark" size={24} color="black" />
        </View>
      </View>
      
      {/* Search Section */}
      <View style={styles.search}>
        <TextInput style={styles.textInput} placeholder="Search" />
        <FontAwesome5 style={styles.searchBTN} name="search" size={24} color={Colors.PRIMARY} />
      </View>
      
    </View>
  );
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
    borderWidth:1,
    borderRadius:9,
    width:'85%',
    backgroundColor:Colors.WHITE,
    fontSize:16,
    fontFamily:'outfit-bold'
  },
  search:{
    marginTop:25,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:16,
    marginBottom:10,
  },
  searchBTN:{
    backgroundColor:Colors.WHITE,
    padding:7,
    borderRadius:9,
    borderWidth:1,
  },
  userImage:{
    width:45,
    height:45,
    borderRadius:99,
  }
})
