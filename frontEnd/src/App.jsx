import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Views/Products'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { UserContext } from './providers/UserProvider'
import { useContext } from 'react'

function App() {
  const { token } = useContext(UserContext)

  return (
    <main>
      <NavigationBar />
      <Routes>
        {/* <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='*'
          element={<NotFound />}
        /> */}

        {/* Admin Routes */}

        {/* <Route
          path='/admin/profile'
          element={token ? <AdminProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/admin/publications'
          element={token ? <AdminPublications /> : <Navigate to='/login' />}
        />
        <Route
          path='/admin/publications/create'
          element={token ? <CreatePublication /> : <Navigate to='/login' />}
        />
        <Route
          path='/admin/products'
          element={token ? <Products /> : <Navigate to='/login' />}
        /> */}

        {/* User Routes */}

        {/* <Route
          path='/user/profile'
          element={token ? <UserProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/user/products'
          element={token ? <Products /> : <Navigate to='/login' />}
        />
        <Route
          path='/user/favorites'
          element={token ? <Favorites /> : <Navigate to='/login' />}
        /> */}
      </Routes>
    </main>
  )
}

export default App
