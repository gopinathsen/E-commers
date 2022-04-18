import React ,{useRef} from 'react'
//uncontrolled component as controlled by DOM
//to know the current state from DOM=>USERef lifecycle hook
 function UseRef() {
     const inputElement=useRef(null) 
     const onButtonClick=()=>{
         //'current' points to the munted text input element
         console.log("Current input field:",inputElement.current);
         //collecting value from input field using useRef
         console.log("input field value",inputElement.current.value);

     };
  return (
    <>
    <input ref={inputElement} type="text"/>
    <button onClick={onButtonClick}>Click</button>
    </>
  );
}
export default UseRef;