import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import app from '../Firebase'
import UserBlock from './UserBlock'
import CreateUser from './CreateUser'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'

const userRef = app.firestore().collection("users")

function App() {

  // const [data, setData] = useState([])
  // const [loader, setLoader] = useState(true)

  // function getData() {
  //   userRef.onSnapshot((querySnapshot) => {
  //     const items = []
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data())
  //     })
  //     setData(items)
  //     setLoader(false)
  //   })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
      <Container 
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}
      >
        <div className='w-100' style={{maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<Dashboard/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export {userRef}
export default App;
