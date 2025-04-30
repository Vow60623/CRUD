import axios from 'axios'
import React from 'react'

function Update() {
    const handleupdate=async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const data = {name,age}
        await axios.put(`http://localhost:9000/users/${id}`,data)
        alert("Update successfully!")
    }


  return (
    <div style={{border:'2px solid red'}}>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleupdate}>
            <label>Id: <input type="text" name='id' /></label>
            <label>NAME: <input type="text" name='name' /></label>
            <label>AGE: <input type="text" name="age" /></label>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update