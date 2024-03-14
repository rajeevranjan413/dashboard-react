import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from "./pages/Home.jsx"
import Dashboard ,{dashboardDataLoader} from './pages/Dashboard.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route 
        path='dashboard'
        loader={dashboardDataLoader} 
        element={<Dashboard />}

      />
      
    </Route>
  )
)



export default router;