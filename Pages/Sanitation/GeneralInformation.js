import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const GenralInformation = ({ GenralInformation, setGenralInformation }) => {

  const GenralInformationData = [
    "GenralInformation",
    "Month/Year of Construction*",
    "If not know,Please estimate and Indicate above click the ticket (Estimate) here",
    "Facility Labeled*",
    "Facility Number",
    "Source of Funding",
    "Private",
    "NGO/CBO-Specify",
    "Community",
    "Partnership-Spedfy",
    "Other Specify",
    "Current Ownership",
    "Private",
    "Community",
    "Institutional-(Give name of Institution)",
    "Local Goverment",
    "Other-Specify",
  ];

  const handleType = (label, index) => {
    if (GenralInformation[index] === label) {
      const updatedData = { ...GenralInformation };
      delete updatedData[index];
      setGenralInformation(updatedData);
    } else {
      setGenralInformation({ ...GenralInformation, [index]: label });
    }
  };

  return (
    <View>
      {GenralInformationData.map((v, index) => {
        const shouldDisplayInput = [
          0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
        ].includes(index);
        const Test =
          (Object.keys(GenralInformation).includes(5) && index == 6) ||
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
                isChecked={GenralInformation[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0].includes(index) ? (
              <View
                style={[
                  {
                    marginVertical: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "scroll",
                  },
                  ![0].includes(index)
                ]}
              >
                {Test && (
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    hint={`${v.replace("_Data", "").replace('*', '')}`}
                    value={GenralInformation[v]}
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




export default GenralInformation;