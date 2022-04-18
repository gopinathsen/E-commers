export default function Child(props){
    console.log("Recived by props",props);
    return (
    <div>
        {/* <h1>{props.children}</h1> */}
        <h1>{props.data2}
        ,{props.dataobj.firstname},{props.dataobj.middlename},{props.dataobj.lastname}</h1>
            {
            props.arrobj.map((x,index)=>(
                <div key={index} >
                <h1>{x.fname} {x.lname}</h1>
                </div>
            ))
            }
               {
                props.arr.map((c,index)=>(
                    <h2 key={index}>{c}</h2>
                )) 
                }
                {
                    props.array.map((n,index)=>(
                        <h3 key={index}>{n}</h3>
                    ))
                }
             
    </div>
                )
}

