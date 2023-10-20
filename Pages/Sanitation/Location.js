import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from '../style';
import { FloatingLabelInput } from "react-native-floating-label-input";
import AnimatedModalSel from "../../CustomComponents/AmimatedModalSel";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LocationDetailsForAll from "../LocationForAll";

const Location = ({ Locations, setLocations, locDet }) => {
  const handleInputChange = (category, key, value) => {
    const updateData = { ...Locations };
    if (updateData[category][key] == value) {
      updateData[category][key] = '';
      setLocations(updateData);
      return;
    }
    updateData[category][key] = value;
    setLocations(updateData);
  };

  const handleQuestionComment = (index, comment) => {

    setQuestionData({

      ...QuestionData,
      [index]: comment,
    });
  };

  const Question = ["Refugee Campe-Name"];
  const [QuestionData, setQuestionData] = React.useState({});

  return (
    <View style={{}}>
      {Object.keys(Locations).map((v, index) => {
        if (index == 0) {
          return <LocationDetailsForAll v={v} Location={Locations} setLocation={setLocations} locDet={locDet} key={index} />
        } else {
          return Object.keys(Locations[v]).map((k) => (
            <View style={{ marginBottom: 16 }} key={k}>
              {k !== "source" ? (
                <FloatingLabelInput
                  value={Locations[v][k]}
                  hint={`${k}`}
                  label={`${k.replace('_', ' ').replace('_', ' ')} *`}
                  onChangeText={(e) => handleInputChange(v, k, e)}
                  containerStyles={styles.input}
                  inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                  labelStyles={{
                    fontWeight: "bold",
                    overflow: "hidden",
                    width: "100%",
                  }}
                />
              ) : (
                <View style={styles.container}>


                  <Text style={styles.question}>• Type and Name of Public of Place</Text>
                  {Question.map((m, Qindex) => (
                    <View key={Qindex}>
                      <BouncyCheckbox
                        size={20}

                        fillColor="#134484"
                        style={{ padding: 10 }}
                        text={m}
                        isChecked={Locations[v][k] === m ? true : false}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{
                          textDecorationLine: "none",
                          color: "#134484",
                        }}
                        onPress={() => handleInputChange(v, k, m)}
                        disableBuiltInState
                      />
                      {Locations[v][k] === m && (
                        <View style={{ margin: 10 }}>
                          <FloatingLabelInput
                            value={QuestionData[Qindex]}
                            hint={`Enter ${Question[Qindex]}`}
                            label={`${Question[Qindex]} *`}
                            onChangeText={(e) =>
                              handleQuestionComment(Qindex, e)
                            }
                            containerStyles={styles.input}
                            inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                            labelStyles={{
                              fontWeight: "bold",
                              overflow: "hidden",
                              width: "100%",
                            }}
                          />
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ));
        }
      })}
    </View>
  );
};









export default Location;