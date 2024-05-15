import React from 'react'
import { View,Image,Text } from 'react-native'
import { stylesHome } from './styles'

const DealsAndOffers = () => {
  
  return (
    <View style={stylesHome.container}>
       <View style={stylesHome.imageContainer}>
            <Image source={require('../assets/DealsAndOffers.png')} style={stylesHome.image}></Image>
            <Text style={stylesHome.title}>Descuento del 15 %</Text>
            <Text> Utiliza Le siguiente código para tus proximas compras</Text>
            <Text>DIADELAMADRE</Text>
        </View> 

    </View>
  )
}

export default DealsAndOffers
