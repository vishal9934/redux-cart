import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { increment,incrementByValue } from '../Slice';

const Child1 = () => {
     const dispatch=useDispatch();
        //use selector use to get out data from store and send to frontend or ui
        const data=useSelector((c)=>{
        return c.show.value;
        })

  return (
    <div>
      <h1>Child1 -{data}</h1>
      <button onClick={()=>dispatch(increment())}>Click on me!</button>
      <button onClick={()=>dispatch(incrementByValue(10))}>Click agin on me!</button>
    </div>
  )
}

export default Child1;
