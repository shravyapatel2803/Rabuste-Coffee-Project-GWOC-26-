import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user was already logged in
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsAdmin(true);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // SECURITY FIX: Read from Environment Variables
    // This prevents the password from being seen in the GitHub code
    const secureUser = import.meta.env.VITE_ADMIN_USER;
    const securePass = import.meta.env.VITE_ADMIN_PASS;

    if (username === secureUser && password === securePass) {
      localStorage.setItem('adminLoggedIn', 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);