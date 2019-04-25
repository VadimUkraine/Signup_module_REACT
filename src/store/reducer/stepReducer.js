const INIT_STATE = {
  secondStep: false,
  finalStep: false,
  progressBar: 0,
};

export default function stepReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'STEP_TWO':
      return  { ...state, secondStep: true};
    case 'STEP_FINAL':
      return { ...state, finalStep: true};
    case 'PROGRESSBAR_CHANGE':
      return { ...state, finalStep: action.payload};
    default:
      return state;
  }
}