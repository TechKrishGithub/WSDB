import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your authentication logic here
        console.log('Username:', username);
        console.log('Password:', password);
        navigation.navigate('PinAccess')
    };

    return (
        <ImageBackground
            source={require('../../assets/waterBackground.jpg')} // Replace with your background image
            style={styles.backgroundImage}
        >
            <LinearGradient
                colors={[
                    'rgba(32, 24, 127, 1)',
                    'rgba(32, 24, 127, 0.5)',
                    'rgba(32, 24, 127, 0.3)',
                    'rgba(32, 24, 127, 0.1)'
                ]}
                style={styles.container}
            >
                <View style={styles.overlay}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/logo.png')} style={styles.logo} />
                        <Text style={styles.logoText}>WSDB</Text>
                    </View>

                    <View style={styles.logoContainer}>
                        <Text style={styles.subLogoText}> Ministry of Water & Environment</Text>
                    </View>

                    <View style={[styles.inputContainer, styles.textInput]}>
                        <Hoshi
                            label={'Username'}
                            borderColor={'#c3fbed'}
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                            style={styles.input}
                            color="#fff"
                            labelStyle={customLabelStyle} // Apply custom label styles here
                        />
                        <Icon name="user" size={20} color="#c3fbed" style={styles.icon} />
                    </View>

                    <View style={[styles.inputContainer, styles.textInput]}>
                        <Hoshi
                            label={'Password'}
                            borderColor={'#e2fac3'}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry
                            style={styles.input}
                            color="#fff"
                            labelStyle={customLabelStyle} // Apply custom label styles here
                        />
                        <Icon name="lock" size={20} color="#e2fac3" style={styles.icon} />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const customLabelStyle = {
    color: '#c3dbfa',       // Label text color
    fontSize: 16,        // Label font size
    fontWeight: 'bold' // Label font weight
};


export default Login;
