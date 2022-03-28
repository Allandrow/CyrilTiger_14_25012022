import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { EmployeesList } from './pages/EmployeesList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<EmployeesList />} />
    </Routes>
  )
}

export default App
