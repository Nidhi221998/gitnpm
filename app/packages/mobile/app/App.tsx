import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native';
import { WebView } from 'react-native-webview';

function App():JSX.Element{

  return(
      <WebView 
          source={{uri: 'http://192.168.100.198:3000'}}
        />
  )
  // return(
  //   <View style={styles.container}>
  //   {Platform.OS === 'android' && <Text style={styles.text}>Android Screen</Text>}
  //   {Platform.OS === 'ios' && <Text style={styles.text}>iPhone Screen</Text>}
  // </View>
  // )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
  },
  text: {
    fontSize: 20,
  },
});
export default App