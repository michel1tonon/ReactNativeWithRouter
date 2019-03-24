import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () =>
<View style={styles.container}>
  <Text style={styles.text}>
    This is C-Screen.
  </Text>
  <Text style={styles.text}>
    End of line
  </Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    margin: 20,
  }
});
