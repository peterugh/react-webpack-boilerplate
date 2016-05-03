export const userReducer = function (state = {}, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
};