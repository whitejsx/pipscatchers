import React,{useState,useEffect} from 'react'

import { supabase } from "./createClient"

const App = () => {

  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    // first use functions 

  fetchUser()
   
  }, [])
  

  async function fetchUser(){
    const {data} = await supabase
    .from('user')
    .select('*')
    setUsers(data)

  }

  return (
    <div>
      Application
      </div>
  )
}

export default App