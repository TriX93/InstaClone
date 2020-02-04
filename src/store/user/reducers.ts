import { TypeKeys } from "./actions"

export const user = (state = [], action) => {
    switch (action.type) {
        case TypeKeys.USER_LOGIN:
        return {
            ...state,
            loggedIn: true,
            user: action.user
        }
        
        case TypeKeys.ERROR:
        return {
            ...state,
            loggedIn: false,
            user: null,
            error: action.error
        }
        default:
        return state
    }
}

export const userInitialState = {
    loggedIn: false,
    user: null,
    error: null
}