import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props =>
  <View style={styles.container}>
    <Text style={styles.text}>
      This is B-Screen.
  </Text>
    <Text style={styles.text}
      onPress={() => props.history.push("/c")}>
      click and see the next screen. (C)
  </Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 20,
  }
});
