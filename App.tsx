/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Clock from './src/components/Clock';
import CoolButton from './src/components/CoolButton';
import NumberList from './src/components/NumberList';
import colors from './src/theme/colors';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <CoolButton onPress={() => setCount(count + 1)} label="Press me" />
      <Text>Вы нажали {count} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
