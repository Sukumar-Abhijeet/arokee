/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {TouchableOpacity,Text,ViewStyle,StyleProp,TextStyle} from 'react-native';
import { styles } from './styles';

interface tappableButtonProps  {
    text: string,
    onPress: Function,
    customStyles?: StyleProp<ViewStyle>,
    customTextStyles?: StyleProp<TextStyle>,
}

const TappableButton = ({...props} : tappableButtonProps) =>{
    const {text,onPress,customStyles,customTextStyles} = props;
     return(
         <TouchableOpacity style={[styles.defaultStyle,customStyles]} onPress={onPress}>
             <Text style={[styles.defaultTextStyle,customTextStyles]}>{text}</Text>
         </TouchableOpacity>
     )
 };

 export default TappableButton;
