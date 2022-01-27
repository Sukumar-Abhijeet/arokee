/**
 * Created By Sukumar Abhijeet
 */
import {combineReducers} from 'redux';
import { mainConfigs } from '../../Configs/main_configs';
import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './userReducer';

 const config = {
     key: mainConfigs.storeKey,
     storage: AsyncStorage,
 };
 
 const appReducers = combineReducers({
     user: userReducer,
 },config);
 
 const rootReducer = (state, action) => {
     return appReducers(state, action);
 };
 
 export default rootReducer;
 