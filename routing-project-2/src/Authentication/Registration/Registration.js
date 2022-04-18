import React from 'react'
import './Registration.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '../../Action/Auth.action';


// import axios from 'axios';

const validateForm=(formValue)=>{
    let errors={};
    let validateEmail=/^([a-z0-9._]+)@([a-z]{5,20}).([a-z.]{2,20})$/
    if(!formValue.username)
    {
        errors.username="Please enter username"
    }else if(formValue.username.length<3)
    {
        errors.username="Minimum 3 character"
    }

    if(!formValue.email)
    {
        errors.email="Please enter email"
    }else if (!validateEmail.test(formValue.email))
    {
        errors.email="Invalid email";
    }
    
    if(!formValue.password)
    {
        errors.password="Please enter password"
    }
    console.log("errors:",errors);
    return errors;
}


const  Registration = ()=>{
    const dispatchMethod = useDispatch() 
    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validate:validateForm,
        onSubmit:(value)=>{
            console.log("Received Value:",value);
            dispatchMethod(signUp(value))
            
                // axios.post('https://node-project-storage.herokuapp.com/postUserData',value)
                // .then(res=>{
                //     // console.log("Axios respone:",res);
                //     alert("You have successfully registered your data");
                // })
                // .catch(err=>{
                //     // console.log("Axios error",err);
                // })
        }
    })
  return (
    <>
    <form className='regForm' onSubmit={formik.handleSubmit}>
        <br/>
        <input type="text" name="username" placeholder="Enter username" value={formik.values.username}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        { formik.touched.username && formik.errors.username ?
        (<span>{formik.errors.username}</span>):null}
        <br/>
        <input type="email" name="email" placeholder="Enter your emailid" value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        { formik.touched.email && formik.errors.email ?
        (<span>{formik.errors.email}</span>):null}

        <br/>
        <input type="text" name="password" placeholder="Enter Password" value={formik.values.password}   onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        {formik.touched.password && formik.errors.password ?
        (<span>{formik.errors.password}</span>):null}
        
         <br/>
         <button type="submit" className='Submit' disabled={!formik.isValid&&formik.dirty}>Submit value</button>   
         <br/>
    </form>
    </>
  )
}
export default Registration;
