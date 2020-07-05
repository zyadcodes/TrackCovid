import {StyleSheet} from 'react-native'
import colors from '../../config/colors'
import {screenWidth, screenHeight} from '../../config/dimensions'

export default styles = StyleSheet.create({
    backBtn: {
      width: screenHeight * 0.08,
      height: screenHeight * 0.08,
      borderRadius: screenHeight * 0.04,
      backgroundColor: colors.purple,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      position: 'absolute',
      left: screenWidth*0.05,
      bottom: screenHeight*0.03
    },
})