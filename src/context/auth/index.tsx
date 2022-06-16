import React, { useContext, useEffect, useState, createContext, ReactNode } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface AuthRouteProps {
  children: ReactNode;
};

interface LoginProps {
  login: boolean;
  setLogin: any;
}

export const LoginContext = createContext({} as LoginProps);

const AuthRoute: React.FunctionComponent<AuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {

    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user && user.uid) {
        setLogin(true);
      } else {
        console.log('desconectado');
        setLogin(false);
        navigate('/');
      }
    });
    return () => AuthCheck();
  }, [auth]);

  return (
    <LoginContext.Provider value={{login, setLogin}}>

    </LoginContext.Provider>
  );
};

export function VerifyLogin() {
  return useContext(LoginContext);
};

export default AuthRoute;
