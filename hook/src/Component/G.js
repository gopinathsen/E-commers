import React,{useContext} from 'react'
import {userDetailContext} from '../App';
export const G = () => {

  const constextData = useContext(userDetailContext);
  console.log("context value:",constextData);
  return (
    <div>
        <h3>This is Sub Component</h3>
        <h4>User Name: {constextData.name}</h4>
        <h4>User Age: {constextData.age}</h4>
    </div>
  )
}
