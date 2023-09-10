import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import data from '../../Constants';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import ModalSelectorCus from '../../CustomComponents/ModalSelectorCus';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const LocationDetails = ({ Location, setLocation }) => {

    const handleInputChange = (category, key, value) => {
        setLocation({
            ...Location,
            [category]: {
                ...Location[category],
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


    const Question = ['Refugee Campe-Name', '(IDP) Campe-Name'];
    const [QuestionData, setQuestionData] = React.useState({})

    return (
        <View style={{}}>
            {Object.keys(Location).map((v, index) => {
                if (index == 0) {
                    return (
                        Object.keys(Location[v]).map(k => (
                            <ModalSelectorCus
                                key={k}
                                data={data[k]}
                                initValue={`${k} *`}
                                onChange={(e) => handleInputChange(v, k, e)}
                                value={Location[v][k]}
                            />
                        ))
                    )
                }
                else {
                    return (
                        Object.keys(Location[v]).map(k => (
                            <View style={{ marginBottom: 16 }} key={k}>
                                {k !== 'source' ?
                                    <FloatingLabelInput
                                        value={Location[v][k]}
                                        placeholder={`${k} *`}
                                        label={`${k} *`}
                                        onChangeText={(e) => handleInputChange(v, k, e)}
                                        inputStyles={{ color: '#134484' }}
                                        labelStyles={{ fontWeight: 'bold' }}
                                    />
                                    :
                                    <View style={styles.container}>
                                        <Text style={styles.question}>• If the source is in</Text>
                                        {Question.map((m, Qindex) => (
                                            <View
                                                key={Qindex}
                                            >
                                                <BouncyCheckbox
                                                    size={20}
                                                    fillColor="#134484"
                                                    style={{ padding: 10 }}
                                                    text={m}
                                                    isChecked={Location[v][k] === m ? true : false}
                                                    innerIconStyle={{ borderWidth: 2 }}
                                                    textStyle={{ textDecorationLine: 'none', color: '#134484' }}
                                                    onPress={() => handleInputChange(v, k, m)}
                                                    disableBuiltInState
                                                />
                                                {Location[v][k] === m &&
                                                    <View style={{ margin: 10 }}>
                                                        <FloatingLabelInput
                                                            value={QuestionData[Qindex]}
                                                            placeholder={`Enter ${Qindex} *`}
                                                            label={`${Question[Qindex]} *`}
                                                            onChangeText={(e) => handleQuestionComment(Qindex, e)}
                                                            inputStyles={{ color: '#134484' }}
                                                            labelStyles={{ fontWeight: 'bold' }}
                                                        />
                                                    </View>
                                                }
                                            </View>
                                        ))}
                                    </View>
                                }
                            </View>
                        ))
                    )
                }
            })}
        </View>
    )
}


export default LocationDetails;