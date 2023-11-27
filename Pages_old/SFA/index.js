import React from "react";
import { View, Text, Button } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";


const RenderContent = ({ v, index, handleType, data }) => {
    return (
        v.type == 1 ?
            <Text key={index} style={[styles.question, { paddingVertical: 10 }]}>{`• ${v.name}`}</Text>
            :
            v.type == 2 ?
                <View
                    key={index}
                    style={styles.RenderConHeading}
                >
                    {v.roman !== undefined &&
                        <Text style={{ fontWeight: 'bold', color: '#134484', marginHorizontal: 10 }}>{v.roman} .</Text>
                    }
                    <FloatingLabelInput
                        label={`${v.name.replace("_Data", "")}`}
                        value={data[v.name]}
                        hint={`${v.name.replace("_Data", "")}`}
                        onChangeText={(e) => handleType(e, v.name)}
                        containerStyles={styles.input}
                        inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                        labelStyles={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            width: "100%",
                        }}
                    />
                </View>
                :
                v.type == 3 &&
                <BouncyCheckbox
                    size={20}
                    key={index}
                    fillColor="#134484"
                    style={{ padding: 10 }}
                    text={v.name}
                    isChecked={data[v.name] == v.name ? true : false}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ textDecorationLine: "none", color: "#134484" }}
                    onPress={() => handleType(v.name, v.name)}
                />
    )
}



const SFA = ({ labelData, data, setData }) => {

    const handleType = (value, label) => {
        const check = Object.values(data).find(v => v == label);
        if (check) {
            const updatedData = { ...data };
            delete updatedData[label];
            setData(updatedData);
            return;
        }
        const UpdateData = { ...data };
        UpdateData[label] = value;
        setData(UpdateData);
    };



    return (
        <View>
            {labelData.map((v, index) => {
                if (v.hide !== undefined) {
                    const check = Object.keys(data).length > 0 && Object.keys(data).includes(v.hide)
                    if (check == true) {
                        return (
                            <RenderContent v={v} index={index} handleType={handleType} data={data} key={index} />)
                    }
                }
                else {
                    return (
                        <RenderContent v={v} index={index} handleType={handleType} key={index} data={data} />)
                }
            })}
        </View>
    );
};

export default SFA;
