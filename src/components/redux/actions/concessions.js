import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getConcessionSuccess = (data) => {

    return {
        type: actionType.GET_CONCESSION_LIST_SUCCESS,
        conccessionList: data
    }

}

export const addConcessionSuccess = (data) => {
    return {
        type: actionType.ADD_CONCESSION_SUCCESS,
        msg: data
    }
}

export const editConcessionSuccess = (data) => {
    return {
        type: actionType.EDIT_CONCESSION_SUCCESS,
        msg: data,
    }
}

export const deleteConcessionSuccess = (data) => {
    return {
        type: actionType.DELETE_CONCESSION_SUCCESS,
        msg: data
    }
}

export const concessionTaskFail = (data = null) => {
    return {
        type: actionType.CONCESSION_TASK_FAIL,
        msg: data
    }
}

export const getConcession = () => {
    return (dispatch) => {
        axios.get(actionType.SITE_URL + '/api/schooladmin/getconcessions', {
            header: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            console.log(response)
            // if(response.success){
                
            // } else {
            //     dispatch(concessionTaskFail(response.msg))
            // }
        }).catch()
    } 
}

export const createConcession = (data) => {
    return (dispatch) => {
        axios.post(actionType.SITE_URL + '/api/schooladmin/createconcession', data,{
            header: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            console.log(response)
        }).catch()
    }
}

export const editConcession = (data) => {
    return (dispatch) => {
        axios.post(actionType.SITE_URL + '/api/schooladmin/updateconcession', data,{
            header: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            console.log(response)
        }).catch()
    }
}

export const deleteConcession = (data) => {
    return (dispatch) => {
        axios.post(actionType.SITE_URL + '/api/schooladmin/deleteconcession', data,{
            header: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            console.log(response)
        }).catch()
    }
}