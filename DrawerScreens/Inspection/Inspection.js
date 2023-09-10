import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import PointSource from '../../Pages/PointSource';

const Inspection = ({ route }) => {
  const { type } = route.params;
  return (
    <View style={styles.container}>
      {type == 'Point Water Source' && <PointSource />}
    </View>
  );
};


export default Inspection;
