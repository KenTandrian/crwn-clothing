import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

// Initial state is the default, only called in the first time.
const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state; 
    }
}

export default userReducer;