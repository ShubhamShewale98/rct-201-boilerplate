import { useRef, useState } from "react";

export const useList = (arr:any) => {
    const [list,setList]=useState(arr)
const push = (x:number)=>{
    
    setList([...arr,x])
    
}
const pop = ()=>{
    arr.pop()
    setList([...arr])
}
const reset = ()=>{
    setList(arr)
}
const map = (e:number)=>{
let arr2 = arr.map((e:number)=>e*2)
setList(arr2)
}
const clear = ()=>{
    setList([])
}
return [list, { push, pop, clear, reset, map }]
};
