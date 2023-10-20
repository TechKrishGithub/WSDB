import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import LocationDetail from './LocationDetail';
import LocationDetailsForAll from '../LocationForAll';
import styles from '../style';
import TypeSystem from './TypeSystem';
import GenralInformation from './GeneralInformation';
import OperationsMaintenance from './OperationsMaintenance';
import OperationalFunction from './OperationalFunction';
import OtherInfoDwo from './OtherInfoDwo';
import EnumeratorsDetails from './EnumeratorsDetails';
import Respondents from './Respondents';
import DataVerifications from './DataVerifications';
import { selectData } from '../../DataBaseHandle';
import { GpsSet } from '../../CustomComponents/GpsCordinates';


const PipedWaterScheme = () => {
    const [activeTabId, setActiveTabId] = useState(1);
    const [Locations, setLocations] = useState({
        SelectionList: { District: '', County: '', SubCounty: '', Parish: '' }, Normal: {
            Village: '',
            Longitude: '',
            Latitude: '',
            Elevation: '',
            Refugee_Campe_Name: '',
        }
    });

    const [locDet, setLocDet] = React.useState([]);

    React.useEffect(() => {
        Gps();
        GetLocDet();
    }, [])

    const Gps = async () => {
        const { latitude, longitude } = await GpsSet();
        const updatedData = { ...Locations };
        updatedData.Normal.Latitude = latitude.toString();
        updatedData.Normal.Longitude = longitude.toString();
        setLocations(updatedData)
    }

    const GetLocDet = async () => {
        const data = await selectData('LocationDetails');
        setLocDet(data)
    }

    const [TypeSystemData, setTypeSystemData] = React.useState({});
    const [GenralInformationData, setGenralInformationData] = React.useState({});
    const [OperationsMaintenanceData, setOperationsMaintenanceData] = React.useState({});
    const [OtherInfoDwoData, setOtherInfoDwoData] = React.useState({});
    const [EnumeratorsDetailsData, setEnumeratorsDetailsData] = React.useState({});
    const [RespondentsData, setRespondentsData] = React.useState({});
    const [OperationalFunctionData, setOperationalFunctionData] = React.useState({});
    const [DataVerificationsData, setDataVerificationsData] = React.useState({});


    const tabs = [

        { id: 1, name: 'Location(Source Location)' },
        { id: 2, name: 'Type System' },
        { id: 3, name: 'General information' },
        { id: 4, name: 'Operation and Maintenance' },
        { id: 5, name: 'Operational Status(Functionally)' },
        { id: 6, name: 'Other Info as reqired by the DWO' },
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



    const tabContents = {
        1: <LocationDetail Locations={Locations} setLocations={setLocations} locDet={locDet} />,
        2: <TypeSystem TypeSystem={TypeSystemData} setTypeSystem={setTypeSystemData} />,
        3: <GenralInformation GenralInformation={GenralInformationData} setGenralInformation={setGenralInformationData} />,
        4: <OperationsMaintenance OperationsMaintenance={OperationsMaintenanceData} setOperationsMaintenance={setOperationsMaintenanceData} />,
        5: <OperationalFunction OperationalFunction={OperationalFunctionData} setOperationalFunction={setOperationalFunctionData} />,
        6: <OtherInfoDwo OtherInfoDwo={OtherInfoDwoData} setOtherInfoDwo={setOtherInfoDwoData} />,
        7: < Respondents Respondents={RespondentsData} setRespondents={setRespondentsData} />,
        8: <EnumeratorsDetails EnumeratorsDetails={EnumeratorsDetailsData} setEnumeratorsDetails={setEnumeratorsDetailsData} />,
        9: <DataVerifications DataVerifications={DataVerificationsData} setDataVerifications={setDataVerificationsData} />

    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
            <View style={styles.Title}>
                <Text style={styles.TitleText}> {`➪  Piped Water Schemes`}</Text>
            </View>
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
