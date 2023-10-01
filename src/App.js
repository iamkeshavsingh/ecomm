import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import SignUpPage from './pages/SignUp/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
