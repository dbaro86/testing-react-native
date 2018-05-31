import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    Image,
    TouchableOpacity,
    AsyncStorage
  } from 'react-native';

const Home = () => {

    const goToAbout = () => {
        Actions.about()
    }

    const goToProject = () => {
        Actions.projects()
    }
    const goToPersons = () => {
        Actions.persons()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Welcome to Native Testing</Text>
            <TouchableOpacity onPress = {goToAbout} style={styles.item}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {goToProject} style={styles.item}>
                <Text>List of Project</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {goToPersons} style={styles.item}>
                <Text>List of Persons</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,

    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
        justifyContent: 'center',


    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flex :1,
        margin: 3,
        borderColor: '#2a4944',
        borderWidth: 2,
        backgroundColor: '#7a42f4',
        alignItems: 'center',
        justifyContent: 'center',
    }
})