import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Router from './routes';
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#313E38"/>
      <Router />
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
