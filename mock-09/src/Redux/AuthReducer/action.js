import * as types from "./actionTypes"
import axios from "axios"
const loginfn=(payload)=>(dispatch)=>{
dispatch({type:types.LOGIN_REQUEST})
return  axios({
    method:"post",
    url:"/api/login",
    baseURL:"http://reqres.in",
    data:payload
}).then((r)=>{
    return dispatch({type:types.LOGIN_SUCCESS, payload:r.data.token})
}).catch((err)=>{ return console.log(err) ,dispatch({type:types.LOGIN_FAILURE})
})
}
export {loginfn}
export const getLogin = async ({ dispatch, data }) => {
dispatch({type:types.LOGIN_REQUEST})
  let res = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  let token = await res.json();
  localStorage.setItem('token', JSON.stringify(token));
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload: token,
  });
};