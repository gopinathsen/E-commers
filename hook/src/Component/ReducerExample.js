import React,{useReducer} from 'react'
//An alternative to useState.
//useReduce is usually preferable to useState when you have complex state logic that involves multiples sub-values.

const initialState = 0;
const reducer=(state,action) =>{
    switch (action) {
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        case 'reset' : return 0;
        default: throw new Error('Unexpected action');
    
    }
} 
const ReducerExample = () => {
    const [count,dispatch]= useReducer(reducer,initialState);

  return (
    <div>
    {/* count=initialState */}
    <h1>{count}</h1>
    <button onClick={() =>dispatch('increment')}> + 1 </button>
    <button onClick={() =>dispatch('decrement')}> - 1 </button>
    <button onClick={() =>dispatch('reset')}>Reset</button>
    </div>
  )
}
export default ReducerExample;
