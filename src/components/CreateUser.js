import React, {useState} from 'react'
import {userRef} from '../App'
import {v4 as uuidv4} from 'uuid'

function CreateUser() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  function createNewUser(newUserObj) {
    userRef.doc(newUserObj.id).set(newUserObj).catch((err) => {
      alert(err)
      console.error(err)
    })
  }

  return(
    <div>
      <input type='text' id='firstName' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}></input>
      <input type='text' id='lastName' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}></input>
      <input type='number' id='age' placeholder='Age' onChange={(e) => setAge(e.target.value)}></input>
      <button onClick={() => {
        createNewUser({firstName, lastName, age, id: uuidv4()})
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('age').value = ''
      }}>Create User</button>
    </div> 
  )
}

export default CreateUser