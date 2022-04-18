
import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import './Contact.css'
 
export default function Contact() {

   const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$'); 
  //  const validatePwd=RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#%&*]).{4,15}$');
  //  const validatePhoneno=RegExp ('[6-9]{1}[0-9]{9}');
   
   const[inputState,setinputState]=useState({isError:{
     yourname:'',
     email:'',
     Message:''
   }})
   const handlechange=(event)=>{
         event.persist();
        //  console.log("Events:",event);
        let{name,value}=event.target;
        let isErr={...inputState.isError};
        switch(name){
            case "yourname":
                isErr.yourname=
                value.length<4?"* Atleast 4 character required": "";
            break;
            
            case "email":
                isErr.email= validateEmail.test(value)?"":"Wrong pattern"
               
            break;
            
            case "Message":
               
                // isErr.message=validateMessage.test(value)?"":"Wrong patterm"
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
        <div className="Section1">
        <p  className="heading"> Enter your Data</p>
            <Form className='Reg' onSubmit={submitHandler}>
                    <Form.Group className="mb-3" >
                     <Form.Label>Your_Name</Form.Label>
                     <Form.Control type="Text" placeholder='Enter your First name' name="firstname" onChange={handlechange}/>
                     </Form.Group>

                  

                    <Form.Group className="mb-3" >
                     <Form.Label>Email_Address</Form.Label>
                     <Form.Control type="email" placeholder='Enter email' name="email" onChange={handlechange}/>
                     </Form.Group>


                     <Form.Group className="mb-3" >
                     <Form.Label className='mess'>Message</Form.Label>
                     <Form.Control type="text" placeholder='Message' name="Message"  onChange={handlechange}/>
                     </Form.Group>
                     <Button variant="secondary" className='Submitbutton1'>Submit</Button>



             </Form>
    
        </div>
    </>
  )
    }
