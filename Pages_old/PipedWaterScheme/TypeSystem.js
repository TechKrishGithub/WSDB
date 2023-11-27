import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const TypeSystem = ({ TypeSystem, setTypeSystem }) => {

  const TypeSystemData = [
    "Type Of System/scheme",
    "Groundwater based(GWB)",
    "Surface Water Based(SWB)",
    "Combined Ground & Surface Water Based(GWB/SWB)",
    "Local ID number of piped system/scheme",
    "Name of Piped System/Scheme",
    "Energy Source for Pumping(Combinations are possible)",
    "Gravlty FlowScheme",
    "National Grid/Electricity",
    "Windmill",
    "Generator/Diesel",
    "Solar Powered",
    "Hybrid",
    "Does the scheme have a Surface Water source",
    "If Yes, give type and named of source",
    "Lake,indcate name",
    "River,indcate name",
    "Wetland/Swamp-name",
    "Does the scheme have a Ground Water source",
    "If Yes, given type, Name and Number",
    "Borehole/Production Well(s)",
    "indcate DWDno(s)",
    "Spring(s),indcate name(S)",
    "Other-given type&name",
    "Source of funding",
    "GoU-Central Govt specify",
    "GoU-Local Govt specify",
    "NGO- Give name",
    "Partnership -Give name",
    "Other-specify"
  ];

  const handleType = (label, index) => {
    if (TypeSystem[index] === label) {
      const updatedData = { ...TypeSystem };
      delete updatedData[index];
      setTypeSystem(updatedData);
    } else {
      setTypeSystem({ ...TypeSystem, [index]: label });
    }
  };

  return (
    <View>
      {TypeSystemData.map((v, index) => {
        const shouldDisplayInput = [
          0, 6, 24, 4, 5, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 13
        ].includes(index);
        const Test =
          (Object.keys(TypeSystem).includes("0") && index == 0) ||
          ![0].includes(index);
        return (
          <View key={index}>
            {!shouldDisplayInput ? (
              <BouncyCheckbox
                size={20}
                key={index}
                fillColor="#134484"
                style={{ padding: 10 }}
                text={v}
                isChecked={TypeSystem[index] ? true : false}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ textDecorationLine: "none", color: "#134484" }}
                onPress={() => handleType(v, index)}
              />
            ) : ![0, 6, 24, 13].includes(index) ? (
              <View
                style={[
                  {
                    marginVertical: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "scroll",
                  },
                  ![0, 6].includes(index) && { marginHorizontal: 16 },
                ]}
              >
                {Test && (
                  <FloatingLabelInput
                    label={`${v.replace("_Data", "")}`}
                    hint={`${v.replace("_Data", "")}`}
                    value={TypeSystem[v]}
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




export default TypeSystem;