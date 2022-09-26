import * as types from "./actionTypes";
const init = {
  isAuth: true,
  token: "",
  isLoading: false,
  isError: false,
};
export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
     
    default:
      return state;
  }
};
