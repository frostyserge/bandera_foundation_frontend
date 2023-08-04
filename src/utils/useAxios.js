import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import Auth from '../context/Auth';
import AuthContext from '../context/Auth';

const baseURL = 'http://127.0.0.1:8000/';

function useAxios () {
    const [authTokens, setUser, setAuthTokens] = useContext(AuthContext)

    const axiosInst = axios.create({
        baseURL,
        headers: {Authorization: `Bearer ${authTokens?.access}`}
    })

    axiosInst.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1 // if the access is expired

        if (!isExpired) return req

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        })
        localStorage.setItem('authTokens', JSON.stringify(response.data))

        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    });

    return axiosInst;
};

export default useAxios;