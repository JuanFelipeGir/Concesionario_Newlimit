import { SET_FIELD, CREATE_NEW_QUOTATING_REQUEST } from '../types';

export const initialState = {
    product: '',
    quantity: '',
    customerName: '',
    customerEmail: '',
};

const quotatingReducer = (state, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case CREATE_NEW_QUOTATING_REQUEST:
            console.log('Quotating request submitted:', state);
            return initialState;
        default:
            return state;
    }
};

export default quotatingReducer;
