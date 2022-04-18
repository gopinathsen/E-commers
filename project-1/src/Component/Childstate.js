import React from "react";
 
export default function changestate(props){
    console.log("props value:",props)
    return(
        <div>
            {/* {
                props.data.map((obj)=>(<h3 key={obj.id}>Fullname:{obj.fname}{obj.lname},place:{obj.location}</h3>
                    ))
            } */}
            <button onClick={props.fun}>Change value</button>
            </div>
    )
}