import React, { useReducer } from 'react';
import QuotatingContext from './quotatingContext';
import quotatingReducer, { initialState } from './quotatingReducer';
import { SET_FIELD, CREATE_NEW_QUOTATING_REQUEST } from '../types';

const QuotatingState = ({ children }) => {
    const [state, dispatch] = useReducer(quotatingReducer, initialState);

    const setField = (field, value) => {
        dispatch({ type: SET_FIELD, field, value });
    };

    const createNewQuotatingRequest = () => {
        dispatch({ type: CREATE_NEW_QUOTATING_REQUEST });
    };

    return (
        <QuotatingContext.Provider value={{ state: {}, setField, createNewQuotatingRequest }}>
            {children}
        </QuotatingContext.Provider>
    );
};

export default QuotatingState;
