import React, { useEffect } from "react";
import Navbar from './components/Navbar'
import Filter from "./components/Filter"
import Card from './components/Card'
import { apiUrl,filterData } from './data'
import { toast } from "react-toastify";

const App = () => {

  useEffect(() => {
    const fetchData = async() =>{
      try{
        const res = await fetch(apiUrl);
        const data = await res.json()
        console.log(data);
      }
      catch(error){
        toast.error("something went wrong")
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Navbar/>

      <Filter
        filterData={filterData}
      />

      <Card/>
    </div>
  );
};

export default App;
