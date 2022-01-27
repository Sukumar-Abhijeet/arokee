/**
 *  Created By @name Sukumar_Abhijeet
 */
import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import * as userActions from '../../../State/Actions/userActions';
import { useSelector } from 'react-redux';
import UserCard from '../../../Components/Cards/UserCard';
import App_Theme from '../../../Configs/theme';

const HomeScreen = () =>{
    const dispatch = useDispatch();
    const {
        usersList = []
     } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(userActions.fetchAllUsersInfo(2));
    }, []);

     return(
         <View style={styles.mainContainer}>
             {
                 usersList.map((user,i)=><UserCard customStyles={styles.cardStyles} userInfo={user} key={i} />)
             }
         </View>
     )
 };

 export default HomeScreen;
const styles = StyleSheet.create({
    mainContainer:{
        padding:App_Theme.spacing.s16
    },
    cardStyles:{
        marginBottom:App_Theme.spacing.s8
    }
});