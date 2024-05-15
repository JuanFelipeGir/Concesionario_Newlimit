import React from "react";
import {  View, Text, Image, TouchableOpacity } from 'react-native'
import { stylesHome } from '../Components/styles'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleWelcome = () => {
        navigation.navigate('Home')
    }
    
    return (
        <View style={stylesHome.container}>
            <Text style={stylesHome.title}> CONCESIONARIO MALUPE </Text>
            <Text style={stylesHome.text}>Asequibilidad al alcance de su mano</Text>
            <Text style={stylesHome.text}>Los mejores autos de la ciudad</Text>
            <View style={stylesHome.logoContainer}>
                <Image source={require('../assets/logo.png')} style={stylesHome.logo}/>
            </View>
            <TouchableOpacity style={stylesHome.button}  onPress={handleWelcome} >
                <Text style={stylesHome.buttonText}> BIENVENIDO </Text>
            </TouchableOpacity>

        </View>
    )

}

export default HomeScreen