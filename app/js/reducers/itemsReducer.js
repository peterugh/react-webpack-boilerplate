export const itemsReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_ITEM':
      return state.filter((item) => {
        return item !== action.item;
      });
    default:
      return state;
  }
};