import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxios = ({url}) => {

    // constans
const [response , setResponse ] = useState(null);
  const [error, setError] = useState('');
const [loading , setLoading ] = useState(true)


// baseUrl
axios.defaults.baseURL ="https://opentdb.com"


// effect
useEffect(() => {
const fetchData = () =>{
axios.get(url).then(res => setResponse(res.data))
.catch(err => setError(err))
.finally(() => setLoading(false));
}
fetchData();
},[url])

// return
  return {response ,error ,loading}
}
export default useAxios
