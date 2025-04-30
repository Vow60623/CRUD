// rfce => short cut for boiler plate
// view means => read
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function View() {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata=async()=>{
        const res=await axios.get('http://localhost:9000/users');
        console.log(res);
        setUsers(res.data);
    }
  return (
    <div style={{border:'2px solid red'}}>
        <h1 style={{color:'green'}}>SHOW DATA</h1>
        <table style={{border: '2px solid red' ,backgroundColor:'greenyellow',width:'100%'}}>
            <tr style={{color:'black'}}>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </tr>
            {users.map((user)=>(
                <tr key={user.id} style={{color:'black'}}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default View