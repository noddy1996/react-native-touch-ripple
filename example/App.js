/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TouchableRipple from 'react-native-touch-ripple'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView style={{paddingTop:20}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TouchableRipple
            style={[styles.container, { backgroundColor: '#e52165' }]}
          >
            <Text style={styles.text}>default</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.container, { backgroundColor: '#d72631' }]}
            rippleSize={150} rippleDuration={500}
          >
            <Text style={styles.text}>rippleSize={150} {"\n"} rippleDuration={500}</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.container, { backgroundColor: '#a2d5c6' }]}
            rippleSize={250} rippleDuration={800}>
            <Text style={styles.text}>rippleSize={250} {"\n"} rippleDuration={800}</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.container, { backgroundColor: '#077b8a' }]}
            rippleColor='white' rippleOpacity={0.50}>
            <Text style={styles.text}>rippleColor='white' {"\n"} rippleOpacity={0.50}</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.container, { backgroundColor: '#5c3c92' }]}
            rippleCentered rippleColor='white'>
            <Text style={styles.text}> rippleCentered{"\n"} rippleColor='white'</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.container, { backgroundColor: '#ffd79d' }]}
            rippleColor='#d902ee'
            rippleOpacity={0.85}
            rippleDuration={1000}>
            <Text style={styles.text}>rippleColor='#d902ee'{"\n"}
            rippleOpacity={0.85}{"\n"}
            rippleDuration={1000}</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.container, { backgroundColor: '#f3ca20' }]}
            rippleColor='#3b4d61'
            rippleOpacity={0.90}
            rippleDuration={2400}>
            <Text style={styles.text}>
            rippleColor='#3b4d61'{"\n"}
            rippleOpacity={0.90}{"\n"}
            rippleDuration={2400}
            </Text>
          </TouchableRipple>
          <TouchableRipple disabled style={[styles.container, { backgroundColor: '#3b4d61' }]}>
            <Text style={styles.text}>disabled</Text>
          </TouchableRipple>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 56,
    margin: 4,
    borderRadius: 2,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default App;
