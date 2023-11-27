import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from '../style';
import data from "../../Constants";
import { FloatingLabelInput } from "react-native-floating-label-input";
import AnimatedModalSel from "../../CustomComponents/AmimatedModalSel";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LocationDetailsForAll from "../LocationForAll";

const LocationDetail = ({ Locations, setLocations,locDet }) => {
  const handleInputChange = (category, key, value) => {

    setLocations({
      ...Locations,
      [category]: {
        ...Locations[category],
        [key]: value,
      },
    });
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
                  label={`${k.replace('_', ' ').replace('_', ' ').replace('_', ' ')
                  .replace('_', ' ').replace('_', ' ').replace('_', ' ')
                  .replace('_', ' ').replace('_', ' ')
                  } *`}
                  hint={`${k}`}
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


                  <Text style={styles.question}>•If this scheme In a Refugee Camp*</Text>
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
                            placeholder={`Enter ${Qindex} *`}
                            label={`${Question[Qindex]} *`}
                            onChangeText={(e) =>
                              handleQuestionComment(Qindex, e)
                            }
                            inputStyles={{ color: "#134484" }}
                            labelStyles={{ fontWeight: "bold" }}
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









export default LocationDetail;
