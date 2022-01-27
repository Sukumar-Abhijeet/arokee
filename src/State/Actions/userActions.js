import {GET_USER_DATA,GET_ALL_USERS_DATA} from '../Constants/user.constants'; 
import { ApiServices } from '../../Api';

export const fetchUserInfo = (userNumber) =>{
    return{
        type: GET_USER_DATA,
        promise:ApiServices.loginUser(userNumber),
    };
};

export const fetchAllUsersInfo = (pageCount) =>{
    return{
        type: GET_ALL_USERS_DATA,
        promise:ApiServices.getAllUsers(pageCount),
    };
};