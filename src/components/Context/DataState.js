import { useState } from "react";
import dataContext from "./DataContext";

const DataState = (props) => {

  const [items, setItems] = useState([])
  const[loading,setLoading]=useState(true)

  const getAllRecepies = async () => {
    setLoading(false)
    try {
      const result = await fetch('https://mernrecepiebackend.onrender.com/api/allItem')
      const responce = await result.json()
      // console.log('context',responce)

      //array formate madhech state madhe ghalayche mhanje sope hotay
      setItems(responce.allItems)

    }catch (error) {
      console.error(error);
      // alert('Failed to retrieve data. Please try again later.');
      setLoading(true)
    }


    

  }


  return (
    <dataContext.Provider value={{ items, getAllRecepies, setItems }}  >
      {props.children}
    </dataContext.Provider>
  )
}

export default DataState