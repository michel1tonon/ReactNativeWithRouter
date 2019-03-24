import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props =>
  <View style={styles.container}>
    <Text style={styles.text}>
      This is A-Screen.
  </Text>
    <Text style={styles.text}
      onPress={() => props.history.push("/b")}>
      click and see the next screen. (B)
  </Text>
  </View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    margin: 20,
  }
});
