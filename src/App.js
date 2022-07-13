import './App.css'
import { useState, useEffect } from 'react'
import firebase from './Firebase'
import UserBlock from './components/UserBlock'
import CreateUser from './components/CreateUser'

const userRef = firebase.firestore().collection("users")

function App() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  function getData() {
    userRef.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
      setLoader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Fire App</h1>

      {loader === false && (data.map((user) => (
        <UserBlock user={user}/>
      )))}

      <CreateUser />
    </div>
  );
}

export {userRef}
export default App;
