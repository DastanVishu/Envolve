import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const signInSuccess = (userData) => {
    return {
        type: actionType.SIGNIN_SUCCESS,
        token: userData
    }
}

export const signInFail = (error = null) => {
    return {
        type: actionType.SIGNIN_FAIL,
        error: error
    }
}

export const signIn = (userData) => {
    console.log("you clicked on signIn");
    // return (dispatch) => {
    //     axios.post().then().catch()
    // }
}

export const logout = () => {
    console.log("you clicked on logout");
    // return (dispatch) => {
    //     axios.post().then().catch()
    // }
}