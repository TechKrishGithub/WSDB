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
import TabCntrls from '../ScrolToTab';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PipedWaterScheme = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [Locations, setLocations] = useState({
        SelectionList: { districtname: '', countyname: '', subcountyname: '', parishname: '' }, Normal: {
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
        // const data = await selectData('LocationDetails');
        const data1 = await AsyncStorage.getItem('LocationDetails');
        const data = JSON.parse(data1);
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

        { id: 0, name: 'Location(Source Location)' },
        { id: 1, name: 'Type System' },
        { id: 2, name: 'General information' },
        { id: 3, name: 'Operation and Maintenance' },
        { id: 4, name: 'Operational Status(Functionally)' },
        { id: 5, name: 'Other Info as reqired by the DWO' },
        { id: 6, name: 'Respondent' },
        { id: 7, name: 'Enumerator Details' },
        { id: 8, name: 'Data Verification' },

    ];



    const tabContents = {
        0: <LocationDetail Locations={Locations} setLocations={setLocations} locDet={locDet} />,
        1: <TypeSystem TypeSystem={TypeSystemData} setTypeSystem={setTypeSystemData} />,
        2: <GenralInformation GenralInformation={GenralInformationData} setGenralInformation={setGenralInformationData} />,
        3: <OperationsMaintenance OperationsMaintenance={OperationsMaintenanceData} setOperationsMaintenance={setOperationsMaintenanceData} />,
        4: <OperationalFunction OperationalFunction={OperationalFunctionData} setOperationalFunction={setOperationalFunctionData} />,
        5: <OtherInfoDwo OtherInfoDwo={OtherInfoDwoData} setOtherInfoDwo={setOtherInfoDwoData} />,
        6: <Respondents Respondents={RespondentsData} setRespondents={setRespondentsData} />,
        7: <EnumeratorsDetails EnumeratorsDetails={EnumeratorsDetailsData} setEnumeratorsDetails={setEnumeratorsDetailsData} />,
        8: <DataVerifications DataVerifications={DataVerificationsData} setDataVerifications={setDataVerificationsData} />

    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
            <View style={styles.Title}>
                <Text style={styles.TitleText}> {`➪ Piped Water Schemes`}</Text>
            </View>
            <TabCntrls
                data={tabs}
                activeTabId={activeTabId}
                setActiveTabId={setActiveTabId}
            />
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
