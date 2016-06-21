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
export const fetchingCats = function () {
  return {
    type: 'FETCHING_CATS'
  };
};
export const fetchedCats = function () {
  return {
    type: 'FETCHED_CATS'
  };
};
export const addCat = function (url) {
  return {
    type: 'ADD_CAT',
    url
  };
};
export const getCats = function () {
  return dispatch => {
    dispatch(fetchingCats());
    fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=5')
    .then((response) => {
      return response.text();
    }).then((text) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      const images = xml.firstChild.children[0].children[0].children;
      Array.from(images).map((image) => {
        dispatch(addCat(image.children[0].innerHTML));
      });
      dispatch(fetchedCats());
    });
  };
};