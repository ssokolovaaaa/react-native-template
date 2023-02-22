import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onPress: () => void;
  label?: string;
}

const CoolButton: React.FC<Props> = ({onPress, label = 'Press'}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{color: 'white', textAlign: 'center'}}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
  },
});

export default CoolButton;
