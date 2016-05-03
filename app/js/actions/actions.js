export const setNameActionCreator = function (name) {
  return {
    type: 'SET_NAME',
    name
  };
};
export const addItemActionCreator = function (item) {
  return {
    type: 'ADD_ITEM',
    item
  };
};
export const removeItemActionCreator = function (item) {
  return {
    type: 'REMOVE_ITEM',
    item
  };
};