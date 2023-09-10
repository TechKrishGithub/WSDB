import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Monitoring = ({ route }) => {
  const { type } = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello, React Monitoring {type} !</Text>
    </View>
  );
};


export default Monitoring;
