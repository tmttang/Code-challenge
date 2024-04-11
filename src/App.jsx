import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataProvider } from './store/dataStore'
import './assets/index.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Contact from './pages/contact'
import Project from './pages/project'
import NotFoundPage from './pages/notFoundPage'

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
