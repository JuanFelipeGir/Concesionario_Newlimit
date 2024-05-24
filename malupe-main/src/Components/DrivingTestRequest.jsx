import React, { useContext } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { stylesHome } from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DrivingTestContext from '../../context/drivingtestreq/drivingTestContext';

const DrivingTestRequest = () => {
  const { state, setField, createNewDrivingTest } = useContext(DrivingTestContext);

  const validationSchema = Yup.object().shape({
    car: Yup.string().required('Car is required'),
    date: Yup.string().required('Date is required'),
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    dni: Yup.number().required('DNI is required'),
    cellphone: Yup.number().required('Cellphone is required'),
  });

  const handleSubmit = (values) => {
    createNewDrivingTest();
  };

  return (
    <View style={stylesHome.container}>
      <ScrollView>
        <Text style={stylesHome.title}>Driving Test Request</Text>
        <View style={stylesHome.imageContainer}>
          <Image source={require('../assets/drivingtest.jpg')} style={stylesHome.image} />
        </View>
        <Formik
          initialValues={state}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
            <View>
              <View style={stylesHome.buttonContainer}>
                <Text style={stylesHome.text}>Car</Text>
                <TextInput
                  style={stylesHome.input}
                  placeholder="Car"
                  placeholderTextColor="gray"
                  onChangeText={(value) => {
                    setField('car', value);
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
                    setField('date', value);
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
                    setField('name', value);
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
                    setField('surname', value);
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
                    setField('dni', value);
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
                    setField('cellphone', value);
                    handleChange('cellphone')(value);
                  }}
                  onBlur={handleBlur('cellphone')}
                  value={values.cellphone}
                />
                <Text style={stylesHome.errorText}>{errors.cellphone}</Text>
              </View>

              <View style={stylesHome.buttonContainer}>
                <TouchableOpacity style={stylesHome.button} onPress={handleSubmit}>
                  <Text style={stylesHome.buttonText}>SEND DRIVING TEST REQUEST</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default DrivingTestRequest;
