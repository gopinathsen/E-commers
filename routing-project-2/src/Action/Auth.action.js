import { AuthConstant } from "./ActionConst";
import axios from "axios";

export const signUp=(uservalue)=>{
    return async (dispatch)=>{
        dispatch({type:`${AuthConstant.USER_REGISTER}_REQUEST`});
        axios.post('https://node-project-storage.herokuapp.com/postUserData',uservalue)
        .then((res)=>{
            console.log("Response for registration:",res.data);

            dispatch({type:`${AuthConstant.USER_REGISTER}_SUCCESS`,
                        payload:{message:res.data.message,dta:res.data}})
                    
        }).catch((err)=>{
            dispatch({type:`${AuthConstant.USER_REGISTER}_FAILURE`,
        playload:{errormsg:"Data is not register"}})
        })
    }}