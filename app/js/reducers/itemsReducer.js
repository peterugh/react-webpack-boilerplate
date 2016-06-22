export const itemsReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      if(state.indexOf(action.item) === -1) {
        return [
          ...state,
          action.item
        ];
      }
      return state;
    case 'REMOVE_ITEM':
      return state.filter((item) => {
        return item !== action.item;
      });
    default:
      return state;
  }
};