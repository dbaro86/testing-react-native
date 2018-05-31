import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <TouchableOpacity onPress={goToHome}>
            <Text>This is a testing project of React Native</Text>
        </TouchableOpacity>
    )
}
export default About
