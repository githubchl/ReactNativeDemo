import {StyleSheet,} from 'react-native';

const mainTextColor = "#4D4D4D";
const colorBlue = "#2A8CFC";
const mainTextSize = 16;


const common = StyleSheet.create({
    mainFontStyle:{
        color:mainTextColor,
        fontSize: mainTextSize,
    },
    blueFontStyle:{
        color:colorBlue,
        fontSize: mainTextSize,
    }
});

export default common;
export {
    mainTextColor,
    mainTextSize,
    colorBlue
}