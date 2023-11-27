import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Respondents = ({ Respondents, setRespondents }) => {
  const RespondentsData = [
    "Respondents*",
    "Name",
    "Gender",
    "Telephone",
    "Responsibility/Title",

  ];

  const handleType = (label, index) => {
    if (Respondents[index] === label) {
      const updatedData = { ...Respondents };
      delete updatedData[index];
      setRespondents(updatedData);
    } else {
      setRespondents({ ...Respondents, [index]: label });
    }
  };

  const handleGenderChange = (selectedGender) => {
    // Update the "Gender" field in the state
    setRespondents({ ...Respondents, 2: selectedGender });
  };

  return (
    <View>
      {RespondentsData.map((v, index) => {
        const shouldDisplayInput = [0, 1, 2, 3, 4].includes(index);
        const Test =
          (Object.keys(Respondents).includes("5") && index === 6) ||
          ![5].includes(index);

        // Check if the current field is the "Gender" field
        const isGenderField = v === "Gender";

        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={Respondents[index] ? true : false}
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
                  <>
                    <FloatingLabelInput
                      label={`${v.replace("_Data", "")}`}
                      hint={`${v.replace("_Data", "")}`}
                      value={Respondents[v]}
                      onChangeText={(e) => handleType(e, v)}
                      containerStyles={styles.input}
                      inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                      labelStyles={{
                        fontWeight: "bold",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />
                    {isGenderField && (
                      <View style={{ flexDirection: "row" }}>
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Male"
                          isChecked={Respondents[2] === "Male"}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleGenderChange("Male")}
                        />
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Female"
                          isChecked={Respondents[2] === "Female"}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleGenderChange("Female")}
                        />
                      </View>
                    )}
                  </>
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

export default Respondents;
