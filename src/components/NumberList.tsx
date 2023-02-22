import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  numbers: number[];
  children?: JSX.Element;
}

const NumberList: React.FC<Props> = ({numbers, children}) => {
  return (
    <View>
      {numbers.map(number => {
        return <Text key={number}>{number}</Text>;
      })}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});

export default NumberList;
