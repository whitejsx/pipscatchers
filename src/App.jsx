import React,{useState,useEffect} from 'react'
import { supabase } from "./createClient"
import './App.css'

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user) => 
            <tr>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.age}</th>
              <th>{user.created_at}</th>
            </tr>
          )}
        </tbody>
      </table>
      </div>
  )
}

export default App