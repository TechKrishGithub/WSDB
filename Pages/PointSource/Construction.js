import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FloatingLabelInput } from 'react-native-floating-label-input';


const Construction = ({ Construction, setConstruction }) => {

    const ConstructionData = ["Month/Year of Construction *", "Estimate", "If not known,please estimate and Indicate (EST) after the year:", "Source Name *", "Source Number", "Source of Funding", "Private", "NGO-Specify", "Gou - Central Govt", "GoU - Local Govt", "Partnership - Specify", "Other - Specify", "Current Ownership", "Private", "Community", "Institutional - Health (Give name of Institution)", "Institutional - Education (Name of Institution)", "Other - Specify"];


    const handleType = (label, index) => {
        if (Construction[index] === label) {
            const updatedData = { ...Construction };
            delete updatedData[index];
            setConstruction(updatedData);
        } else {
            setConstruction({ ...Construction, [index]: label });
        }
    }
    return (
        <View>

            {ConstructionData.map((v, index) => {
                const shouldDisplayInput = [0, 2, 5, 12, 3, 4, 7, 8, 9, 10, 11, 15, 16, 17].includes(index);
                return (
                    <View key={index}>
                        {!shouldDisplayInput ?
                            <BouncyCheckbox
                                size={20}
                                key={index}
                                fillColor="#134484"
                                style={{ padding: 10 }}
                                text={v}
                                isChecked={Construction[index] ? true : false}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ textDecorationLine: 'none', color: '#134484' }}
                                onPress={() => handleType(v, index)}
                            />
                            :
                            ![2, 5, 12].includes(index) ? (
                                <View style={[{
                                    marginVertical: 16,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    overflow: 'scroll'
                                }, ![0].includes(index) && { marginHorizontal: 16 },]}>
                                    <FloatingLabelInput
                                        label={`${v}`}
                                        hint={v.replace('*','')}
                                        value={Construction[v]}
                                        onChangeText={(e) => handleType(e, v)}
                                        containerStyles={styles.input}
                                        inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                                        labelStyles={{ fontWeight: 'bold', overflow: 'hidden', width: '100%' }}
                                    />
                                </View>
                            )
                                :
                                (
                                    <Text style={[styles.question, { paddingVertical: 10 }]}>{`• ${v}`}</Text>
                                )
                        }
                    </View>
                )
            })}
        </View>
    )

}

export default Construction;