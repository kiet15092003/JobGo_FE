import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import { Register } from './components/Pages/Register/Register';
import { useState, useEffect } from 'react';
import { LoginRouter } from './routers/LoginRouters/LoginRouter';
import { HomePage } from './components/Pages/Home/HomePage';
import { AboutPage } from './components/Pages/About/About';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const storedAuth = localStorage.getItem('isAuth');

  useEffect(() => {
    // Check local storage for login state on initial load
    if (storedAuth) {
      setIsAuth(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRouter isAuth={storedAuth === 'true'? true: false} />}>
          {/* <Route path="/" element={<HomePage onLogout={handleLogout} />} /> */}
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;