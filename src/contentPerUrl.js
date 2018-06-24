function getComponent(type) {
  if (type === "xxx") {
    return import(/* webpackChunkName: "home" */ './TestFile2');
  } else {
    return import(/* webpackChunkName: "others" */ './TestFile');
  }
}

export function contentPerUrl(path, options, callback) {
  return (dispatch, getState) => {
    console.log("contentPerUrl", path);
    return getComponent("test")
      .then(module => module.default)
      .then((AnotherComponent) => {
        if (callback) {
          callback(AnotherComponent);
        }
      })
  }
}

export const UPDATE_URL_SUCCESS = 'UPDATE_URL_SUCCESS';
export const UPDATE_URL_ERROR = 'UPDATE_URL_ERROR';

// ------------------------------------
// Reducer
// ------------------------------------
export default function contentPerUrlReducer(state = {}, action) {

  switch (action.type) {
    case UPDATE_URL_SUCCESS:
      console.log("UPDATE_URL_SUCCESS", action);
      return {
        item: action.item,
        status: action.status,
        // type: (action.type !== undefined ? action.type : null),
        component: action.component
      };
    default:
      return state;
  }
}
