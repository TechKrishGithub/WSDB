import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import styles from '../style';
import { IconButton, MD3Colors } from 'react-native-paper';
import LocationDetails from './LocationDetails';
import TypeOfSource from './TypeOfSource';
import Construction from './Construction';
import Operation from './Operation';
import OperationStatus from './OperationStatus';
import WaterQuality from './waterQuality';
import VillageGuiad from './VillageGuiad';
import EnumeratorDetails from './EnumeratorDetails';
import DataVerification from './DataVerification';
import { GpsSet } from '../../CustomComponents/GpsCordinates';
import TabCntrls from '../ScrolToTab';
import AsyncStorage from '@react-native-async-storage/async-storage';



const PointSource = () => {

    const [activeTabId, setActiveTabId] = useState(0);
    const [locDet, setLocDet] = React.useState([]);
    const [Location, setLocation] = useState({
        SelectionList: { districtname: '', countyname: '', subcountyname: '', parishname: '' }, Normal: {
            Village: '',
            Longitude: '',
            Latitude: '',
            Elevation: '',
            source: ''
        }
    });
    const [TypeOfSourceData, setTypeOfSourceData] = React.useState({});
    const [ConstructionData, setConstructionData] = React.useState({});
    const [OperationData, setOperationData] = React.useState({});
    const [OperationStatusData, setOperationStatusData] = React.useState({});
    const [WaterQualityData, setWaterQualityData] = React.useState({});
    const [VillageGuiadData, setVillageGuiadData] = React.useState({});
    const [EnumeratorDetailsData, setEnumeratorDetailsData] = React.useState({});
    const [DataVerificationData, setDataVerificationData] = React.useState({});


    const tabs = [
        { id: 0, name: 'Location' },
        { id: 1, name: 'Type of Source' },
        { id: 2, name: 'Construction and Ownership' },
        { id: 3, name: 'Operation and Maintenance' },
        { id: 4, name: 'Operational Status(Functionally)' },
        { id: 5, name: 'Water Quality' },
        { id: 6, name: 'Village Guiad/Respondent' },
        { id: 7, name: 'Enumerator Details' },
        { id: 8, name: 'Data Verification' },

    ];


    React.useEffect(() => {
        Gps();
        GetLocDet();
    }, [])

    const Gps = async () => {
        const { latitude, longitude } = await GpsSet();
        const updatedData = { ...Location };
        updatedData.Normal.Latitude = latitude.toString();
        updatedData.Normal.Longitude = longitude.toString();
        setLocation(updatedData)
    }

    const GetLocDet = async () => {
        // const data = await selectData('LocationDetails');
        const data = await AsyncStorage.getItem('LocationDetails');
        setLocDet(JSON.parse(data))
    }

    const tabContents = {
        0: <LocationDetails Location={Location} setLocation={setLocation} locDet={locDet} />,
        1: <TypeOfSource TypeOfSourceData={TypeOfSourceData} setTypeOfSourceData={setTypeOfSourceData} />,
        2: <Construction Construction={ConstructionData} setConstruction={setConstructionData} />,
        3: <Operation Operation={OperationData} setOperation={setOperationData} />,
        4: <OperationStatus OperationStatus={OperationStatusData} setOperationStatus={setOperationStatusData} />,
        5: <WaterQuality WaterQuality={WaterQualityData} setWaterQuality={setWaterQualityData} />,
        6: <VillageGuiad VillageGuiad={VillageGuiadData} setVillageGuiad={setVillageGuiadData} />,
        7: <EnumeratorDetails EnumeratorDetails={EnumeratorDetailsData} setEnumeratorDetails={setEnumeratorDetailsData} />,
        8: <DataVerification DataVerification={DataVerificationData} setDataVerification={setDataVerificationData} />,
    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >

            <TabCntrls data={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} title={`➪  Point Water Source`} />

            <ScrollView
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <View style={{ padding: 20 }}>
                    {tabContents[activeTabId]}
                </View>
            </ScrollView>

        </View>
    );
};

export default PointSource;
