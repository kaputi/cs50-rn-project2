import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Logs } from 'expo'

import MainNavigator from './components/navigators/MainStackNavigator'

// https://stackoverflow.com/a/42839384/1123156
const isRemoteDebuggingEnabled = typeof atob !== 'undefined'
if (isRemoteDebuggingEnabled) {
  Logs.disableExpoCliLogging()
} else {
  Logs.enableExpoCliLogging()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
  },
})

const App = () => (
  <View style={styles.container}>
    <MainNavigator />
  </View>
)

export default App
