import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Dashboard = () => {
  const data = useLoaderData()

  const sector = data.filter((data)=> data.topic === "gas")
 
  
  console.log(sector)
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('http://localhost:8000/api/v1/data/jsondata')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  return (
    <div>
     dashboard
      
    </div>
  )
}

export default Dashboard

export const dashboardDataLoader = async ()=>{
  const response = await fetch('http://localhost:8000/api/v1/data/jsondata')
  const data = await response.json()
    return data.data
}
