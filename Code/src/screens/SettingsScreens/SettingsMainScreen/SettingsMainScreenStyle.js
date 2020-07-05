import {StyleSheet} from 'react-native'
import colors from '../../../config/colors'
import { fontScale } from '../../../config/dimensions'
import fontStyles from '../../../config/fontStyles'
import {screenWidth, screenHeight} from '../../../config/dimensions'

export default styles = StyleSheet.create({
    container: {
		  flex: 1,
        backgroundColor: colors.darkPurple,
    },
    title: {
      ...fontStyles.bigTitleTextStyle,
      ...fontStyles.lightPurple,
      ...fontStyles.bold,
      marginTop: screenHeight * 0.0250,
      marginLeft: screenWidth * 0.05,
      marginBottom: screenHeight * 0.02
    },
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