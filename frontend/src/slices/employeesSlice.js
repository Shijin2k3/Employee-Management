import { createSlice } from "@reduxjs/toolkit";


const employeesSlice = createSlice({
    name:'employees',
    initialState:{
        loading:false
    },
    reducers:{
        employeesRequest(state,action){
            return {
                loading:true,
            }
        },
        employeesSuccess(state,action){
           return {
                loading:false,
                employees:action.payload.employees
           } 
        },
        employeesFail(state,action){
            return {
                loading:false,
                error: action.payload
            }
        }
    }
});
const {actions,reducer}=employeesSlice;
export const { employeesRequest,employeesSuccess,employeesFail }=actions
export default reducer;