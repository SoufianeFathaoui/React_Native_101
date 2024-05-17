import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Apps/Screens/LoginScreen/Login';
import { ClerkProvider,SignedIn, SignedOut  } from "@clerk/clerk-expo";


export default function App() {
  return (
    <ClerkProvider publishableKey={'pk_test_ZGFzaGluZy1maXNoLTc0LmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <View style={styles.container}>
          <SignedIn>
              <Text style={{textAlign:'center',margin:50,borderWidth:1}}>You are Signed in</Text>
          </SignedIn>
          <SignedOut>
              <Login/>
          </SignedOut>
          <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
