import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Pages/Login/Login"
import { Register } from "./components/Pages/Register/Register"
import { useState } from 'react';
import { LoginRouter } from './routers/LoginRouters/LoginRouter';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRouter isAuth={isAuth}></LoginRouter>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App