import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from '../style';
import { IconButton, MD3Colors } from 'react-native-paper';
import LocationDetails from './LocationDetails';
import TypeOfSource from './TypeOfSource';
import Construction from './Construction';
import Operation from './Operation';
import OperationStatus from './OperationStatus';
// import WaterQuality from './WaterQuality';
import VillageGuiad from "./VillageGuiad"
import EnumeratorDetails from './EnumeratorDetails';
import DataVerification from './DataVerification';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { selectData } from '../../DataBaseHandle';
import { GpsSet } from '../../CustomComponents/GpsCordinates';



const PointSource = () => {
    const [activeTabId, setActiveTabId] = useState(1);
    const [locDet, setLocDet] = React.useState([]);
    const [Location, setLocation] = useState({
        SelectionList: { District: '', County: '', SubCounty: '', Parish: '' }, Normal: {
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
        { id: 1, name: 'Location' },
        { id: 2, name: 'Type of Source' },
        { id: 3, name: 'Construction and Ownership' },
        { id: 4, name: 'Operation and Maintenance' },
        { id: 5, name: 'Operational Status(Functionally)' },
        { id: 6, name: 'Water Quality' },
        { id: 7, name: 'Village Guiad/Respondent' },
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


    const WaterQuality = () => {
        return (
            <>

            </>
        )
    }

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
        const data = await selectData('LocationDetails');
        setLocDet(data)
    }


    const tabContents = {
        1: <LocationDetails Location={Location} setLocation={setLocation} locDet={locDet} />,
        2: <TypeOfSource TypeOfSourceData={TypeOfSourceData} setTypeOfSourceData={setTypeOfSourceData} />,
        3: <Construction Construction={ConstructionData} setConstruction={setConstructionData} />,
        4: <Operation Operation={OperationData} setOperation={setOperationData} />,
        5: <OperationStatus OperationStatus={OperationStatusData} setOperationStatus={setOperationStatusData} />,
        // 6: <WaterQuality WaterQuality ={WaterQualityData} setWaterQuality ={setWaterQualityData}/>,
        6: WaterQuality(),
        7: <VillageGuiad VillageGuiad={VillageGuiadData} setVillageGuiad={setVillageGuiadData} />,
        8: <EnumeratorDetails EnumeratorDetails={EnumeratorDetailsData} setEnumeratorDetails={setEnumeratorDetailsData} />,
        9: <DataVerification DataVerification={DataVerificationData} setDataVerification={setDataVerificationData} />
    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
            <View style={styles.Title}>
                <Text style={styles.TitleText}> {`➪  Point Water Source`}</Text>
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

export default PointSource;
