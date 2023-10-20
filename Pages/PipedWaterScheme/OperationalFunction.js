import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const OperationalFunction = ({ OperationalFunction, setOperationalFunction }) => {

  const OperationalFunctionData = [
    "Functionality*",
    "Functional(whole Is fully function)",
    "Non-Functional (whole system is complete down)",
    "Partially Functional(specify problem)",
    "If the system is not fully functional ,when did it become non-functional or only partially functional",
    "Date",
    "Reasons why the schema/system is not fully functional",
    "Dry/Low yielding",
    "Techical breakdown-specify",
    "Power problems-specify",
    "Non-Payment of Water Fees",
    "Water Quality-specify",
    "smelly",
    "Tasty",
    "Brown Water",
    "Other Coloured water",
    "Suspended Particles",
    "Oily Water",
    'Dirty Water',
    "Itchy water",
    "Other",
    "Altemative Water facility Nearby",
    "Poor Management",
    "Other-specify",
    "Year of last major repair/replacement",
    "Give details on the repairs done ,If any"


  ];

  const handleType = (label, index) => {
    if (OperationalFunction[index] === label) {
      const updatedData = { ...OperationalFunction };
      delete updatedData[index];
      setOperationalFunction(updatedData);
    } else {
      setOperationalFunction({ ...OperationalFunction, [index]: label });
    }
  };

  return (
    <View>
      {OperationalFunctionData.map((v, index) => {
        const shouldDisplayInput = [
          0, 6, 11, 4, 5, 8, 9, 20, 23, 24, 25
        ].includes(index);
        const Test =
          (Object.keys(OperationalFunction).includes("0") && index == 6) ||
          ![0].includes(index);
        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={OperationalFunction[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 6, 11].includes(index) ? (
              <View
                style={[
                  {
                    marginVertical: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "scroll",
                  },
                  ![0,].includes(index) && { marginHorizontal: 16 },
                ]}
              >
                {Test && (
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    hint={`${v.replace("_Data", "")}`}
                    value={OperationalFunction[v]}
                    onChangeText={(e) => handleType(e, v)}
                    containerStyles={styles.input}
                    inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                    labelStyles={{
                      fontWeight: "bold",
                      overflow: "hidden",
                      width: "100%",
                    }}
                  />
                )}
              </View>
            ) : (
              <Text
                style={[styles.question, { paddingVertical: 10 }]}
              >{`• ${v}`}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
};




export default OperationalFunction;