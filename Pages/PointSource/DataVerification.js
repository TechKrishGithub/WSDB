import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const DataVerification = ({ DataVerification, setDataVerification }) => {
  const DataVerificationData = [
    "DataVerification*",
    "Name",
    "Date",
    "Signature",
  ];

  const handleType = (label, index) => {
    if (DataVerification[index] === label) {
      const updatedData = { ...DataVerification };
      delete updatedData[index];
      setDataVerification(updatedData);
    } else {
      setDataVerification({ ...DataVerification, [index]: label });
    }
  };

  return (
    <View>
      {DataVerificationData.map((v, index) => {
        const shouldDisplayInput = [0, 1, 2].includes(index);
        const Test =
          (Object.keys(DataVerification).includes("3") && index == 3) ||
          ![3].includes(index);

        // Check if the current option is "Signature"
        const isSignatureOption = v === "Signature";

        // Check if the "Signature" option is selected as "yes"
        const isSignatureYesSelected =
          DataVerification[index] === "Signature" &&
          DataVerification[index + 1] === "yes";

        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={DataVerification[index] ? true : false}
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
                      value={DataVerification[v]}
                      onChangeText={(e) => handleType(e, v)}
                      containerStyles={styles.input}
                      inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                      labelStyles={{
                        fontWeight: "bold",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />
                    {isSignatureOption && (
                      <View style={{ flexDirection: "row" }}>
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="Yes"
                          isChecked={isSignatureYesSelected}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleType("Signature", index)}
                        />
                        <BouncyCheckbox
                          size={20}
                          fillColor="#134484"
                          style={{ padding: 10 }}
                          text="No"
                          isChecked={!isSignatureYesSelected}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{ textDecorationLine: "none", color: "#134484" }}
                          onPress={() => handleType("Signature", index)}
                        />
                      </View>
                    )}
                    {isSignatureYesSelected && (
                      <TextInput
                        placeholder="Signature Input"
                        onChangeText={(text) => handleType(text, v)}
                        value={DataVerification[v]}
                        style={{ borderColor: "#134484", borderWidth: 1, padding: 8 }}
                      />
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

export default DataVerification;
