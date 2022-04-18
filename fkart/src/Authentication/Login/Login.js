import React from 'react'
import { useFormik } from 'formik';
import './Login.css'
import  axios  from 'axios';


const validateForm=(formValue)=>{
    let errors={};
    let validateEmail=/^([a-z0-9._]+)@([a-z]{5,20}).([a-z.]{2,20})$/
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
   
export default function LoginPage() {
    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
            validate:validateForm,
            onSubmit:(value)=>{
                console.log("Received Value:",value);
                    axios.post('https://node-project-storage.herokuapp.com/postLoginData',value)
                    .then(res=>{
                        console.log("Axios respone:",res);
                        alert("Login successful");
                        window.sessionStorage.setItem("TokenValue",res.data.token)
                    })
                    .catch(err=>{
                        console.log("Axios error",err);
                    })
                   
            }
        })
  return (
      <>
      <div className='new1'>
    <form className='LogForm' onSubmit={formik.handleSubmit}>
    <p  className="head2"> Enter your Data</p>

    <br/>
        <input type="email" name="email" placeholder="Enter your Email ID" value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        { formik.touched.email && formik.errors.email ?
        (<span>{formik.errors.email}</span>):null}

    <br/>
        <input type="text" name="password" placeholder="Enter Password" value={formik.values.password}   onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        {formik.touched.password && formik.errors.password ?
        (<span>{formik.errors.password}</span>):null}

    <br/>
         <button type="submit" className='Submit' disabled={!(formik.isValid && formik.dirty)}>Submit value</button>   
         <br/>
    </form>
    </div>
    </>
  )
}
