import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FloatingLabelInput } from 'react-native-floating-label-input';


const OperationStatus = ({ OperationStatus, setOperationStatus }) => {

    const OperationStatusData = ["Functionality *", "Functional (in use)", "Functional (not in use)", "Non-Functional", "If the water source is non-functional or not in use when did it break down?(day)", "Reasons why the source is non-functional or not in use", "Dry/Low yielding", "Technical breakdown - specify", "Water Quality (Physical)", "Smelly Water", "Tasty Water(salty etc)", "Brown Water", "Other Coloured Water", "Suspended Particles", "Oily Water", "Dirty Water", "Itchy Water", "Other", "Silted(Valley tanks/Dams)", "Leaking (Rainwater Harvesting Tanks)", "Alternative source nearby", "Vandalism - specify", "Other - specify", "For Non-Functional and not used sources,give more details and explanations of main reason(s) why ", "For both functional and non-functional sources,Indicate year/Month of last repairs", "Give details on the reparis done,if any"];


    const handleType = (label, index) => {
        if (OperationStatus[index] === label) {
            const updatedData = { ...OperationStatus };
            delete updatedData[index];
            setOperationStatus(updatedData);
        } else {
            setOperationStatus({ ...OperationStatus, [index]: label });
        }
    }
    return (
        <View>

            {OperationStatusData.map((v, index) => {
                const shouldDisplayInput = [0, 4, 5, 7, 17, 22, 23, 24, 25, 26].includes(index);
                const Test = ![5].includes(index)
                return (
                    <View key={index}>
                        {!shouldDisplayInput ?
                            <BouncyCheckbox
                                size={20}
                                key={index}
                                fillColor="#134484"
                                style={{ padding: 10 }}
                                text={v}
                                isChecked={OperationStatus[index] ? true : false}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ textDecorationLine: 'none', color: '#134484' }}
                                onPress={() => handleType(v, index)}
                            />
                            :
                            ![0, 5].includes(index) ? (
                                <View style={[{
                                    marginVertical: 16,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    overflow: 'scroll'
                                }, ![0].includes(index) && { marginHorizontal: 16 },]}>
                                    {Test &&
                                        <FloatingLabelInput
                                            label={`${v.replace('_Data', '')}`}
                                            value={OperationStatus[v]}
                                            hint={`${v.replace('_Data', '')}`}
                                            onChangeText={(e) => handleType(e, v)}
                                            containerStyles={styles.input}
                                            inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                                            labelStyles={{ fontWeight: 'bold', overflow: 'hidden', width: '100%' }}
                                        />
                                    }

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


export default OperationStatus;