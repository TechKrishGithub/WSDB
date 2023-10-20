import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const FunctionalityStatus = ({ FunctionalityStatus, setFunctionalityStatus }) => {

  const FunctionalityStatusData = [
    "Funtionality *",
    "Functional (in use)",
    "Functional (not in use)",
    "Non-Functional",
    "Partioally Functional",
    "If the facility is non-functional or not in use when did it vreak down",
    "Date",
    "Reasons why the facility is non-functional or not in use or partally functional",
    "Filled up",
    "No Privacy(Doors)",
    "Cracked Floor/Walls",
    "Smelly",
    "Septic Tank full",
    "Blocked droinage",
    "High User Fees",
    "Other",
    "Are there any maintenance/repairs done in past six",
    "If Yes,Give details on the repairs past six months"

  ];

  const handleType = (label, index) => {
    if (FunctionalityStatus[index] === label) {
      const updatedData = { ...FunctionalityStatus };
      delete updatedData[index];
      setFunctionalityStatus(updatedData);
    } else {
      setFunctionalityStatus({ ...FunctionalityStatus, [index]: label });
    }
  };

  return (
    <View>
      {FunctionalityStatusData.map((v, index) => {
        const shouldDisplayInput = [
          0, 5, 7, 6, 15, 17
        ].includes(index);
        const Test =
          (Object.keys(FunctionalityStatus).includes("5") && index == 6) ||
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
                isChecked={FunctionalityStatus[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 5, 7,].includes(index) ? (
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
                    hint={`${v.replace("_Data", "").replace('*','')}`}
                    value={FunctionalityStatus[v]}
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




export default FunctionalityStatus;