import { createContext, useContext, useState, useEffect, Children } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedAccess = localStorage.getItem("accessToken");
        const storedRefresh = localStorage.getItem("refreshToken");

        if(storedUser && storedAccess && storedRefresh){
            setUser(storedUser);
            setAccessToken(storedAccess);
            setRefreshToken(storedRefresh);

        }
    }, []);

    const login = (userData, access, refresh) => {
        setUser(userData);
        setAccessToken(access);
        setRefreshToken(refresh);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshtoken", refresh);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    };

    return(
        <AuthContext.Provider 
           value={{user, accessToken, refreshToken, login, logout}}>
            {children}
           </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);