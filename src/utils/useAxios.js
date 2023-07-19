import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import Auth from '../context/Auth';

const baseURL = 'http://127.0.0.1:8000/';

// function useAxios () {
//     const [authTokens]
// }