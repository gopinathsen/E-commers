import React from 'react'
import './Reg.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const validateForm=(formValue)=>{
        let errors={};
        let validateEmail=/^([a-z0-9._]+)@([a-z]{5,20}).([a-z.]{2,20})$/


      

        if(!formValue.fname)
        {
            errors.fname="Please enter First name"
        }else if(formValue.fname.length<3)
        {
            errors.fname="Minimum 3 character"
        }

        if(!formValue.lname)
        {
            errors.lname="Please enter Last name"
        }else if(formValue.lname.length<3)
        {
            errors.lname="Minimum 3 character"
        }



        if(!formValue.email)
        {
            errors.email="Please enter Email"
        }
        else if(!validateEmail.test(formValue.email))
        {
            errors.email="Invalid email";
        }
        if(!formValue.password)
        {
            errors.password="Please enter Password"
        }
        console.log("Errors: ",errors);
        return errors;

}


export default function Reg() {

    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            fname:'',
            lname:'',
            email:'',
            password:''
        },
        validate:validateForm,
        onSubmit:(values)=>{
            console.log("Recieved Values:",values);


            axios.post('https://nodeprojectapi.herokuapp.com/register',values)
            .then(res=>{
                console.log("Axios Response: ",res);
                alert(res.data.message)
                navigate('/LoginPage')
            })
            .catch(err=>{
                console.log("Axios error",err);
            })
        }
    })

  return (
    <div className='rtu'>
        <form onSubmit={formik.handleSubmit}>


            <label htmlFor="fname" >First name:</label> 
            <br/>
            <input type="text" 
            name="fname" 
            placeholder="Enter First name" 
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.fname && formik.errors.fname ? (<span>{formik.errors.fname}</span>):null}
            <br/>


            <label htmlFor="lname" >Last name:</label> 
            <br/>
            <input type="text" 
            name="lname" 
            placeholder="Enter Last name" 
            value={formik.values.uname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.lname && formik.errors.lname ? (<span>{formik.errors.lname}</span>):null}
            <br/>


            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" name="email" 
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>):null}
            <br/>


            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" name="password" 
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>):null}
            <br/>
            <br/>
            <button type='submit' disabled={!(formik.isValid && formik.dirty)}>Press here</button>
            
       </form> 
    </div>
  )
}


