import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

/* 1: Define what information we are going to have */

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

/* 2: Initial State */

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: '',
  favoriteIcon: '',
};

/*3: Define what to expose with the context */

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

/* 4: Create context */
export const AuthContext = createContext({} as AuthContextProps);

/* 5: Expone provider state component  */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}
