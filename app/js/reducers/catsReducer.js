export const catsReducer = function (state = {
	fetchingCats: false,
  images: []
}, action) {
  switch (action.type) {
    case 'FETCHING_CATS':
      return {
        ...state,
        fetchingCats: true,
        images:[]
      }
    case 'FETCHED_CATS':
      return {
        ...state,
        fetchingCats: false
      }
    case 'ADD_CAT':
      return {
        ...state,
        images: [...state.images, action.url]
      }
    default:
      return state;
  }
};