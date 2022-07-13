import React, {useState} from 'react'
import {userRef} from '../App'
import EditUser from './EditUser'

function UserBlock({user}) {

  const [showEditBox, setShowEditBox] = useState(false)

  function deleteUser(user) {
    userRef.doc(user.id).delete().catch((err) => {
      alert(err)
      console.error(err)
    })
  }

  return(
    <div key={user.id}>
      <h2>Name: {user.firstName + ' ' +  user.lastName}</h2>
      <h3>Age: {user.age}</h3>
      <button onClick={() => deleteUser(user)}>Delete</button>
      <button onClick={() => setShowEditBox(true)}>Edit</button>
      {showEditBox && <EditUser user={user} setShowEditBox={setShowEditBox}/>}
    </div> 
  )
}

export default UserBlock
