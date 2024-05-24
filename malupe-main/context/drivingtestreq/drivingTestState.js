import React, { useReducer } from 'react';
import DrivingTestContext from './drivingTestContext';
import drivingTestReducer, { initialState } from './drivingTestReducer';
import { SET_FIELD, CREATE_NEW_DRIVING_TEST } from '../types';

const DrivingTestState = ({ children }) => {
    const [state, dispatch] = useReducer(drivingTestReducer, initialState);

    const setField = (field, value) => {
        dispatch({ type: SET_FIELD, field, value });
    };

    const createNewDrivingTest = () => {
        dispatch({ type: CREATE_NEW_DRIVING_TEST });
    };

    return (
        <DrivingTestContext.Provider value={{ state:{}, setField, createNewDrivingTest }}>
            {children}
        </DrivingTestContext.Provider>
    );
};

export default DrivingTestState;
