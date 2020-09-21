import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../../utils/firebase';

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
}

export const AuthContext = createContext<Partial<ContextProps>>({});

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const [loadingAuthState, setLoadingAuthState] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
    });
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      authenticated: user !== null,
      setUser,
      loadingAuthState
    }}>
      {children}
    </AuthContext.Provider>
  )
}
