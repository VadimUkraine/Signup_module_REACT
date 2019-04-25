const INIT_STATE = {
  user_data: {
    email: '',
    password: '',
    gender: '',
    date_of_birth: '',
    how_hear_about_us: 'internet'
  },
  moves: {
    secondStep: false,
    finalStep: false,
    progressBar: 0,
    emailLabel: false,
    passwordLabel: false,
    confPasswordLabel: false,
  },
  labels:{
    email: 'email',
    password: 'password',
    confirmPass: 'confirm password',
    gender: 'gender',
    date: 'date of birth'
   }
};


export default function stateFormReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return  { ...state, user_data:{ ...state.user_data, email: action.payload}};
    case 'NEW_PASSWORD':
      return { ...state, user_data:{ ...state.user_data, password: action.payload}};
    case 'STEP_TWO':
      return  { ...state, moves:{...state.moves, secondStep: true}};
    case 'STEP_FINAL':
      return { ...state, moves:{...state.moves, finalStep: true}};
    case 'PROGRESSBAR_CHANGE':
      return { ...state, moves:{...state.moves, progressBar: action.payload}};
    case 'LABEL_EMAIL':
      return { ...state, moves:{...state.moves, emailLabel: action.payload}};
    case 'LABEL_EMAIL_ERROR':
      return { ...state, labels:{...state.labels, email: action.payload}};
    case 'LABEL_EMAIL_NO_ERROR':
      return { ...state, labels:{...state.labels, email: action.payload}};
    case 'LABEL_PASSWORD':
      return { ...state, moves:{...state.moves, passwordLabel: action.payload}};
    case 'LABEL_PASSWORD_ERROR':
      return { ...state, labels:{...state.labels, password: action.payload}};
    case 'LABEL_PASSWORD_NO_ERROR':
      return { ...state, labels:{...state.labels, password: action.payload}};
    case 'LABEL_CONF_PASSWORD':
      return { ...state, moves:{...state.moves, confPasswordLabel: action.payload}};
    case 'LABEL_CONF_PASSWORD_ERROR':
      return { ...state, labels:{...state.labels, confirmPass: action.payload}};
    case 'LABEL_CONF_PASSWORD_NO_ERROR':
      return { ...state, labels:{...state.labels, confirmPass: action.payload}};
    case 'SELECT_GENDER':
      return { ...state, user_data:{ ...state.user_data, gender: action.payload}};
    case 'SELECT_INFO':
      return { ...state, user_data:{ ...state.user_data, how_hear_about_us: action.payload}};
    case 'DATE_LABEL_ERROR':
      return { ...state, labels:{ ...state.labels, date: action.payload}};
    case 'GENDER_LABEL_ERROR':
      return { ...state, labels:{ ...state.labels, gender: action.payload}};
    case 'SELECT_DATE_BIRTH':
      return { ...state, user_data:{ ...state.user_data, date_of_birth: action.payload}};
    default:
      return state;
  }
}