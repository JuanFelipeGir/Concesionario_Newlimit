import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer, { initialState } from './firebaseReducer';

const FirebaseState = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const setField = (form, field, value) => {
        dispatch({ type: 'SET_FIELD', form, field, value });
    };

    const createNewQuotateRequest = (values) => {
        console.log('Nueva solicitud de cotización:', values);
        
    };

    const createNewDrivingTest = async () => {
        if (state.name === '') {
          Alert.alert('Please provide information');
        } else {
          await firebase.db.collection('drivingtest').add({
            car: state.car,
            date: state.date,
            name: state.name,
            surname: state.surname,
            dni: state.dni,
            cellphone: state.cellphone,
          });
          Alert.alert('Saved information');
        }
      };

    return (
        <FirebaseContext.Provider value={{ state, setField, createNewQuotateRequest, createNewDrivingTest }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;
