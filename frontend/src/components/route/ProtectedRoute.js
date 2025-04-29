import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const navigate=useNavigate()
    const {isAuthenticated}=useSelector(state => state.authState)
    
    if(!isAuthenticated){
        return navigate("/login")
    }
    return children

}