import React, { useState } from "react";
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { stylesHome } from "./styles";
import firebase from '../../database/firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';


const DrivingTestRequest = () => {

    const [state, setState] = useState({
        car: '',
        date: '',
        name: '',
        surname: '',
        dni: '',
        cellphone: '',
    });

    const handleChangeText = (name, value) => {
        setState({
            ...state,
            [name]: value,
        });
    }

    const createNewDrivingTest = async () => {
        if (state.name === '') {
            Alert.alert('Please provide an information')
        } else {
            await firebase.db.collection('drivingtest').add({
                car: state.car,
                date: state.date,
                name: state.name,
                surname: state.surname,
                dni: state.dni,
                cellphone: state.cellphone
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
        dni: Yup.number()
        .required('DNI is required'),
        cellphone: Yup.number()
        .required('Cellphone is required'),
    });

    return (
        <View style={stylesHome.container} >
            <ScrollView>
                <Text style={styleLocal.title}>Driving Test Request</Text>
                <View style={stylesHome.imageContainer}>
                    <Image source={require('../assets/drivingtest.jpg')} style={stylesHome.image} />
                </View>
                <Formik
                    initialValues={state}
                    validationSchema={validationSchema}
                    onSubmit={createNewDrivingTest}
                >
                    {({ handleChange, handleBlur,values, errors }) => (
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
                            </View>

                            <View style={stylesHome.buttonContainer}>
                                <TouchableOpacity style={stylesHome.button} onPress={() => createNewDrivingTest()}>
                                    <Text style={stylesHome.buttonText}>SEND DRIVING TEST REQUEST</Text>
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

export default DrivingTestRequest