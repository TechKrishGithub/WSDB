import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Operation = ({ Operation, setOperation }) => {
  const OperationData = [
    "Type of Management *",
    "Communal",
    "Private/Individual",
    "Private Operator",
    "Institutional",
    "Other-Specify",
    "Other-Specify_Data",
    "Does this Source have a WSC *",
    "If Yes, When was this WSC Established",
    "Yes - Month/Year of Establishment",
    "No",
    "If Established, Is was the it trained",
    "Yes - Month/Year of Training",
    "No",
    "Is WSC functional",
    "If WSC is Functional, tick applicable box",
    "WSC is collecting user fees",
    "WSC undertakes regular servicing/minor repairs",
    "WSC is holding regular meetings",
    "Environment/sanitation around the source is ok",
    "If WSC is not functional,indicate main reasons why: ",
    "Source Dried Up/Low Yield",
    "WSC Not trained",
    "Majority of Members shifted/moved/Died",
    "Alternative Water facility In place",
    "Source Brokedown beyond means of Community",
    "WSC Not Commited",
    "Other",
    "If WSC exists",
    "No.of members on WSC",
    "No.of active members on WSC",
    "No.of women on WSC",
    "Are there women in key Positions",
    "No.of women holding key positions",
    "Tick applicable position(s) below",
    "Chairperson",
    "Vice-chairperson",
    "Secretary",
    "Treasurer",
  ];

  const handleType = (label, index) => {
    if (Operation[index] === label) {
      const updatedData = { ...Operation };
      delete updatedData[index];
      setOperation(updatedData);
    } else {
      setOperation({ ...Operation, [index]: label });
    }
  };
  return (
    <View>
      {OperationData.map((v, index) => {
        const shouldDisplayInput = [
          0, 6, 9, 8, 11, 12, 15, 20, 27, 28, 29, 30, 31, 33, 34,
        ].includes(index);
        const Test =
          (Object.keys(Operation).includes("5") && index == 6) ||
          ![6].includes(index);
        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={Operation[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 8, 11, 15, 20, 28, 34].includes(index) ? (
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
                    value={Operation[v]}
                    hint={`${v.replace("_Data", "")}`}
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

export default Operation;
