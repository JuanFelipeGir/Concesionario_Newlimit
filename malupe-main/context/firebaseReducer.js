export const initialState = {
  quotatingRequest: {
      name: '',
      email: '',
      phone: '',
      message: '',
      vehicleType: ''
  },
  drivingTestRequest: {
      car: '',
      date: '',
      name: '',
      surname: '',
      dni: '',
      cellphone: ''
  }
};

const firebaseReducer = (state, action) => {
  switch (action.type) {
      case 'SET_FIELD':
          return {
              ...state,
              [action.form]: {
                  ...state[action.form],
                  [action.field]: action.value
              }
          };
      default:
          return state;
  }
};

export default firebaseReducer;
