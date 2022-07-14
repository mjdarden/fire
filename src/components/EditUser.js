import React, {useState} from 'react'
import {userRef} from './App'

function EditUser({user, setShowEditBox}) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  function editUser(updatedUser) {
    userRef.doc(updatedUser.id).update(updatedUser).catch((err) => {
      alert(err)
      console.error(err)
    })
  }

  return(
    <div>
      <p>Edit Box</p>
      <input type='text' id='firstName' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}></input>
      <input type='text' id='lastName' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}></input>
      <input type='number' id='age' placeholder='Age' onChange={(e) => setAge(e.target.value)}></input>
      <button onClick={() => {
        editUser({firstName: firstName, lastName: lastName, age: age, id: user.id})
        setShowEditBox(false)
      }}>Update</button>
    </div>
  )
}

export default EditUser