import { useState } from "react";

export const useCounter = (init:number) => {
const [value,setValue] = useState(init)
    // value, inc, dec, set
 const inc  = (a:number)=>{
    setValue((p)=>p+a)
 }
 const dec  = (a:number)=>{
    setValue((p)=>p-a)
 }
 const set  = (a:number)=>{
    setValue(a)
 }
return {value ,inc,set,dec}

};
