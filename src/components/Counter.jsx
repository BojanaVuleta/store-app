import { useState } from "react"

const Counter=()=>{

    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);

    }

    const decrement=()=>{
        if(count===0){
            return
        }
        setCount(count-1);

    }

    return(
        <div>
            <span>{count}</span>
            <button className="btn btn-outline-success" onClick={increment}>+</button>
            <button className="btn btn-outline-danger" onClick={decrement}>-</button>
            
        </div>
    )
}

export default Counter