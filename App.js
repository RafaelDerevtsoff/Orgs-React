import React from 'react';
import {StyleSheet,SafeAreaView, Text} from 'react-native';
import Home from './src/screens/Home';

function App(){
  return<>
          <SafeAreaView style={styles.screen}>
            <Home/>
          </SafeAreaView>
        </> 
}

const styles= StyleSheet.create({
  screen:{
    backgroundColor:'white',
    flex:1
  }
})
export default App;