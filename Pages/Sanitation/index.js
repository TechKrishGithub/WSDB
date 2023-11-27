import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from '../style';
import { IconButton, MD3Colors } from 'react-native-paper';
import Location from './Location';
import GenralInformation from './GeneralInformation';
import TypeOfFacility from './TypeOfFacility';
import OperationAndMaintenance from './OperationsAndMaintenance';
import FunctionalityStatus from './FunctionalityStatus';
import FaecalManagement from './FaecalManagement';
import ChallengesFacedUsers from './ChallengesFacedUsers';
import RecommendationsImprovement from './RecommendationsImprovement';
import Respondent from './Respondent';
import Enumerator from './Enumerator';
import AttachPhotos from './AttachPhotos';
import { GpsSet } from '../../CustomComponents/GpsCordinates';
import TabCntrls from '../ScrolToTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sanitation = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [Locations, setLocations] = useState({
        SelectionList: { districtname: '', countyname: '', subcountyname: '', parishname: '' }, Normal: {
            Village: '',
            Longitude: '',
            Latitude: '',
            Elevation: '',
            source: '',
            Market_Name: '',
            Hosptial_Name: '',
            TaxiPark_Name: '',
            Education_Center_Name: '',
            Londing_Site_Name: '',
            Rood_Side_Name: '',
            Public_Office_Name: '',
            Church_And_Masque: '',
            Other_Name: ''
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
        const data = await AsyncStorage.getItem('LocationDetails');
        setLocDet(JSON.parse(data))
    }

    const [GenralInformationData, setGenralInformationData] = React.useState({});
    const [TypeOfFacilityData, setTypeOfFacilityData] = React.useState({});
    const [OperationAndMaintenanceData, setOperationAndMaintenanceData] = React.useState({});
    const [FunctionalityStatusData, setFunctionalityStatusData] = React.useState({});
    const [FaecalManagementData, setFaecalManagementData] = React.useState({});
    const [ChallengesFacedUsersData, setChallengesFacedUsersData] = React.useState({});
    const [RecommendationsImprovementData, setRecommendationsImprovementData] = React.useState({});
    const [EnumeratorData, setEnumeratorData] = React.useState({});
    const [RespondentData, setRespondentData] = React.useState({});
    const [AttachPhotosData, setAttachPhotosData] = React.useState({});


    const tabs = [
        { id: 0, name: 'Location' },
        { id: 1, name: 'General information' },
        { id: 2, name: 'Tpye Facility' },
        { id: 3, name: 'Operation and Maintenance' },
        { id: 4, name: 'Functionality Status' },
        { id: 5, name: 'Faecal Sludge Management' },
        { id: 6, name: 'Challenges faced of Users' },
        { id: 7, name: 'Recommendations for Improvement' },
        { id: 8, name: 'Respondent' },
        { id: 9, name: 'Enumerator' },
        { id: 10, name: 'Attach Photos' },

    ];


    const tabContents = {

        0: <Location Locations={Locations} setLocations={setLocations} locDet={locDet} />,
        1: <GenralInformation GenralInformation={GenralInformationData} setGenralInformation={setGenralInformationData} />,
        2: <TypeOfFacility TypeOfFacility={TypeOfFacilityData} setTypeOfFacility={setTypeOfFacilityData} />,
        3: <OperationAndMaintenance OperationAndMaintenance={OperationAndMaintenanceData} setOperationAndMaintenance={setOperationAndMaintenanceData} />,
        4: <FunctionalityStatus FunctionalityStatus={FunctionalityStatusData} setFunctionalityStatus={setFunctionalityStatusData} />,
        5: <FaecalManagement FaecalManagement={FaecalManagementData} setFaecalManagement={setFaecalManagementData} />,
        6: <ChallengesFacedUsers ChallengesFacedUsers={ChallengesFacedUsersData} setChallengesFacedUsers={setChallengesFacedUsersData} />,
        7: <RecommendationsImprovement RecommendationsImprovement={RecommendationsImprovementData} setRecommendationsImprovement={setRecommendationsImprovementData} />,
        8: <Respondent Respondent={RespondentData} setRespondent={setRespondentData} />,
        9: <Enumerator Enumerator={EnumeratorData} setEnumerator={setEnumeratorData} />,
        10: <AttachPhotos AttachPhotos={AttachPhotosData} setAttachPhotos={setAttachPhotosData} />,

    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >

            <TabCntrls data={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} title={`➪  Sanitation`} />

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

export default Sanitation;
