import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './SettingsButtonStyle'
import { Icon } from 'react-native-elements'
import { fontScale } from '../../config/dimensions'
import colors from '../../config/colors'

const SettingsButton = (props) => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.titleText}>
                {props.title}
            </Text>
            <Icon 
                type="ionicon" 
                style={{marginRight: 10}} 
                name="ios-arrow-forward" 
                size={fontScale*24} color={colors.white}
            />
        </TouchableOpacity>
    )
}
export default SettingsButton