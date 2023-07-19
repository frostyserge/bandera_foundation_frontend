import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ props }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem('authTokens')
        ? JSON.parse(localStorage.getItem('authTokens'))
        : null
    });
    const [user, setUser] = useState(() => {
        localStorage.getItem('authTokens')
        ? jwt_decode(localStorage.getItem('authTokens'))
        : null
    })

    const [loading, setLoading] = useState(true)

    const history = useHistory()  // this helps to redirect to the page when a user is logged in

    const loginUser = async (email, password) => {
        const response = await fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json'
            },
            

        })
    }
}