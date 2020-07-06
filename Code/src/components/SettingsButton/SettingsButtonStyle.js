import {StyleSheet} from 'react-native'
import colors from '../../config/colors'
import { fontScale, screenHeight, screenWidth } from '../../config/dimensions'

export default styles = StyleSheet.create({
    touchable: {
        marginBottom: screenHeight * 0.03,
        height: screenHeight * 0.05,
		width: screenWidth * 0.98,
        borderRadius: 15,
        alignSelf: 'center',
		backgroundColor: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
    },
    titleText: {
        color: colors.white,
        marginLeft: screenWidth * 0.05,
        fontSize: fontScale*18
    }
})