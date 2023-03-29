# the is a simple CRUD application 
- CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.


#### How to run the application 

you need to clone the application than run:

```
    cd simple-CRUD-application
    yarn dev
```

# fetch data from supabase 

```javascript.js
const [users, setUsers] = useState([])
  // console.log(users)
 
  useEffect(() => {
  fetchUser()
  }, [])

    async function fetchUser(){
    const {data} = await supabase
    .from('user')
    .select('*')
    setUsers(data)
  }

```

# Insert Data to supabase 
 create a simple form that take user input 

```javascript.js
    <form onSubmit={createUser}>
        <input type="text" 
        placeholder='fullname'
        name='stdName'
        onChange={handleChange}
        
        />
        <input type="number" 
        placeholder='age'
        name='age'
        onChange={handleChange}
        
        />
    <button type='submit'>Submit</button>
      </form>

```
- handle the submit event
```javascript.js    
    function handleChange(event){
    setUser(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
```

- Update data colleceted to the supabase 

```javascript.js
            const [user, setUser] = useState({
                stdName:"",
                age:""
            })

            async function createUser(){
                await supabase
                .from('user')
                .insert({ name: user.stdName, age: user.age })
            }

```