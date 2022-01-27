import {GET_USER_DATA,GET_ALL_USERS_DATA} from '../Constants/user.constants';
import { getLoadingState } from '../ReduxHelper';

const initialState = {
    userInfo: null,
    userLoading : false,
    usersList : [],
    listLoading: false,
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_USER_DATA:
            return {
                ...state,
                userInfo: action?.response?.data,
                userLoading: getLoadingState(action.mode),
            };
        case GET_ALL_USERS_DATA:
            return {
                ...state,
                usersList: action?.response?.data,
                listLoading: getLoadingState(action.mode),
            };
        default:
            return state;   
    }
}

export default userReducer;