import axios from 'axios';
import { employeesFail, employeesRequest, employeesSuccess } from '../slices/employeesSlice';

//fetch employeesdetails
export const getEmployees = async (dispatch)=>{

    try{
     dispatch(employeesRequest())
     const { data }=await axios.get('/api/v1/employees');
     dispatch(employeesSuccess(data))
    }catch(error){
        //handle error
        dispatch(employeesFail(error.response.data.message))
    }
}