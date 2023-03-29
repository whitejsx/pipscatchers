# the is a simple CRUD application 
* description:
- CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.


#### How to run the application 

you need to clone the application than run:

```
    cd <filename>
    yarn dev
```

# fetch data from supabase 

```javascript.js

    async function fetchUser(){
    const {data} = await supabase
    .from('user')
    .select('*')
    setUsers(data)
  }

```