import { User } from "../../models";

export enum TypeKeys {
    // Won't match anything
    NULL = 'NULL', 
    ERROR = 'ERROR',
    USER_LOGIN = 'USER_LOGIN'
  };

export interface UserLoginAction {
    type: TypeKeys.USER_LOGIN,
    user: User    
}

export interface UserErrorAction {
    type: TypeKeys.ERROR,
    error: string  
}

export interface NullAction {
    type: TypeKeys.NULL,  
}

export enum UserActionTypes {
        
}


export const userLoginAction = (user: User) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.USER_LOGIN,
        user: user
    })
};

export const userErrorAction = (error: User) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.ERROR,
        error: error
    })
};