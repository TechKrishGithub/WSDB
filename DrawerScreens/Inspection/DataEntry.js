import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import PointSource from '../../Pages/PointSource';
import PipedWaterScheme from '../../Pages/PipedWaterScheme';
import Sanitation from '../../Pages/Sanitation';

const DataEntry = ({ route }) => {
  const { type } = route.params;
  return (
    <View style={styles.container}>
      {type == 'Point Water Source' && <PointSource />}
      {type == 'Piped Water Schemes' && <PipedWaterScheme />}
      {type == 'Sanitation' && <Sanitation />}
    </View>
  );
};


export default DataEntry;
