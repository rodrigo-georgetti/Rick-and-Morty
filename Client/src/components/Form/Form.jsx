import React, { useState } from 'react'
import {styles} from './Form.module.css'
import validator from './validation'
const Form = (props) => {
    const {login} = props
    const [userData, setUserData] = useState({
        email : '',
        password : '',
    })
const [errors, setErrors] = useState({})

    const handleChange = ( event) =>{
        setErrors(validator({...userData, [event.target.name]: event.target.value}))
setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
event.preventDefault()
login(userData)
    }
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label >Email</label>
        <input  type='text' value={userData.email} name = 'email' onChange={handleChange}/>
        {errors.email1 ? (<p>{errors.email1}</p>) 
        : errors.email2 ?  (<p>{errors.email2}</p>)
:        (<p>{errors.email3}</p>)
        }
        </div>
        <div>
        <label >Password</label>
        <input type='text' value={userData.password} name = 'password' onChange={handleChange}/> 
        {errors.password1 ? (<p>{errors.password1}</p>)
        : (<p>{errors.password2}</p>)}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
