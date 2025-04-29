import axios from "axios"
import { clearError, loadUserFail, loadUserRequest, loadUserSuccess, loginFail,
    loginRequest, loginSuccess,
    logoutFail,
    logoutSuccess,
    registerFail, registerRequest, 
    registerSuccess, 
    updateProfileFail, 
    updateProfileRequest,
    updateProfileSuccess} 
from "../slices/authSlice"

export const login=(email,password) =>async(dispatch) =>{
  try{
    dispatch(loginRequest())
    const {data} = await axios.post('http://localhost:8000/api/v1/login',{email,password})
    dispatch(loginSuccess(data))
  }catch(error){
    dispatch(loginFail(error.response.data.message|| "LoginFailed"))
  }
}

export const clearAuthError=(dispatch)=>{
  dispatch(clearError())
}

export const register=(userData) =>async(dispatch) =>{
  try{
    dispatch(registerRequest())
    const {data} = await axios.post('http://localhost:8000/api/v1/register',userData)
    dispatch(registerSuccess(data))
  }catch(error){
    dispatch(registerFail(error.response.data.message|| "RegisterFailed"))
  }
}
export const loadUser=async(dispatch) =>{
  try{
    dispatch(loadUserRequest())
    const {data} = await axios.get('http://localhost:8000/api/v1/myprofile')
    dispatch(loadUserSuccess(data))
  }catch(error){
    dispatch(loadUserFail(error.response.data.message))
  }
}
export const logout=async(dispatch) =>{
  try{
    const {data} = await axios.get('http://localhost:8000/api/v1/logout')
    dispatch(logoutSuccess())
  }catch(error){
    dispatch(logoutFail(error.response.data.message))
  }
}
export const updateProfile=(userData) =>async(dispatch) =>{
  try{
    dispatch(updateProfileRequest())
    const {data} = await axios.post('http://localhost:8000/api/v1/update',userData)
    dispatch(updateProfileSuccess(data))
  }catch(error){
    dispatch(updateProfileFail(error.response.data.message|| "RegisterFailed"))
  }
}
