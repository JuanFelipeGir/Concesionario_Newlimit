import React, { useContext } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { stylesHome } from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import QuotatingContext from '../../context/quotatingreq/quotatingContext';

const QuotatingRequest = () => {
  const { state, setField, createNewQuotatingRequest } = useContext(QuotatingContext);

  const validationSchema = Yup.object().shape({
    product: Yup.string().required('Product is required'),
    quantity: Yup.number().required('Quantity is required'),
    customerName: Yup.string().required('Customer Name is required'),
    customerEmail: Yup.string().required('Customer Email is required'),
  });

  const handleSubmit = (values) => {
    createNewQuotatingRequest();
  };

  return (
    <View style={stylesHome.container}>
      <ScrollView>
        <Text style={stylesHome.title}>Quotating Request</Text>
        <Formik
          initialValues={state}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
            <View>
              <View style={stylesHome.buttonContainer}>
                <Text style={stylesHome.text}>Product</Text>
                <TextInput
                  style={stylesHome.input}
                  placeholder="Product"
                  placeholderTextColor="gray"
                  onChangeText={(value) => {
                    setField('product', value);
                    handleChange('product')(value);
                  }}
                  onBlur={handleBlur('product')}
                  value={values.product}
                />
                <Text style={stylesHome.errorText}>{errors.product}</Text>
                <Text style={stylesHome.text}>Quantity</Text>
                <TextInput
                  style={stylesHome.input}
                  placeholder="Quantity"
                  placeholderTextColor="gray"
                  onChangeText={(value) => {
                    setField('quantity', value);
                    handleChange('quantity')(value);
                  }}
                  onBlur={handleBlur('quantity')}
                  value={values.quantity}
                />
                <Text style={stylesHome.errorText}>{errors.quantity}</Text>
                <Text style={stylesHome.text}>Customer Name</Text>
                <TextInput
                  style={stylesHome.input}
                  placeholder="Customer Name"
                  placeholderTextColor="gray"
                  onChangeText={(value) => {
                    setField('customerName', value);
                    handleChange('customerName')(value);
                  }}
                  onBlur={handleBlur('customerName')}
                  value={values.customerName}
                />
                <Text style={stylesHome.errorText}>{errors.customerName}</Text>
                <Text style={stylesHome.text}>Customer Email</Text>
                <TextInput
                  style={stylesHome.input}
                  placeholder="Customer Email"
                  placeholderTextColor="gray"
                  onChangeText={(value) => {
                    setField('customerEmail', value);
                    handleChange('customerEmail')(value);
                  }}
                  onBlur={handleBlur('customerEmail')}
                  value={values.customerEmail}
                />
                <Text style={stylesHome.errorText}>{errors.customerEmail}</Text>
              </View>

              <View style={stylesHome.buttonContainer}>
                <TouchableOpacity style={stylesHome.button} onPress={handleSubmit}>
                  <Text style={stylesHome.buttonText}>SEND QUOTATING REQUEST</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default QuotatingRequest;
