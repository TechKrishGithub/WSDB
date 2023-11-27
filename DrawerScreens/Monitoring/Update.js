import React from 'react';
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager, Pressable, Image } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Data } from './samData';
import Modal from 'react-native-modal'
import { Card } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native';
import { MotiView } from 'moti';
import { StyleSheet } from 'react-native';


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); // Enable LayoutAnimation

const Update = ({ route }) => {
  const { type } = route.params;

  const [selectedOne, setSelectedOne] = React.useState(null);
  const [visible, setVisible] = React.useState(null)

  const DataObjects = {
    New_Id: '', Parish: '', Village: '', Type: '', YoC: '', Source_Name: '', Source_Number: '',
    Functionality: { F: "", Fniu: "", NF: "", D: "" },
    Source_Funder: '',
    WSC_Functional: { Yes: "", No: "" },
    Management: { Fees: "", Rep: "", Meet: "", Env: "" },
    Women_In_Key_Position: { Yes: "", No: "" },
    Contaminated: { Yes: "", No: "" },
    Source_Owner: '',
    On_Premise: { Yes: "", No: "", HH: "" },
    Households_Using_the_source: ''
  }
  const my_Data = Object.keys(DataObjects)
  const listAbbr = { F: 'Functional', Fniu: 'Functional(Not in use)', NF: 'Non-Functional', D: "Decommissioned" }

  const RenderHide = (i, v, item, r) => {
    let check = item == 'Functionality' ? true : false;
    return (
      <View key={i} style={{ flexDirection: 'row' }}>
        <Text style={[styles.ModalContentLabel, !check ? { width: '10%' } :{width:'50%'}]}>{check==true ? listAbbr[r] : r}</Text>
        <Text style={styles.ModalContentData}><Text>➢ </Text> {v[item][r]}</Text>
      </View>)
  }

  const myModal = (v, indexDy) => {
    return (
      <Modal
        isVisible={visible !== null ? true : false}
        animationIn='bounceInUp'
        animationOut='zoomOut'
        backdropOpacity={0.5}
        backdropColor='#000'
        onBackdropPress={() => setVisible(null)}

      >
        <View style={styles.ModalWrapper}>
          {my_Data?.map((item, index) => {
            let check = false;
            if (item == 'Functionality' || item == 'WSC_Functional' || item == 'Management' || item == 'Women_In_Key_Position' || item == 'Contaminated' || item == 'On_Premise') {
              check = true;
            }

            return (
              <MotiView
                from={{ scaleX: 0, translateY: 80 }}
                animate={{ scaleX: 1, translateY: 0 }}
                transition={{ type: 'timing', delay: index * 50 }}
                style={styles.ModalContent}
                key={index}
              >
                <View style={[{ flexDirection: 'row' }, check && { justifyContent: 'space-between' }]}>
                  <Text style={styles.ModalContentLabel}>{item.replace(/_/g, ' ')} </Text>
                  {!check && <Text style={styles.ModalContentData}><Text style={styles.ModalContentLabel}>➪ </Text> {v[item]}</Text>}
                  {check &&
                    <TouchableOpacity
                      onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Apply layout animation
                        if (check) {
                          if (selectedOne?.id == indexDy && selectedOne?.param == item) {
                            setSelectedOne(null);
                          }
                          else {
                            setSelectedOne({ id: indexDy, param: item })
                          }
                        }
                      }}
                    >
                      <Entypo name="info-with-circle" size={24} color="#8d84e9" />
                    </TouchableOpacity>
                  }
                </View>
                {check == true && selectedOne?.param == item &&
                  <View style={{ marginHorizontal: 20 }}>
                    {(selectedOne?.id == indexDy && selectedOne?.param == item) && Object.keys(DataObjects[item]).map((r, i) => {
                      return (
                        RenderHide(i, v, item, r)
                      )
                    })}
                  </View>
                }
              </MotiView>
            )
          })}
          <TouchableOpacity style={styles.ModalCloseBtn}
            onPress={() => setVisible(null)}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', marginHorizontal: 10 }}>Close</Text>
            <AntDesign name="closesquare" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  const RowSet = (label, data) => <View style={styles.RowData}>
    <Text style={[{ fontWeight: 'bold', color: '#134484', width: '30%' }]}>{label}</Text>
    <Text style={[styles.ModalContentData, { width: '70%' }]}> :{data}</Text>
  </View>

  return (
    <View style={styles.container}>
      {visible !== null && myModal(visible.v, visible.indexDy)}
      {/* <Text>Hello, React Monitoring {type} Update!</Text> */}
      <FlatList
        data={Data}
        columnWrapperStyle={{ gap: 10, justifyContent: 'center' }}
        numColumns={2}
        keyExtractor={(_, index) => `Key${index}`}
        renderItem={({ item, index }) => {
          return (
            <MotiView
              style={{ width: '45%' }}
              from={{ opacity: 0, translateY: 300 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', delay: index * 200 }}
            >
              <Pressable
                onPress={() => {
                  if (visible == null) {
                    setVisible({ v: item, indexDy: index })
                  }
                  else {
                    setVisible(null)
                  }
                }}
                key={index}
              >
                <Card
                  containerStyle={{
                    borderRadius: 10,
                    // backgroundColor:`#${Math.ceil(Math.random() * 1000000)}`
                  }}
                >
                  {RowSet('ID', item.New_Id)}
                  {RowSet('Parish', item.Parish)}
                  {RowSet('Village', item.Village)}
                </Card>
              </Pressable>
            </MotiView>
          )
        }}
      />

    </View>
  );
};


export default Update;
