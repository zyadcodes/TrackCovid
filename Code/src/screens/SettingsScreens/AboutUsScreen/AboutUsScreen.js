import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BackButton from '../../../components/BackButton/BackButton'
import AppInfoScreen from '../../../components/AppInfoScreen/AppInfoScreen'

const AboutUsScreen = (props) => {
    return (
        <AppInfoScreen
            navigation={props.navigation}
            title="About Us"
            information='TrackCovid was composed by two young high school developers, Zyad and Yousef, who sought to make an impact on the global community by creating an app that kept people informed about the latest coronavirus statistics in order for them to understand the importance of social distancing and quarantine. Our statistics are updated daily and are fetched from the NovelCOVID API'
        />
    )
}

export default AboutUsScreen

