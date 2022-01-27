import  {StyleSheet} from 'react-native';
import App_Theme from '../../Configs/theme';

const {
    colors:{primary,light},
    spacing:{s16,s8},
} = App_Theme;

export const styles = StyleSheet.create({
    defaultStyle:{
        backgroundColor:primary,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:s16,
        borderRadius:s8,
        width:'100%'
    },
    defaultTextStyle:{
        color:light,
        fontWeight:'bold',
    }
});