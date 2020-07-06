import React, { useState } from 'react'
import {View, TouchableOpacity} from 'react-native'
import styles from './BackButtonStyle'
import {Icon} from 'react-native-elements'
import { fontScale } from '../../config/dimensions'
import colors from '../../config/colors'

const BackButton = (props) => {
    return (
            <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack(null)}>
                <Icon 
                    type="font-awesome" 
                    name="arrow-left" 
                    size={fontScale*28} color={colors.white}
                />                        
            </TouchableOpacity>
    )
}
export default BackButton