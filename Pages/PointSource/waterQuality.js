import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";



const WaterQuality = ({ WaterQuality, setWaterQuality }) => {

  const WaterQualityData = [
    "In your Oberservation is this Source Free From contamination*",
   
    "If No, Give The Reason (you many tick more than one )",
    "Environment/Catchment Not well maintained",
    "Source not well drained",
    "Animal grazing",
    "Rubbish around source",
    "Other-Specify_Data",
  ];

  const handleType = (label, index) => {
    if (WaterQuality[index] === label) {
      const updatedData = { ...WaterQuality };
      delete updatedData[index];
      setWaterQuality(updatedData);
    } else {
      setWaterQuality({ ...WaterQuality, [index]: label });
    }
  };
  return (
    <View>
      {WaterQualityData.map((v, index) => {
        const shouldDisplayInput = [
          0,6  
        ].includes(index);
        const Test =
          (Object.keys(WaterQuality).includes("6") && index == 6) ||
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
                isChecked={WaterQuality[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484"}}
                onPress={() => handleType(v, index)}
              />
            ) : ![0,].includes(index) ? (
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
                    value={WaterQuality[v]}
                    onChangeText={(e) => handleType(e, v)}
                    inputStyles={{ color: "#134484" }}
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

export default WaterQuality;
