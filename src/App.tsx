import { Route, Routes } from 'react-router-dom'
import { Questions } from './pages/Questions'
import { Result } from './pages/Result'

function App() {
  return (
    <>
      <div className="mb-4 h-100 w-100">
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </>
  )
}

export default App
