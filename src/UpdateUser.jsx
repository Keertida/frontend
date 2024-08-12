import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://backend-rxbn.onrender.com/getUser/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err=>console.log(err))
    },[])       
    
    const Update = (e) => {
        e.preventDefault();
        axios.put("https://backend-rxbn.onrender.com/updateUser/"+id,{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <div>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div>
                    <label>Name</label>
                    <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button>update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser