import {
    createContext,
    useContext
} from 'react'

import * as types from './actionType'

const initialState = {
    users: [],
    user: [],
    loading: true,
}
const context = createContext(initialState);
export const useValue = () => {
    return useContext(context)
}

const usersReducers = (state = initialState, action) => {
    switch (action.type){
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false, 
            }
            default:    
                return state
    }
}

export default usersReducers