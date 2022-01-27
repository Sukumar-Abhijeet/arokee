/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import TappableButton from '../../Components/TappableButton';
import OnboardingBlocks from '../../../MockSets/onboarding.json';
import * as userActions from '../../State/Actions/userActions';
import App_Theme from '../../Configs/theme';

interface Props {
    navigation:{
        reset:Function
    };
}

const OnboardingScreen = ({...props} : Props) =>{

    const { navigation } = props;
    const dispatch = useDispatch();

    const resetMyNavigation = () => {
        dispatch(userActions.fetchUserInfo(1));
        navigation.reset({
            index: 0,
            routes: [{ name: 'Drawer' }]
       })
    }

    const renderBlocks = () => {
        return(
            <>
                {
                    OnboardingBlocks.map((block,index) => {
                        return(
                            <View key={index}>
                                <Text style={styles.blockTitle}>{block.title}</Text>
                                <Text style={styles.blockBody}>{block.body}</Text>
                            </View>
                        )
                    })
                }
            </>
        )
    }

     return(
         <View style={styles.mainContainer}>
             <View style={{flex:9,justifyContent:'center',alignItems : 'center'}}>
             {renderBlocks()}
             </View>
             <View style={{flex:1}}>
                <TappableButton text="Done" onPress={resetMyNavigation}/>
             </View>
         </View>
     )
 };

export default OnboardingScreen;

const styles = StyleSheet.create({
    mainContainer:{flex:1,padding:20},
    blockTitle:{
        fontSize:App_Theme.fontSize.f18,
        fontWeight:'bold',
        marginBottom:10,
        color:App_Theme.colors.dark,
        textAlign:'center'
    },
    blockBody:{
        color : App_Theme.colors.grey,
        textAlign:'center',
        marginBottom:App_Theme.spacing.s16,
        fontSize:App_Theme.fontSize.f12,
    }
});