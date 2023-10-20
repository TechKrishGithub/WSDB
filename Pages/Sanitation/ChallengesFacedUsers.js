import React from "react";
import { View, Text } from "react-native";
import styles from '../style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";

const ChallengesFacedUsers = ({ ChallengesFacedUsers, setChallengesFacedUsers }) => {

  const ChallengesFacedUsersData = [
    "What are the current challenges of Usage for Users",
    "User Fees are high",
    "Most people unaware of how to use facility",
    "Users unwilling to pay for maintenance",
    "Water Supply is intermitent",
    "No Privacy (No Doors,cracked walls etc)",
    "No separation between Male/Female",
    "No access at Night",
    "Not security for Users",
    "Has Construction Defets (no rump,small stance etc)",
    "Dirty Facility",
    "Poor Customer Care",
    "Other Specify"
  ];

  const handleType = (label, index) => {
    if (ChallengesFacedUsers[index] === label) {
      const updatedData = { ...ChallengesFacedUsers };
      delete updatedData[index];
      setChallengesFacedUsers(updatedData);
    } else {
      setChallengesFacedUsers({ ...ChallengesFacedUsers, [index]: label });
    }
  };

  return (
    <View>
      {ChallengesFacedUsersData.map((v, index) => {
        const shouldDisplayInput = [
          0, 12
        ].includes(index);
        const Test =
          (Object.keys(ChallengesFacedUsers).includes("5") && index == 6) ||
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
                isChecked={ChallengesFacedUsers[index] ? true : false}
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
                    value={ChallengesFacedUsers[v]}
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




export default ChallengesFacedUsers;