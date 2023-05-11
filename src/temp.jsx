// import React,{useState,useEffect} from 'react'
// import { supabase } from "./createClient"
// import './App.css'

// const App = () => {
//   const [users, setUsers] = useState([])

//   const [user, setUser] = useState({
//     stdName:"",
//     age:""
//   })

//   // console.log(users)
//   useEffect(() => {
//     // first use functions 
//   fetchUser()
//   }, [])
  
//   async function fetchUser(){
//     const {data} = await supabase
//     .from('user')
//     .select('*')
//     setUsers(data)
//   }

//   function handleChange(event){

//     setUser(prevFormData => {
//       return{
//         ...prevFormData,
//         [event.target.name]:event.target.value
//       }
//     })
//   }
//   console.log(user)
//   async function createUser(){
//     await supabase
//     .from('user')
//     .insert({ name: user.stdName, age: user.age })
//   }

//   return (
//     <div>
//       <form onSubmit={createUser}>
//         <input type="text" 
//         placeholder='fullname'
//         name='stdName'
//         onChange={handleChange}
        
//         />
//         <input type="number" 
//         placeholder='age'
//         name='age'
//         onChange={handleChange}
        
//         />
//     <button type='submit'>Submit</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//         {
//           users.map((user) => 
//             <tr  key={user.id}>
//               <th>{user.id}</th>
//               <th>{user.name}</th>
//               <th>{user.age}</th>
//               <th>{user.created_at}</th>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       </div>
//   )
// }

// export default App