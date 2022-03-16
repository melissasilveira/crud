import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import CreateTask from './routes/CreateTask'
import EditTask from './routes/EditTask'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
