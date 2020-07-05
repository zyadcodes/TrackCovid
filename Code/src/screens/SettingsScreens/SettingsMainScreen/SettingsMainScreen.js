import React, { useState } from 'react'
import {View, FlatList, Text, TouchableOpacity} from 'react-native'
import styles from './SettingsMainScreenStyle'
import SettingsButton from '../../../components/SettingsButton/SettingsButton'
import {Icon} from 'react-native-elements'
import { fontScale } from '../../../config/dimensions'
import colors from '../../../config/colors'

const SettingsMainScreen = (props) => {
    const [titles, setTitles] = useState([
        'Privacy Policy',
        'Terms of Service',
        'About Us'
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <FlatList
                listKey="SettingsButtons"
                data={titles}
                renderItem={({item, index, separators}) => 
                    <SettingsButton key={index} title={item}/>
                }
            />
            <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack(null)}>
                <Icon 
                    type="font-awesome" 
                    name="arrow-left" 
                    size={fontScale*28} color={colors.white}
                />                        
            </TouchableOpacity>
        </View>
    )
}
export default SettingsMainScreen