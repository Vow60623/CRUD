// register means create
import React from 'react'
import axios from 'axios'

const Register=()=> {
    const handleregister= async(e)=>{
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('http://localhost:9000/users',user)
        alert("data successfully save")
    }
  return (
    <div style={{border:'2px solid green '}}>
        <h1>CREATE USER</h1>
        <form onSubmit={handleregister}>
        <label htmlFor="">NAME:</label>
        <input type="text" name="name" id="" />
        <label htmlFor="">AGE:</label>
        <input type="text" name='age' />
        <button type='submit'>Register User</button>
        </form>
    </div>
  )
}

export default Register