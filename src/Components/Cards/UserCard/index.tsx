/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {View,Text,StyleSheet,Image, StyleProp,ViewStyle,TextStyle} from 'react-native';
import App_Theme from '../../../Configs/theme';
import BaseCard from '../BaseCard';

interface UserCardProps {
    userInfo: {
        avatar:string,
        email:string,
        first_name:string,
        last_name:string,
    },
    customStyles?: StyleProp<ViewStyle>,
    customImageStyles?: StyleProp<ViewStyle>,
    customTextStyles?: StyleProp<TextStyle>,
    useOnlyAvatar?: boolean,
}

const UserCard = ({...props}: UserCardProps) =>{
    const {
        userInfo:{
        avatar,
        email,
        first_name,
        last_name,
    },
    customImageStyles = {}, 
    customTextStyles = {},
    customStyles = {},
    useOnlyAvatar = false
} = props;
     return(
         <BaseCard customStyles={[styles.defaultContainerStyles,customStyles]}>
            <>
                <View>
                    <Image source={{uri:avatar}} style={[styles.defaultImageStyles,customImageStyles]} />
                </View>
                {
                    !useOnlyAvatar &&
                    <View style={{marginLeft:App_Theme.spacing.s16}}>
                        <Text style={[styles.defaultNameStyles,customTextStyles]}>{first_name+' '+last_name}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>
                }
            </>
        </BaseCard>
     )
 };

 export default UserCard;
const styles = StyleSheet.create({
    defaultContainerStyles:{flexDirection : 'row',alignItems:'center'},
    defaultImageStyles:{
        width:60,height:60,borderRadius:30
    },
    defaultNameStyles:{
        color:App_Theme.colors.primary,
        fontWeight:'bold',
    },
    email:{
        color:App_Theme.colors.grey,
        marginTop:App_Theme.spacing.s4,
        fontSize: App_Theme.fontSize.f12,
    }
});