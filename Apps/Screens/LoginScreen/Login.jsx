import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View style={{alignItems:'center'}}>
      <Image style={styles.loginImage} source={require('../../../assets/Images/image 13.png')}/>
      <View style={styles.subContainer}>
          <Text style={{fontSize:26,color:Colors.WHITE,textAlign:'center'}}>
              Let's Find 
              <Text style={{fontWeight:'bold'}}> professional cleaning and repair </Text>
              Service
          </Text>
          <Text style={{fontSize:17,color:Colors.WHITE,textAlign:'center',marginTop:20}}>Best way to Find services near you which deliver you professional service</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{fontSize:17,color:Colors.PRIMARY}}>Let's get started</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    height:450,
  },
  subContainer:{
    width:'100%',
    height:'70%',
    marginTop:-30,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    backgroundColor:Colors.PRIMARY,
    padding:15
  },
  button:{
    backgroundColor:Colors.WHITE,
    padding:15,
    borderRadius:99,
    marginTop:50,
    alignItems:'center',
  }
})
