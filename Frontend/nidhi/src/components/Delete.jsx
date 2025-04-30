import axios from 'axios';
import React from 'react'

function Delete() {
    const handledelete=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert("Delete successfully!")
    }
  return (
    <div style={{border:'2px solid green'}}>
        <h1>DELETE USER</h1>
        <form onSubmit={handledelete}>
        <input type="text" name='id' placeholder='Enter only id' />
        <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Delete