import React, { useState, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Animated, View, Text, StatusBar, Image } from 'react-native'; // Import StatusBar
import BottomNav from './BottomNav';
import CustomHeaderButton from './CustomHeaderButton';
import UserProfileCard from './UserProfileCard';
import { DataEntry, Update } from '../DrawerScreens';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Profile from './Profile';
import Login from '../Autherization/Login';
import PinAccess from '../Autherization/PinAccess';
import PinGeneration from '../Autherization/PinGeneration';




const MainStack = createStackNavigator();


const MainStackScreen = () => {
    const navigation = useNavigation();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const rotationValue = useRef(new Animated.Value(0)).current;

    const toggleDrawer = () => {
        const newValue = isDrawerOpen ? 0 : 1;
        Animated.timing(rotationValue, {
            toValue: newValue,
            duration: 600,
            useNativeDriver: false,
        }).start();

        navigation.dispatch(DrawerActions.toggleDrawer())
        setIsDrawerOpen(!isDrawerOpen);

    };

    const rotateIcon = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const CustomHeaderTitle = ({ title }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={require('../assets/logo.png')}
                style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Text style={{ color: '#20187f', fontSize: 18 }}>{title}</Text>
        </View>
    );

    const Options = () => ({
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerLeft: () =>
        (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={24} color="#20187f" style={{ paddingHorizontal: 10 }} />
            </TouchableOpacity>
        ),
        headerTintColor: '#20187f'
    })

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#20187f"
                barStyle="light-content"
            />
            <MainStack.Navigator>
                <MainStack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name="PinAccess"
                    component={PinAccess}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name="PinGeneration"
                    component={PinGeneration}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name="WSDB"
                    component={BottomNav}
                    options={{
                        headerTitle: (props) => (
                            <CustomHeaderTitle title="WSDB" />
                        ),
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <View style={{ marginLeft: 10, padding: 5 }}>
                                    <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                                        <Item
                                            title="Menu"
                                            iconName={isDrawerOpen ? 'menu' : 'menu'}
                                            onPress={toggleDrawer}
                                        />
                                    </Animated.View>
                                </View>
                            </HeaderButtons>
                        ),

                        headerRight: () => (
                            <UserProfileCard />
                        ),
                        headerStyle: {
                            elevation: 10, // Add elevation (shadow) here
                            // backgroundColor: '#20187f',
                        },
                        headerTintColor: '#20187f',

                    }}
                />
                <MainStack.Screen
                    name="Data Entry"
                    component={DataEntry}
                    options={Options}
                />
                <MainStack.Screen
                    name="Update"
                    component={Update}
                    options={Options}
                />
                <MainStack.Screen
                    name="Profile"
                    component={Profile}
                    options={Options}
                />
            </MainStack.Navigator>
        </View>
    );
};

export default MainStackScreen;
