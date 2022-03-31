import { Routes, Route } from 'react-router-dom'
import { Home, EmployeesList } from '@/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<EmployeesList />} />
    </Routes>
  )
}

export default App
