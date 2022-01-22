import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import apiClient from './api';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();


  const login = async(email, password) => {
    const csrf = await apiClient.get('/sanctum/csrf-cookie');
    const login = await apiClient.post('/login', {
            email: email,
            password: password
    });
    const user = await fetchUser();
    return login;
    };

  const register = async(value) => {
    const csrf = await apiClient.get('/sanctum/csrf-cookie');
    const register = await apiClient.post('/register', {
        name: value.firstName+' '+value.lastName,
        email: value.email,
        password: value.password,
        password_confirmation: value.password,
    });
    const user = await fetchUser();
    return register;
  };

  const logout = async(email, password) => {
    const csrf = await apiClient.get('/sanctum/csrf-cookie');
    const user = await apiClient.post('/logout');
    setUser(false);

    return user;
  };

//   const logout = a(email, password) => fetch('http://localhost:3000/api/logout', {
//     method: 'POST',
//     credentials: "include",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
//     },
//   }).then(data => {
//     setUser(false);

//     return data;
//   });

//   const sendPasswordResetEmail = email => { }; // TODO

//   const confirmPasswordReset = (code, password) => { }; // TODO

  const fetchUser = async () => {
    try {
      const user = await apiClient.get('/api/user');
      if (user.status !== 200) {
        setUser(false);
        return;
      }

      const data = user;
      setUser(data);
    } catch (error) {
      setUser(false);
    }
  };

  useEffect(() => {
    if(['/login', '/logout'].includes(router.pathname)) {
      return;
    }

    fetchUser();

    return () => fetchUser();
  }, []);

  return {
    user,
    login,
    register,
    logout,
  };
}