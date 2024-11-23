import {
    createContext,
    useContext
} from 'react'

import * as types from './actionType'

const initialState = {
    users: [],
    user: {},
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
            case types.UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
                loading: false,
            }
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case types.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false,
            };    
        case types.DELETE_USER:    
            default:    
                return state
    }
}

export default usersReducers