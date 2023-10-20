import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FloatingLabelInput } from 'react-native-floating-label-input';


const TypeOfSource = ({ TypeOfSourceData, setTypeOfSourceData }) => {
    const TypeOfSourceLabels1 = [
        "Protected Spring",
        "No. of Spouts",
        "Shallow Well/Hand Dug(Less than 30m deep) with hand pump",
        "Deep borehole (more than 30m deep) with hand pump",
        "Rainwater Harvest Tank(6,000 liters and above)",
        "Volume of Tank",
        "WfP Borehole",
        "Unprotected Spring",
        "Public Stand Post",
        "No. Tapstands_Public", "Kiosk",
        "No. Tapstands_Kiosk", "Yard tap for public use",
        "No. Tapstands_Yard", "• If Taps,Indicate Sheme/System Details:",
        "• Indicate type of mother Scheme/System",
        "Ground Water based (GWB)",
        "Surface Water Based (SWB)",
        "Combined Ground and Surface water based",
        "Indicate Name of Piped System/Scheme",
        "Is this source within in the premise *",
        "No. of Households within the premise",
        "• Estimated number of households (using this source):",
        "Within 0-500m radius", "Within 500-1000m radius",
        "Beyond > 1000m radius",
        "If Permise is an institutions how many estimated students/patients/soldiers/etc.",
        "Estimate average people per"];

    const toRoman = (num) => {
        const romanNumerals = ["I   . ", "II  . ", "III . ", "IV . "];
        return romanNumerals[num - 1] || num;
    };

    const handleType = (label, index) => {
        if (TypeOfSourceData[index] === label) {
            const updatedData = { ...TypeOfSourceData };
            delete updatedData[index];
            setTypeOfSourceData(updatedData);
        } else {
            setTypeOfSourceData({ ...TypeOfSourceData, [index]: label });
        }
    }
    return (
        <View>
            <Text style={styles.question}>{`• Tick the applicable box below *`}</Text>
            {TypeOfSourceLabels1.map((v, index) => {
                const shouldDisplayInput = [1, 5, 9, 11, 13, 14, 15, 19, 21, 22, 23, 24, 25, 26, 27].includes(index);
                const Test = (Object.keys(TypeOfSourceData).includes('0') && index == '1') || (Object.keys(TypeOfSourceData).includes('4') && index == '5') || (Object.keys(TypeOfSourceData).includes('8') && index == '9') || (Object.keys(TypeOfSourceData).includes('10') && index == '11') || (Object.keys(TypeOfSourceData).includes('12') && index == '13') || [19, 21, 23, 24, 25, 26, 27].includes(index)
                let count = 1;
                return (
                    <View key={index}>
                        {!shouldDisplayInput ?
                            <BouncyCheckbox
                                size={20}
                                key={index}
                                fillColor="#134484"
                                style={{ padding: 10 }}
                                text={v}
                                isChecked={TypeOfSourceData[index] ? true : false}
                                innerIconStyle={{ borderWidth: 2 }}
                                textStyle={{ textDecorationLine: 'none', color: '#134484' }}
                                onPress={() => handleType(v, index)}
                            />
                            :
                            Test ? (
                                <View style={[{
                                    marginVertical: 16,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    overflow: 'scroll'
                                }, ![19, 21, 26, 27].includes(index) && { marginHorizontal: 16 },]}>
                                    {[23, 24, 25].includes(index) && (
                                        <Text style={{ fontWeight: 'bold', color: '#134484' }}>{toRoman(index - 22)}</Text>
                                    )}
                                    <FloatingLabelInput
                                        label={`${v.replace(/(_Public|_Kiosk|_Yard)?$/, '')} *`}
                                        value={TypeOfSourceData[v]}
                                        hint={v.replace(/(_Public|_Kiosk|_Yard)?$/, '')}
                                        onChangeText={(e) => handleType(e, v)}
                                        containerStyles={styles.input}
                                        inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                                        labelStyles={{ fontWeight: 'bold', overflow: 'hidden', width: '100%' }}
                                    />
                                </View>
                            )
                                :
                                [14, 15, 19, 22].includes(index) &&
                                (
                                    <Text style={[styles.question, { paddingVertical: 10 }]}>{v}</Text>
                                )
                        }
                    </View>
                )
            })}
        </View>
    )

}

export default TypeOfSource;