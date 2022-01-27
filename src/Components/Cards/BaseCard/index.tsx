/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {View,StyleSheet,StyleProp,ViewStyle} from 'react-native';
import App_Theme from '../../../Configs/theme';

interface BaseCardProps {
    children: React.ReactChild,
    customStyles?: StyleProp<ViewStyle>,
}

const BaseCard = ({...props} :BaseCardProps) =>{

    const {children,customStyles={}} = props;
     return(
         <View style={[styles.defaultStyles, customStyles]}>
             {children}
         </View>
     )
 };

 export default BaseCard;
const styles = StyleSheet.create({
    defaultStyles:{
        backgroundColor:App_Theme.colors.light,
        padding:App_Theme.spacing.s16,
        borderRadius:App_Theme.spacing.s8,
    }
});