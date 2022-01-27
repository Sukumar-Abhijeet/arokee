/**
 *  Created By @name Sukumar_Abhijeet
 */
 import React from 'react';
 import {View,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import UserCard from '../../../Components/Cards/UserCard';
import App_Theme from '../../../Configs/theme';
 
 const SettingsScreen = () =>{
    const {userInfo} = useSelector((state) => state.user);
      return(
          <View style={styles.mainContainer}>
             <UserCard userInfo={userInfo} useOnlyAvatar customStyles={styles.avatar} customImageStyles={styles.imageStyles} />
          </View>
      )
  };
 
  export default SettingsScreen;
 const styles = StyleSheet.create({
     mainContainer:{
         padding:App_Theme.spacing.s16,
     },
     avatar:{
         padding:App_Theme.spacing.s4,alignSelf:'center',
         borderRadius:80,
    },
     imageStyles:{
         width:160,
         height:160,
         borderRadius:80,
     }
 });