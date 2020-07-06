import React, { useState } from 'react'
import {View, FlatList, Text, TouchableOpacity} from 'react-native'
import styles from './SettingsMainScreenStyle'
import SettingsButton from '../../../components/SettingsButton/SettingsButton'
import {Icon} from 'react-native-elements'
import { fontScale } from '../../../config/dimensions'
import colors from '../../../config/colors'
import BackButton from '../../../components/BackButton/BackButton'
import strings from '../../../config/strings'

const SettingsMainScreen = (props) => {
    const [screens] = useState([
        {title: strings.PrivacyPolicy, screen: 'PrivacyPolicyScreen'},
        {title: strings.TermsOfService, screen: 'TermsOfServiceScreen'},
        {title: strings.AboutUs, screen: 'AboutUsScreen'},
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