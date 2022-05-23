import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
export type  mapData = {
  id:number,
product_name:string
}
function Body()  {
 
  const [mappdata, setMappdata] = useState<mapData[]>([])
  const getData = () => {
      axios.get("http://localhost:8080/products").then((response: AxiosResponse<mapData[]>) => {
          const { data } = response;
          setMappdata(data)
      })
  }
  useEffect(()=>{
    getData()
  },[])

  console.log(mappdata)
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
      {mappdata.map((e)=>{
        return  <Card key={e.id} {...e} />
      
      })}
      
    </div>
  );
}

export { Body };
