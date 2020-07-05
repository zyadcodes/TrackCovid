import {StyleSheet} from 'react-native'
import colors from '../../config/colors'
import fontStyles from '../../config/fontStyles'
import {screenWidth, screenHeight} from '../../config/dimensions'

export default styles = StyleSheet.create({
    container: {
		flex: 1,
        backgroundColor: colors.darkPurple,
    },
    privacyPolicyText: {
        color: colors.white,
        ...fontStyles.mainTextStyle,
        marginLeft: screenWidth * 0.05
    },
    title: {
      ...fontStyles.longTitleTextStyle,
      ...fontStyles.lightPurple,
      ...fontStyles.bold,
      marginTop: screenHeight * 0.0250,
      marginLeft: screenWidth * 0.05,
      marginBottom: screenHeight * 0.02
    },
})