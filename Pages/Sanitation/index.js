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
import { selectData } from '../../DataBaseHandle';
import { GpsSet } from '../../CustomComponents/GpsCordinates';

const Sanitation = () => {
    const [activeTabId, setActiveTabId] = useState(1);
    const [Locations, setLocations] = useState({
        SelectionList: { District: '', County: '', SubCounty: '', Parish: '' }, Normal: {
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
        const data = await selectData('LocationDetails');
        setLocDet(data)
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
        { id: 1, name: 'Location' },
        { id: 2, name: 'General information' },
        { id: 3, name: 'Tpye Facility' },
        { id: 4, name: 'Operation and Maintenance' },
        { id: 5, name: 'Functionality Status' },
        { id: 6, name: 'Faecal Sludge Management' },
        { id: 7, name: 'Challenges faced of Users' },
        { id: 8, name: 'Recommendations for Improvement' },
        { id: 9, name: 'Respondent' },
        { id: 10, name: 'Enumerator' },
        { id: 11, name: 'Attach Photos' },

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

        1: <Location Locations={Locations} setLocations={setLocations} locDet={locDet} />,
        2: <GenralInformation GenralInformation={GenralInformationData} setGenralInformation={setGenralInformationData} />,
        3: <TypeOfFacility TypeOfFacility={TypeOfFacilityData} setTypeOfFacility={setTypeOfFacilityData} />,
        4: <OperationAndMaintenance OperationAndMaintenance={OperationAndMaintenanceData} setOperationAndMaintenance={setOperationAndMaintenanceData} />,
        5: <FunctionalityStatus FunctionalityStatus={FunctionalityStatusData} setFunctionalityStatus={setFunctionalityStatusData} />,
        6: <FaecalManagement FaecalManagement={FaecalManagementData} setFaecalManagement={setFaecalManagementData} />,
        7: <ChallengesFacedUsers ChallengesFacedUsers={ChallengesFacedUsersData} setChallengesFacedUsers={setChallengesFacedUsersData} />,
        8: <RecommendationsImprovement RecommendationsImprovement={RecommendationsImprovementData} setRecommendationsImprovement={setRecommendationsImprovementData} />,
        9: <Respondent Respondent={RespondentData} setRespondent={setRespondentData} />,
        10: <Enumerator Enumerator={EnumeratorData} setEnumerator={setEnumeratorData} />,

        11: <AttachPhotos AttachPhotos={AttachPhotosData} setAttachPhotos={setAttachPhotosData} />,

    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
            <View style={styles.Title}>
                <Text style={styles.TitleText}> {`➪  Sanitation`}</Text>
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

export default Sanitation;
