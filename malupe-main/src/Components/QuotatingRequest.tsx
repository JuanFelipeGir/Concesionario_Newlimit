import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { stylesHome } from "./styles";
import firebase from '../../database/firebase'
import { Formik } from 'formik';
import * as Yup from 'yup';

const QuotatingRequest = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        vehicleType: '',
        message: '',
    });
    const handleChangeText = (name, value) => {
        setState({
            ...state,
            [name]: value,
        });
    }
    const createNewQuotateRequest = async () => {
        if (state.name === '') {
            Alert.alert('please provide an information')
        } else {
            await firebase.db.collection('quotatingrequest').add({
                name: state.name,
                phone: state.phone,
                email: state.email,
                vehicleType: state.vehicleType,
                message: state.message
            })
            Alert.alert("Uploaded")
        }
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('DNI is required'),
        cellphone: Yup.number()
            .required('Cellphone is required')
            .max(10, "Cellphone should not be mor than 10 digits"),
        message: Yup.string()
            .required('Message is required')
            .max(250, "Message should not be mor than 250 digits"),

    });

    return (
        <View style={stylesHome.container}>
          <ScrollView>
            <Text style={stylesHome.title}>Quoting Request</Text>
            <View style={stylesHome.imageContainer}>
              <Image source={require('../assets/QuotatingRequest.png')} style={stylesHome.image} />
            </View>
            <Formik
              initialValues={state}
              validationSchema={validationSchema}
              onSubmit={createNewQuotateRequest}
            >
              {({ handleChange, handleBlur, values, errors }) => (
                <View>
                  <View style={stylesHome.buttonContainer}>
                    <Text style={stylesHome.text}>Name </Text>
                    <TextInput
                      style={stylesHome.input}
                      placeholder="Name"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('name')} // Use shorthand for common use cases
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    <Text style={stylesHome.errorText}>{errors.name}</Text>
                    <Text style={stylesHome.text}>Cellphone </Text>
                    <TextInput
                      style={stylesHome.input}
                      placeholder="Cellphone"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('cellphone')}
                      onBlur={handleBlur('cellphone')}
                      value={values.cellphone}
                    />
                    <Text style={stylesHome.errorText}>{errors.cellphone}</Text>
                    <Text style={stylesHome.text}>Email </Text>
                    <TextInput
                      style={stylesHome.input}
                      placeholder="Email"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    <Text style={stylesHome.errorText}>{errors.email}</Text>
    
                    <Text style={stylesHome.text}>Vehicle Type </Text>
                    <TextInput
                      style={stylesHome.input}
                      placeholder="VehicleType"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('vehicleType')}
                      onBlur={handleBlur('vehicleType')}
                      value={values.vehicleType}
                    />
                    <Text style={stylesHome.errorText}>{errors.vehicleType}</Text>
                    <Text style={stylesHome.text}>Message </Text>
                    <TextInput
                      style={stylesHome.input}
                      placeholder="Message"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('message')}
                      onBlur={handleBlur('message')}
                      value={values.message}
                    />
                    <Text style={stylesHome.errorText}>{errors.message}</Text>
                  </View>
                  <View style={stylesHome.buttonContainer}>
                    <TouchableOpacity style={stylesHome.button} onPress={() => createNewQuotateRequest()}>
                      <Text style={stylesHome.buttonText}>Send Quotate</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </View>
      );
}

export default QuotatingRequest
