import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from '../style';
import data from "../../Constants";
import { FloatingLabelInput } from "react-native-floating-label-input";
import AnimatedModalSel from "../../CustomComponents/AmimatedModalSel";
import DropDownSearch from "../../CustomComponents/DropDownSearch";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from '@expo/vector-icons';
import LocationDetailsForAll from "../LocationForAll";

const LocationDetails = (props) => {
  const { Location, setLocation, locDet } = props;

  const handleInputChange = (category, key, value) => {
    const updateData = { ...Location };
    if (updateData[category][key] == value) {
      updateData[category][key] = '';
      setLocation(updateData);
      return;
    }
    updateData[category][key] = value;
    setLocation(updateData);
    // setLocation({
    //   ...Location,
    //   [category]: {
    //     ...Location[category],
    //     [key]: value,
    //   },
    // });
  };
const handleQuestionComment = (index, comment) => {
    setQuestionData({
      ...QuestionData,
      [index]: comment,
    });
  };

  const handleLocPress = (LocIndex, v, k, arrayOFkeYS) => {
    if (LocIndex == 0) {
      setError(null);
      setVisible(k)
    }
    else {
      if (Location[v][arrayOFkeYS[LocIndex - 1]] == '') {
        setError(LocIndex - 1)
      }
      else {
        setError(null);
        setVisible(k)
      }
    }
  }
const RetriveDataWithUnique = (Field) => {
    const UniqueField = Field.filter((v, index) => Field.indexOf(v) === index);
    return UniqueField;
  }


  const Question = ["Refugee Campe-Name", "(IDP) Campe-Name"];
  const [QuestionData, setQuestionData] = React.useState({});
  const [error, setError] = React.useState();
  const [visible, setVisible] = React.useState();
return (
    <View style={{}}>
      {Object.keys(Location).map((v, index) => {
        if (index == 0) {
          return <LocationDetailsForAll v={v} Location={Location} setLocation={setLocation} locDet={locDet} key={index} />
        } else {
          return Object.keys(Location[v]).map((k) => (
            <View style={{ marginBottom: 16 }} key={k}>
              {k !== "source" ? (
                <FloatingLabelInput
                  value={Location[v][k]}
                  placeholder={`${k} *`}
                  label={`${k} *`}
                  hint={k}
                  containerStyles={styles.input}
                  onChangeText={(e) => handleInputChange(v, k, e)}
                  inputStyles={{ color: '#2b0847', fontWeight: '500' }}
                  labelStyles={{ fontWeight: "bold" }}
                />
              ) : (
                <View style={styles.container}>
                  <Text style={styles.question}>• If the source is in</Text>
                  {Question.map((m, Qindex) => (
                    <View key={Qindex}>
                      <BouncyCheckbox
                        size={20}
                        fillColor="#134484"
                        style={{ padding: 10 }}
                        text={m}
                        isChecked={Location[v][k] === m ? true : false}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{
                          textDecorationLine: "none",
                          color: "#134484",
                        }}
                        onPress={() => handleInputChange(v, k, m)}
                        disableBuiltInState
                      />
                      {Location[v][k] === m && (
                        <View style={{ margin: 10 }}>
                          <FloatingLabelInput
                            value={QuestionData[Qindex]}
                            label={`${Question[Qindex]} *`}
                            hint={`Enter ${Question[Qindex]}`}
                            onChangeText={(e) =>
                              handleQuestionComment(Qindex, e)
                            }
                            containerStyles={styles.input}
                            inputStyles={{ color: '#2b0847', fontWeight: '500' }}
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

export default LocationDetails;
