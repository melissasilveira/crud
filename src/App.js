import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import CreateTask from './routes/CreateTask'
import EditTask from './routes/EditTask'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit" element={<EditTask />} />
    </Routes>
  )
}

export default App
