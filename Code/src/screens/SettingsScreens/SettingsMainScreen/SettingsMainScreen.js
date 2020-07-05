import React, { useState } from 'react'
import {View, FlatList, Text, TouchableOpacity} from 'react-native'
import styles from './SettingsMainScreenStyle'
import SettingsButton from '../../../components/SettingsButton/SettingsButton'
import {Icon} from 'react-native-elements'
import { fontScale } from '../../../config/dimensions'
import colors from '../../../config/colors'
import BackButton from '../../../components/BackButton/BackButton'

const SettingsMainScreen = (props) => {
    const [screens] = useState([
        {title: 'Privacy Policy', screen: 'PrivacyPolicyScreen'},
        {title: 'Terms and Conditions', screen: 'TermsOfServiceScreen'},
        {title: 'About Us', screen: 'AboutUsScreen'},
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <FlatList
                listKey="SettingsButtons"
                data={screens}
                renderItem={({item, index, separators}) => 
                    <SettingsButton onPress={() => {props.navigation.navigate(item.screen)}} key={index} title={item.title}/>
                }
            />
            <BackButton navigation={props.navigation}/>
        </View>
    )
}
export default SettingsMainScreen