import { Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense } from "react";

const PerformanceDashboard = lazy(() => import('../../modules/performance/PerformanceDashboard'));

export default function AppRouter() {
  return (
    <>
      <nav>
        <Link to="/performance">Performance Dashboard</Link>
      </nav>
      <Suspense fallback={<div>Loading Performance Dashboard...</div>}>
      <Routes>
        <Route path="/performance" element={<PerformanceDashboard />} />
      </Routes>
      </Suspense> 
    </>
  )
}
