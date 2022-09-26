import * as types from "./actionTypes"
import axios from "axios"
export const getResturant=(params)=>(dispatch)=>{
    dispatch({type:types.GET_RESTURANT_REQUEST})
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${params}&limit=20`).then((r)=>{
       console.log(r.data)
        return dispatch({type:types.GET_RESTURANT_SUCCESS,payload:r.data})
    }).catch((err)=>dispatch({type:types.GET_RESTURANT_ERROR}))
    }
    export const updatemusic=(id,payload)=>dispatch=>{
   dispatch({type:types.UPDATE_ALBUMS_REQUEST})
   return axios.patch(` http://localhost:8080/albums/${id}`,payload).then((r)=>{
    return dispatch({type:types.UPDATE_ALBUMS_SUCCESS})
   }).catch((err)=>dispatch({type:types.UPDATE_ALBUMS_ERROR}))
    }

