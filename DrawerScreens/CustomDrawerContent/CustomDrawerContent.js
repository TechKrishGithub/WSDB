import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const CustomDrawerContent = ({ navigation }) => {
    const data = ['Dashboard', 'Data Entry', 'Update'];
    const drawerStatus = useDrawerStatus();
    const [isExp, setExp] = React.useState(null)
    const subData = ['Point Water Source', 'Piped Water Schemes', 'Sanitation'];

    const icons = ['dashboard', 'instalod', 'watchman-monitoring']

    const subIcons = ['water-polo', 'water-outline', 'hand-water']

    const colors = ['#352ea1', '#f66920', '#14635c']

    const handleCardPress = (v) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExp(isExp === v ? null : v);
    };

    const handleNav = (v, m) => {
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate(v, { type: m })
    }

    React.useEffect(() => {
        drawerStatus == 'closed' && setExp(null);
    }, [drawerStatus])

    return (
        <View style={styles.container}>
            {data.map((v, index) => (
                <View
                    key={index}
                >
                    <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => {

                            v !== 'Dashboard' ? handleCardPress(v) : handleNav(v);
                        }
                        }
                    >
                        {v == 'Dashboard' &&
                            <MaterialIcons name="dashboard" size={20} color="#808080" />
                        }
                        {
                            v !== 'Dashboard' &&
                            <FontAwesome5 name={icons[index]} size={20} color="#808080" />
                        }

                        <Text style={styles.drawerText}>{v}</Text>

                    </TouchableOpacity >
                    {isExp == v &&
                        <View
                            style={{ marginHorizontal: 40 }}
                        >
                            {subData.map((m, mIndex) =>
                                <TouchableOpacity
                                    key={mIndex}
                                    onPress={() => handleNav(v, m)}
                                    style={{
                                        margin: 5,
                                        paddingVertical: 8,
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <MaterialCommunityIcons name={subIcons[mIndex]} size={18} color={colors[mIndex]} style={{ marginHorizontal: 5 }} />
                                    <Text style={{ color: colors[mIndex], fontSize: 10, fontWeight: 'bold' }}>{m}</Text>

                                </TouchableOpacity>
                            )}</View>}
                </View>
            ))
            }
        </View >
    );
};


export default CustomDrawerContent;
