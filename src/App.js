import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
