import { Routes, Route, Link } from 'react-router-dom'
import PerformanceDashboard from '../../modules/performance/PerformanceDashboard'

export default function AppRouter() {
  return (
    <>
      <nav>
        <Link to="/performance">Performance Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/performance" element={<PerformanceDashboard />} />
      </Routes>
    </>
  )
}
