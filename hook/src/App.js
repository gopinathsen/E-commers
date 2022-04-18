
import './App.css';
import ReducerExample from './Component/ReducerExample';
import UseRef from './Component/UseRef'
import A from './Component/A';
import React ,{useState} from 'react';


//step 1 for ContextAPI
export const userDetailContext = React.createContext(null);

function App() {
  //step 2 foe ContextAPI
  const [userDetails,setuserDetails] =useState({
    name:"ABCDE",
    age:30
  });
  return (
    <div className="App">
      <userDetailContext.Provider value={userDetails}>
        <A/>
      </userDetailContext.Provider>
      <UseRef/>
      <ReducerExample/>
      <A/>

    </div>
  );
}

export default App;
