import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const OperationAndMaintenance = ({
  OperationAndMaintenance,
  setOperationAndMaintenance,
}) => {
  const OperationAndMaintenanceData = [
    "Type of Management*",
    "Communal",
    "Private/Individual",
    "Private Operator",
    "Institutional",
    "Other-Specify",
    "Condition of the facility structures",
    "Roof",
    "Wall",
    "Floor",
    "convocy",
    "Other-Specify",
    "Is the Facility Clean",
    "General Condition of the facility",
    "Good",
    "Poor",
    "Bad",
    "Do users pay to use the facility",
    "Tollet",
    "Shower",
    "How often do Users Pay",
    "Per Use",
    "Weekly",
    "Other",
    "Daily",
    "Monthly",
    "Number of User per day",
  ];

  const handleType = (label, index) => {
    if (OperationAndMaintenance[index] === label) {
      const updatedData = { ...OperationAndMaintenance };
      delete updatedData[index];
      setOperationAndMaintenance(updatedData);
    } else {
      setOperationAndMaintenance({ ...OperationAndMaintenance, [index]: label });
    }
  };

  return (
    <View>
      {OperationAndMaintenanceData.map((v, index) => {
        const shouldDisplayInput = [0, 6, 7, 8, 9, 10, 11, 12, 13, 18, 21, 5, 19, 20, 27].includes(
          index
        );
        const Test =
          (Object.keys(OperationAndMaintenance).includes('5') && index === 6) ||
          ![5].includes(index);
        const isOptionalField = ["Roof", "Wall", "Floor"].includes(
          v.replace("_Data", "")
        )

        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={[index == 17 && { paddingTop: 10, paddingLeft: 0 }, { padding: 10 }]}
                text={v}
                isChecked={OperationAndMaintenance[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 6, 10, 12, 13, 21].includes(index) ? (
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
                {Test && ![18, 19].includes(index) ? (
                  <>
                    <FloatingLabelInput
                      label={`${v.replace("_Data", "")}`}
                      hint={`${v.replace("_Data", "").replace('*', '')}`}
                      value={OperationAndMaintenance[v]}
                      onChangeText={(e) => handleType(e, v)}
                      containerStyles={styles.input}
                      inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                      labelStyles={{
                        fontWeight: "bold",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />

                    {isOptionalField && (
                      <View style={{ flexDirection: "row" }}>
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Good"
                          isChecked={OperationAndMaintenance[index] === "Good"}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleType("Good", index)}
                        />
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Poor"
                          isChecked={OperationAndMaintenance[index] === "Poor"}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleType("Poor", index)}
                        />
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Bad"
                          isChecked={OperationAndMaintenance[index] === "Bad"}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleType("Bad", index)}
                        />
                      </View>
                    )}
                  </>
                )
                  :
                  Object.keys(OperationAndMaintenance).includes('17') &&
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    value={OperationAndMaintenance[v]}
                    onChangeText={(e) => handleType(e, v)}
                    inputStyles={{ color: "#134484" }}
                    labelStyles={{
                      fontWeight: "bold",
                      overflow: "hidden",
                      width: "100%",
                    }}
                  />
                }
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

export default OperationAndMaintenance;
