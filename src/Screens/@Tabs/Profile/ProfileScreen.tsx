/**
 *  Created By @name Sukumar_Abhijeet
 */
 import React from 'react';
 import {View} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import UserCard from '../../../Components/Cards/UserCard';

 const ProfileScreen = () =>{
    const {userInfo} = useSelector((state) => state.user);
      return(
         <View style={styles.mainContainer}>
              <UserCard userInfo={userInfo} />
         </View>
      )
  };
 
  export default ProfileScreen;