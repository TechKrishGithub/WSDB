import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const VillageGuiad = ({ VillageGuiad, setVillageGuiad }) => {
  const VillageGuiadData = [
    "Village Guiad/Respondent",
    "Name",
    "sex",
    "TelePhone",
    "Responsibility",
  ];

  const handleType = (label, index) => {
    if (VillageGuiad[index] === label) {
      const updatedData = { ...VillageGuiad };
      delete updatedData[index];
      setVillageGuiad(updatedData);
    } else {
      setVillageGuiad({ ...VillageGuiad, [index]: label });
    }
  };

  return (
    <View>
      {VillageGuiadData.map((v, index) => {
        const shouldDisplayInput = [0, 1,2, 3, 4].includes(index);
        const Test =
          (Object.keys(VillageGuiad).includes("5") && index == 6) ||
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
                isChecked={VillageGuiad[index] ? true : false}
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
                  ![0].includes(index) && { marginHorizontal: 16 },
                ]}
              >
                {Test && (
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    value={VillageGuiad[v]}
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

                {index === 2 && (
                  <View style={{ flexDirection: "row" }}>
                    <BouncyCheckbox
                      size={20}
                      fillColor="#134484"
                      style={{ padding: 10 }}
                      text="Male"
                      isChecked={VillageGuiad[v] === "Male"}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ textDecorationLine: "none", color: "#134484" }}
                      onPress={() => handleType("Male", v)}
                    />
                    <BouncyCheckbox
                      size={20}
                      fillColor="#134484"
                      style={{ padding: 10 }}
                      text="Female"
                      isChecked={VillageGuiad[v] === "Female"}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ textDecorationLine: "none", color: "#134484" }}
                      onPress={() => handleType("Female", v)}
                    />
                  </View>
                )}
              </View>
            ) : (
              <Text style={[styles.question, { paddingVertical: 10 }]}>
                {`• ${v}`}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default VillageGuiad;
