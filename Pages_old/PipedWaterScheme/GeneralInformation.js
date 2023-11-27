import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const GenralInformation = ({ GenralInformation, setGenralInformation }) => {

  const GenralInformationData = [
    "Total number of connections*",
    "No of Public Stand Posts",
    "No of Yard Taps",
    "No of Kiosks",
    "No of House Connections",
    "No of Institutional Connections",
    "No of Non-Instutional (Commercial)",
    "Connections",
    "No of Industrial Connections",
    "Others Connections",
    "Estimated Population served by system",
    "Date of commissioning",
    "If not Know ,please estimate and indicate9EST)",
    "Is Yes,scheme Gazetted",
    "If Yes what is the Water Authority",
    "Umbrella Authorty Name",
    "NWSC",
    "Is a Treatment System in place",
    "Treatement Type*",
    "Water Treatment plant",
    "Cholorine Dosing",
    "Aeration/Iron Removal",
    "Frequency of Water Treatment*",
    "Daily",
    "Monthly",
    "Bi-Annually",
    "Weekly",
    "Quartely",
    "Annually",
    "Total Pipe length*",
    "Transmisson",
    "Distribution",
    "Total",
    "Total Storage capacity (all revervoirs)"
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
          0, 6, 14, 18, 22, 29, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15, 30, 31, 32, 33
        ].includes(index);
        const Test =
          (Object.keys(GenralInformation).includes("5") && index == 6) ||
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
            ) : ![0, 6, 14, 18, 22, 29].includes(index) ? (
              <View
                style={[
                  {
                    marginVertical: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "scroll",
                  },
                  ![0].includes(index) && { marginHorizontal: 16 },
                ]}
              >
                {Test && (
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    hint={`${v.replace("_Data", "")}`}
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