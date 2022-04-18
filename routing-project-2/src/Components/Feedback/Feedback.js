import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import './Feedback.css'
 
export default function Feedback() {

   const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$'); 
   const validatePwd=RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#%&*]).{4,15}$');
   const validatePhoneno=RegExp ('[6-9]{1}[0-9]{9}');
   
   const[inputState,setinputState]=useState({isError:{
     firstname:'',
     lastname:'',
     email:'',
     password:''
   }})
   const handlechange=(event)=>{
         event.persist();
        //  console.log("Events:",event);
        let{name,value}=event.target;
        let isErr={...inputState.isError};
        switch(name){
            case "firstname":
                isErr.firstname=
                value.length<4?"* Atleast 4 character required": "";
            break;
            case "lastname":
                isErr.lastname=
                value.length<4?"* Atleast 4 character required": "";
            break;
            case "email":
                isErr.email= validateEmail.test(value)?"":"Wrong pattern"
                // value.length<4?"* Atleast 4 character required": "";
            break;
            case "password":
                isErr.password=validatePwd.test(value)?"":"Wrong patterm"
                // value.length<4?"* Atleast 4 character required": "";
            break;   
            case "phoneno":
               
                isErr.phoneno=validatePhoneno.test(value)?"":"Wrong patterm"
            break;   
            default: break; 
        }
        setinputState({...inputState,[name]:value,isError:isErr})
        console.log("Errors:",inputState.isError);
      }
       const submitHandler=(event)=>{
           event.preventDefault();
           console.log("After submit Received value",inputState);
       }


    return (
    <>
        <div className="mainSection">
        <p  className="heading"> Enter your data</p>
            <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" >
                     <Form.Label>First_Name</Form.Label>
                     <Form.Control type="Text" placeholder='Enter your First name' name="firstname" onChange={handlechange}/>
                     </Form.Group>

                    <Form.Group className="mb-3" >
                     <Form.Label>Last_Name</Form.Label>
                     <Form.Control type="Text" placeholder='Enter your Last name' name="lastname" onChange={handlechange}/>
                     
                    </Form.Group>

                    <Form.Group className="mb-3" >
                     <Form.Label>Email_Address</Form.Label>
                     <Form.Control type="email" placeholder='Enter email' name="email" onChange={handlechange}/>
                     </Form.Group>

                     <Form.Group className="mb-3" >
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder='password' name="password" onChange={handlechange}/>
                     </Form.Group>

                     <Form.Group className="mb-3" >
                     <Form.Label>phoneno</Form.Label>
                     <Form.Control type="text" placeholder='+91 1234567890' name="phoneno" maxLength={10} onChange={handlechange}/>
                     </Form.Group>
                     <Button varient="info" type="submit">Submit</Button>



             </Form>
    
        </div>
    </>
  )
    }
