import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../style';
import { IconButton, MD3Colors } from 'react-native-paper';
import { MotiView } from 'moti';

const TabCntrls = ({ data, activeTabId, setActiveTabId }) => {
    const ref = React.useRef();

    React.useEffect(() => {
        ref.current?.scrollToIndex({
            index: activeTabId,
            animated: true,
            viewPosition: 0.5
        })
    }, [activeTabId])

    const handleNextTab = () => {
        if (activeTabId == data.length - 1) {
            return
        }
        else {
            setActiveTabId(activeTabId + 1)
        }
    };

    const handlePreviousTab = () => {
        if (activeTabId == 0) {
            return
        }
        else {
            setActiveTabId(activeTabId - 1)
        }
    };


    const renderItem = ({ item, index }) => {
        return (
            <MotiView
                style={[
                    styles.tabContent]}
                animate={{
                    backgroundColor: activeTabId === item.id ? 'lightblue' : 'white',
                    opacity: activeTabId === item.id ? 1 : 0.5,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setActiveTabId(item.id)
                    }}
                >
                    <Text style={styles.tabText}>{item.name}</Text>
                </TouchableOpacity>
            </MotiView>
        )
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <IconButton
                icon="arrow-left"
                iconColor='#fff'
                size={20}
                style={[{ backgroundColor: activeTabId == 0 ? '#ccc' : '#36965d' }]}
                onPress={handlePreviousTab}
                disabled={activeTabId == 0}
            />
            <FlatList
                data={data}
                initialScrollIndex={activeTabId}
                horizontal
                ref={ref}
                showsHorizontalScrollIndicator={false}
                keyExtractor={v => v.id}
                renderItem={renderItem}
            />
            <IconButton
                icon="arrow-right"
                iconColor="#fff"
                size={20}
                style={[{ backgroundColor: activeTabId == data.length - 1 ? '#ccc' : '#366997' }]}
                onPress={handleNextTab}
                disabled={activeTabId === data.length - 1}
            />

        </View>
    )
}

export default TabCntrls;