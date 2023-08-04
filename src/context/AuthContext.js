import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem('authTokens')
        ? JSON.parse(localStorage.getItem('authTokens'))
        : null
    );

    const [user, setUser] = useState(() => 
        localStorage.getItem('authTokens')
        ? jwt_decode(localStorage.getItem('authTokens'))
        : null
    )

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()  // this helps to redirect to the page when a user is logged in

    const loginUser = async (email, password) => {
        const response = await fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json()
        console.log(data);


        if(response.status === 200) { // success 
            console.log('Logged In');
            setAuthTokens(data)
            setUser(jwt_decode(data.access)) // grabbing the access token
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        } else {
            console.log(response.status)
            console.log('We have a server problem')
            alert('Oops! Something went wrong' + response.status)
        }
    }
    
    async function registerUser(email, username, password, password2) {
        const response = await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })
        if(response.status === 201) { // status created
            navigate('/login')
        } else {
            console.log(response.status)
            console.log('We have a server problem')
            alert('Oops! Something went wrong' + response.status)
        }
    }

    function logoutUser() {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    },[])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
};