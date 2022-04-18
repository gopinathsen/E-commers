import { AuthConstant } from "../../Action/ActionConst";

const initState={
    username:'',
    email:'',
    password:'',
    message:'',
    error:'',
    authenticated:'',
    authtoken:''
}

const AuthReducers=(state=initState,action)=>{
    switch(action.type){
        case `${AuthConstant.USER_REGISTER}_REQUEST`:
            return{
                ...state
            };
        case `${AuthConstant.USER_REGISTER}_SUCCESS`:
            return state={
                    ...state,
                    message:action.payload.message
            };   
        case `${AuthConstant.USER_REGISTER}_FAILURE`:
            return state={
                    ...state,
                    error:action.payload.errorsMsg
            }
            default:
                return state;       
    }
}
export default AuthReducers;