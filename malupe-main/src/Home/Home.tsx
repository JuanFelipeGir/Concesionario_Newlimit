import React from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    const handleDrivingTestRequest = () => {
        navigation.navigate('DrivingTestRequest')
    }
    const handleCatalog = () => {
        navigation.navigate('Catalog')
    }
    const handleDealsandOffers = () => {
        navigation.navigate('DealsAndOffers')
    }
    const handleServiceHistory = () => {
        navigation.navigate('ServiceHistory')
    }
    const handleQuotatingRequest =()=>{
        navigation.navigate('QuotatingRequest')
    }
    const handleContact =()=>{
        navigation.navigate('Contact')
    }
    const handleWorkShop =()=>{
        navigation.navigate('WorkShopService')
    }
    const handleVehicleSearch =()=>{
        navigation.navigate('VehicleSearch')
    }

 
    return (
        <View style={styleHome.container}>
            <ScrollView>
                <View>
                    <Text style={styleHome.title}>BIENVENIDO A MALUPE</Text>
                    <View style={styleHome.imageContainer}>
                        <Image source={require('../assets/silueta.png')} style={styleHome.image}/>
                    </View>
                    <Text style={styleHome.text}>Ruedas como nunca antes</Text>
                    
                    <View style={styleHome.buttonContainer}>
                        <TouchableOpacity style={styleHome.button} onPress={handleCatalog}>
                            <Text style={styleHome.buttonText}> Catalog </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={handleDrivingTestRequest}>
                            <Text style={styleHome.buttonText}> Driving Test Request </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={handleQuotatingRequest}>
                            <Text style={styleHome.buttonText}> Quotating Request </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={handleDealsandOffers}>
                            <Text style={styleHome.buttonText}> Deals And Offers  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button}onPress={handleServiceHistory}>
                            <Text style={styleHome.buttonText}> Service History </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button}onPress={handleVehicleSearch}>
                            <Text style={styleHome.buttonText}> Vehicles Search </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={handleWorkShop}>
                            <Text style={styleHome.buttonText}> Work Shop Service </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={handleContact}>
                            <Text style={styleHome.buttonText}> Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styleHome= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192E50'
    },
    title:{
        color: '#FF4928',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    image: {
        width: 400,
        height: 300,
        marginRight:65,
    },
    imageContainer: {
        backgroundColor: '#192E50',
        width: 500,
        height: 200,
        marginBottom: 15,
        alignItems: 'center',
        marginLeft: 0,
        marginTop: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontStyle:'italic',
        textTransform: 'uppercase',
        marginVertical: 80,
        marginHorizontal:120
    },
    button: {
        backgroundColor: '#A8BAE6',
        width: '80%', 
        height: 50, 
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 30, 
        marginLeft: 45
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flex: 1
    }, 
})

export default Home