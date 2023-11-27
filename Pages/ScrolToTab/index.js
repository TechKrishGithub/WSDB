import React from 'react';
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native';
import styles from '../style';
import { IconButton, MD3Colors } from 'react-native-paper';
import { MotiView } from 'moti';


const TabCntrls = ({ data, activeTabId, setActiveTabId, title }) => {
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
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.Title}>
                    <Text style={styles.TitleText}> {title}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <IconButton
                        icon="arrow-left"
                        iconColor='#fff'
                        size={20}
                        style={[{ backgroundColor: activeTabId == 0 ? '#ccc' : '#36965d', margin: 15 }]}
                        onPress={handlePreviousTab}
                        disabled={activeTabId == 0}
                    />
                    <IconButton
                        icon="arrow-right"
                        iconColor="#fff"
                        size={20}
                        style={[{ backgroundColor: activeTabId == data.length - 1 ? '#ccc' : '#366997', margin: 15 }]}
                        onPress={handleNextTab}
                        disabled={activeTabId === data.length - 1}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',

            }}>
                <FlatList
                    data={data}
                    initialScrollIndex={activeTabId}
                    horizontal
                    ref={ref}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={v => v.id}
                    renderItem={renderItem}
                />
            </View>

        </View>
    )
}

export default TabCntrls;