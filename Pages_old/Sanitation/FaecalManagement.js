import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const FaecalManagement = ({ FaecalManagement, setFaecalManagement }) => {

  const FaecalManagementData = [
    "Has this facility ever required emptying",
    "when it got full*",
    "If Yes on6.1,Frequency of emptying (choose one)",
    "Monthly",
    "Quarterly",
    "B1-Annually",
    "Annually",
    "When Need arises",
    "If Yes on 6.1,What was the emptying Technology and at how much did it cost",
    "Gulper Technology",
    "Cess Pool/Vaccum Vehide",
    "Manual",
    "Other",
    "If No on 6.1,How do you manage feacal Sludge",
    "Add/Use Chemikals",
    "Abandon and Bulld new one",
    "Other-specify",
    "If this facility is connected to a sewar, what kind of sewar does it use",
    "Off-site(i.e sewar System/Line)",
    "On-site(e.g Septic Tank,Bio-digestor etc)"

  ];

  const handleType = (label, index) => {
    if (FaecalManagement[index] === label) {
      const updatedData = { ...FaecalManagement };
      delete updatedData[index];
      setFaecalManagement(updatedData);
    } else {
      setFaecalManagement({ ...FaecalManagement, [index]: label });
    }
  };

  return (
    <View>
      {FaecalManagementData.map((v, index) => {
        const shouldDisplayInput = [
          0, 2, 13, 17, 8, 9, 10, 11, 12, 16,
        ].includes(index);
        const Test =
          (Object.keys(FaecalManagement).includes("5") && index == 6) ||
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
                isChecked={FaecalManagement[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 2, 8, 13, 17,].includes(index) ? (
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
                    value={FaecalManagement[v]}
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




export default FaecalManagement;