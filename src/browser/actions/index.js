import axios from 'axios';
import { FETCH_USER } from '../shared/constants';

// get the currently logged in user
export const fetchUser = () => async dispatch => {
    const { data } = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: data });
}

export const handleCard = (token) => async dispatch => {
    const { data } = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: data });
}