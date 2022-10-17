import axios from "axios";
export const actionTypes = {
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  ADD_TO_CART:"ADD_TO_CART",
}
export const getdata = (page,sor,ord,fil)=>(dispatch) => {
  axios
    .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&sort=${sor}&order=${ord}${fil}`)
    .then((res) => dispatch({
      type: actionTypes.FETCH_SUCCESSFUL,
      payload: res.data.data
    }))
    .catch((err) => console.log(err));
};
export const addToCart = (payload) => (dispatch) => {
  alert('Item Added to Cart Successfully !!')
  return dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: payload
  });
};

