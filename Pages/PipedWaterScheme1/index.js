import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { IconButton, MD3Colors } from 'react-native-paper';
import LocationDetails from '../PointSource/LocationDetails';


const PipedWaterScheme = () => {

    const [activeTabId, setActiveTabId] = useState(1);

    const [Location, setLocation] = useState({
        SelectionList: { District: '', County: '', SubCounty: '', Parish: '' }, Normal: {
            Village: '',
            Longitude: '',
            Latitude: '',
            Elevation: '',
            source: ''
        }
    });


    const tabs = [
        { id: 1, name: 'Water Source Location' },
        { id: 2, name: 'Type of System' },
        { id: 3, name: 'General Information' },
        { id: 4, name: 'Operation and Maintenance' },
        { id: 5, name: 'Operational Status(Functionally)' },
        { id: 6, name: 'Other Info as required by the DWO' },
        { id: 7, name: 'Respondent' },
        { id: 8, name: 'Enumerator Details' },
        { id: 9, name: 'Data Verification' },
    ];

    const scrollViewRef = useRef(null);

    const handleTabPress = (tabId) => {
        setActiveTabId(tabId);
        const tab = tabs.find((t) => t.id === tabId);
        if (tab) {
            scrollViewRef.current.scrollTo({ x: tabPosition(tab.id) - 20, animated: true });
        }
    };

    const tabPosition = (tabId) => {
        const index = tabs.findIndex((t) => t.id === tabId);
        return (index >= 0 ? index : 0) * 150;
    };

    const handleNextTab = () => {
        const nextTabId = activeTabId + 1;
        if (nextTabId <= tabs.length) {
            setActiveTabId(nextTabId);
            const tab = tabs.find((t) => t.id === nextTabId);
            if (tab) {
                scrollViewRef.current.scrollTo({ x: tabPosition(tab.id) - 20, animated: true });
            }
        }
    };

    const handlePreviousTab = () => {
        const previousTabId = activeTabId - 1;
        if (previousTabId >= 1) {
            setActiveTabId(previousTabId);
            const tab = tabs.find((t) => t.id === previousTabId);
            if (tab) {
                scrollViewRef.current.scrollTo({ x: tabPosition(tab.id) - 20, animated: true });
            }
        }
    };

    const TypeOfSystem = () => {
        <>
        </>
    }

    const GeneralInfo = () => {
        <>
        </>
    }

    const OperationMain = () => {
        <>
        </>
    }

    const OperationStatus = () => {
        <>
        </>
    }

    const OtherInfo = () => {
        <>
        </>
    }

    const Respondent = () => {
        <>
        </>
    }

    const EnumeratorDetails = () => {
        <>
        </>
    }

    const DataVerification = () => {
        <>
        </>
    }

    const tabContents = {
        1: <LocationDetails Location={Location} setLocation={setLocation} />,
        2: TypeOfSystem(),
        3: GeneralInfo(),
        4: OperationMain(),
        5: OperationStatus(),
        6: OtherInfo(),
        7: Respondent(),
        8: EnumeratorDetails(),
        9: DataVerification()

    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <IconButton
                    icon="arrow-left"
                    iconColor='blue'
                    size={20}
                    onPress={handlePreviousTab}
                    disabled={activeTabId === 1}
                />
                <ScrollView
                    horizontal
                    ref={scrollViewRef}
                    contentContainerStyle={{ paddingHorizontal: 20, elevation: 10 }}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                >
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab.id}
                            onPress={() => handleTabPress(tab.id)}
                            style={[
                                styles.tabContent,
                                { backgroundColor: activeTabId === tab.id ? 'lightblue' : 'white' },
                            ]}
                        >
                            <Text style={styles.tabText}>{tab.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <IconButton
                    icon="arrow-right"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={handleNextTab}
                    disabled={activeTabId === tabs.length}
                />

            </View>
            <ScrollView
                keyboardShouldPersistTaps="always"
            >
                <View style={{ padding: 20 }}>
                    {tabContents[activeTabId]}
                </View>
            </ScrollView>

        </View>
    );
};

export default PipedWaterScheme;
