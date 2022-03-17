import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import CreateOrUpdate from './routes/CreateOrUpdate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateOrUpdate />} />
        <Route path="/edit/:id" element={<CreateOrUpdate />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
