import { SET_FIELD, CREATE_NEW_DRIVING_TEST } from '../types';

export const initialState = {
    car: '',
    date: '',
    name: '',
    surname: '',
    dni: '',
    cellphone: '',
};

const drivingTestReducer = (state, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case CREATE_NEW_DRIVING_TEST:
            console.log('Driving test request submitted:', state);
            return initialState;
        default:
            return state;
    }
};

export default drivingTestReducer;
