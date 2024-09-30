import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const signInGithub = () => {
        
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])
    

    const allInfo = {
        loading,
        createUser,
        signIn,
        logOut,
        user,
        setUser,
        signInGoogle,
        signInGithub,
}

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;