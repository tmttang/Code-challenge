import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataProvider } from './hook/DataProvider'
import './assets/index.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Project from './pages/Project'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/project/:projectSlug',
    element: <Project />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
