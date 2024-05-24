import React, { useState } from "react";
import {View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { stylesHome } from "../styles";
import firebase from '../../../database/firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';


const WorkShopService = () => {
    const navigation = useNavigation();

    const handleViewHistory = () => {
        navigation.navigate('ServiceHistory'); 
    };
    


    const [state, setState] = useState({
        car: '',
        date: '',
        name: '',
        surname: '',
        dni: '',
        cellphone: '',
        license:'',
    });

    const handleChangeText = (name, value) => {
        setState({
         ...state,
          [name]: value,
        });
    }

    const createNewWorkShop = async() => {
        if (state.name === ''){
            Alert.alert('Please provide an information')
        } else {
            await firebase.db.collection('servicehistory').add({
                car: state.car,
                date: state.date,
                name: state.name,
                surname: state.surname,
                dni: state.dni,
                cellphone: state.cellphone,
                license: state.license
            })
            Alert.alert('Saved information')

            //console.log(state)    
        }
        
    }

    const validationSchema = Yup.object().shape({
        car: Yup.string()
        .required('Car is required'),
        date: Yup.string()
        .required('Date is required'),
        name: Yup.string()
        .required('Name is required'),
        surname: Yup.string()
        .required('Surname is required'),
        dni: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('DNI is required')
        .max(10,"dni should not be more than 10 digits"),
        cellphone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Cellphone is required')
        .max(10,"Cellphone should not be mor than 10 digits"),
        license: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('license is required')
        .max(11,"License should not be more than 11 digits")
    });

    return (
        <View style={stylesHome.container} >
            <ScrollView>
                <Text style={styleLocal.title}>Work Shop Services</Text>
                <View style={stylesHome.imageContainer}> 
                <Image source={require('../../assets/WorkShopService.png')} style={stylesHome.image}/>
                </View>
                <Formik
                    initialValues={state}
                    validationSchema={validationSchema}
                    onSubmit={createNewWorkShop}
                >
                    {({ handleChange, handleBlur, values, errors }) => (
                        <View>
                            <View style={stylesHome.buttonContainer}>
                                <Text style={stylesHome.text}>Car</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Car"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('car', value);
                                        handleChange('car')(value);
                                    }} 
                                    onBlur={handleBlur('car')}
                                    value={values.car}
                                />
                                <Text style={stylesHome.errorText}>{errors.car}</Text>
                                <Text style={stylesHome.text}>Date</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Date"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('date', value);
                                        handleChange('date')(value);
                                    }} 
                                    onBlur={handleBlur('date')}
                                    value={values.date}
                                />
                                <Text style={stylesHome.errorText}>{errors.date}</Text>
                                <Text style={stylesHome.text}>Name</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Name"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('name', value);
                                        handleChange('name')(value);
                                    }} 
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                />
                                <Text style={stylesHome.errorText}>{errors.name}</Text>
                                <Text style={stylesHome.text}>Surname</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Surname"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('surname', value);
                                        handleChange('surname')(value);
                                    }} 
                                    onBlur={handleBlur('surname')}
                                    value={values.surname}
                                />
                                <Text style={stylesHome.errorText}>{errors.surname}</Text>
                                <Text style={stylesHome.text}>Dni</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Dni"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('dni', value);
                                        handleChange('dni')(value);
                                    }} 
                                    onBlur={handleBlur('dni')}
                                    value={values.dni}
                                />
                                <Text style={stylesHome.errorText}>{errors.dni}</Text>
                                <Text style={stylesHome.text}>Cellphone</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="Cellphone"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('cellphone', value);
                                        handleChange('cellphone')(value);
                                    }} 
                                    onBlur={handleBlur('cellphone')}
                                    value={values.cellphone}
                                />
                                <Text style={stylesHome.errorText}>{errors.cellphone}</Text>
                                <Text style={stylesHome.text}>License</Text>
                                <TextInput 
                                    style={stylesHome.input}
                                    placeholder="License"
                                    placeholderTextColor="gray"
                                    onChangeText={(value) => {
                                        handleChangeText('license', value);
                                        handleChange('license')(value);
                                    }} 
                                    onBlur={handleBlur('license')}
                                    value={values.license}
                                />
                                <Text style={stylesHome.errorText}>{errors.license}</Text>
                                
                            </View>

                            <View style={stylesHome.buttonContainer}>
                                <TouchableOpacity style={stylesHome.button} onPress={createNewWorkShop}>
                                    <Text style={stylesHome.buttonText}>SEND WORK SHOP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={stylesHome.button} onPress={handleViewHistory}>
                                    <Text style={stylesHome.buttonText}>VIEW HISTORY</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    )

}

const styleLocal = StyleSheet.create({
    title: {
        color: '#FF4928',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30,
        marginLeft: 120
    },

})

export default WorkShopService