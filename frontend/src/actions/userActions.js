import axios from "axios"
import { loginFail, loginRequest, loginSuccess } from "../slices/authSlice"

export const login=(email,password) =>async(dispatch) =>{
  try{
    dispatch(loginRequest())
    const {data} = await axios.post('http://localhost:8000/api/v1/login',{email,password})
    dispatch(loginSuccess(data))
  }catch(error){
    dispatch(loginFail(error.response?.data?.message|| "LoginFailed"))
  }
}