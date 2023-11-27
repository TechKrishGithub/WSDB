import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const TypeOfFacility = ({ TypeOfFacility, setTypeOfFacility }) => {

  const TypeOfFacilityData = [
    "Tick the applicable box below*",
    "Stances",
    "Eco-san(UDDT,Forsa Altemo,AbooLoo etc)",
    "Water Closet",
    "Pour-Flush",
    "Lined VIP",
    "Other Specify",
    "Separate Male/Female Stances",
    "If the Facility is",
    "Water source",
    "Piped Water System/Scheme",
    "Rain Water",
    "Other Specify",
    "If3.3 is a Piped Water System,What is the Piped Water System",
    "Does the facility have a boothroom",
    "Is Hand-washing facility is available",
    "If 3.6 is Yes,Is soap available",
    "what type of Hand washing facility is used",
    "Tippy-Top",
    "Peddle",
    "Sink",
    "Wash-alot",
    "Elbow",
    "Other"
  ];

  const handleType = (label, index) => {
    if (TypeOfFacility[index] === label) {
      const updatedData = { ...TypeOfFacility };
      delete updatedData[index];
      setTypeOfFacility(updatedData);
    } else {
      setTypeOfFacility({ ...TypeOfFacility, [index]: label });
    }
  };

  return (
    <View>
      {TypeOfFacilityData.map((v, index) => {
        const shouldDisplayInput = [
          0, 8, 17, 2, 3, 4, 6, 12, 13
        ].includes(index);
        const Test =
          (Object.keys(TypeOfFacility).includes("5") && index == 6) ||
          ![5].includes(index);
        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={TypeOfFacility[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 8, 17].includes(index) ? (
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
                    hint={`${v.replace("_Data", "").replace('*', '')}`}
                    value={TypeOfFacility[v]}
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




export default TypeOfFacility;