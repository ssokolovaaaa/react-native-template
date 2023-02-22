import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  text?: string;
}

const Welcome: React.FC<Props> = ({text = 'Text'}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default Welcome;
