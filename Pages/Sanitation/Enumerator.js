import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Enumerator = ({ Enumerator, setEnumerator }) => {

  const EnumeratorData = [
    "Enumerator*",
    "Name",
    "Designation/Title",
    "Telephone",
    "Data of Collection",


  ];

  const handleType = (label, index) => {
    if (Enumerator[index] === label) {
      const updatedData = { ...Enumerator };
      delete updatedData[index];
      setEnumerator(updatedData);
    } else {
      setEnumerator({ ...Enumerator, [index]: label });
    }
  };

  return (
    <View>
      {EnumeratorData.map((v, index) => {
        const shouldDisplayInput = [
          0, 1, 2, 3, 4
        ].includes(index);
        const Test =
          (Object.keys(Enumerator).includes("5") && index == 6) ||
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
                isChecked={Enumerator[index] ? true : false}
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
                    hint={`${v.replace("_Data", "").replace('*', '')}`}
                    value={Enumerator[v]}
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




export default Enumerator;