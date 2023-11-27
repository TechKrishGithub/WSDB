import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const OperationsMaintenance = ({ OperationsMaintenance, setOperationsMaintenance }) => {

  const OperationsMaintenanceData = [
    "Type of Management/Operator",
    "Communal",
    "Water and Sanitation Committee(WSC)",
    "Private Operator -Name",
    "NWSC",
    "Water Board",
    "Other-Specify",
    "Is a Water Board9WB)/wSC in place ?",
    "Is a WB/WSC in functional ?",
    "If Functionality, does the WB/WSC do the following*",
    "WB/WSC holds quarterly meetings",
    "WB/WSC undertakes monitoring visits",
    "WB/WSC checks books of accounts of the operator",
    "If WB/WSC is not functional,indicate main reasons why*",
    "Facility Gazezzetted",
    "Water System Non-functional/partially Functional",
    "WB Not trained",
    "WB/ Not Committed",
    "Altemative Water facilityNearby",
    "Facility Brokedown beyond means of WB",
    "Majority of Members shifted/moved/Died",
    "Other",
    "No of members on WB/WSC",
    "No of active members on WB/WSC",
    "No of women on WB/WSC",
    "Are there women in key positions",
    "No of women holding key positions",
    "Chairperson",
    "vice-Chairperson",
    "Secretary",
    "Treasurer",
    "Attach Photos",
    "Attach Office Photo",
    "Attach Reservoir Photo",
    "Attach Intake Photo",
    "Attach kiosk/Public Tap Stand Photo"
  ];

  const handleType = (label, index) => {
    if (OperationsMaintenance[index] === label) {
      const updatedData = { ...OperationsMaintenance };
      delete updatedData[index];
      setOperationsMaintenance(updatedData);
    } else {
      setOperationsMaintenance({ ...OperationsMaintenance, [index]: label });
    }
  };

  return (
    <View>
      {OperationsMaintenanceData.map((v, index) => {
        const shouldDisplayInput = [
          0, 9, 31, 13, 3, 6, 21, 22, , 23, 24, 26, 32, 33, 34, 35
        ].includes(index);
        const Test =
          (Object.keys(OperationsMaintenance).includes("5") && index == 6) ||
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
                isChecked={OperationsMaintenance[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 9, 13, 31].includes(index) ? (
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
                    value={OperationsMaintenance[v]}
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





export default OperationsMaintenance;