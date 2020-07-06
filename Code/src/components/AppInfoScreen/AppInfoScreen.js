import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BackButton from '../BackButton/BackButton'
import styles from './AppInfoScreenStyle'

const AppInfoScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.privacyPolicyText}>
                    {props.information}
                </Text>
            </ScrollView>
            <BackButton navigation={props.navigation}/>
        </View>
    )
}

export default AppInfoScreen

