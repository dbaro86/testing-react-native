import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
class Login extends Component {

    state = {
        user: '',
        password: ''
    }

    handleUser = (text) => {
        this.setState({user: text})
    }

    handlePassword = (text) => {
        this.setState({password: text});
    }

    login = (user, password) => {
        if (user=='admin' && password=='admin')
        {
            Actions.home()
        }
        else
        {
            alert("User and password are incorrect.");
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="User"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           onChangeText={this.handleUser}
                />

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           onChangeText={this.handlePassword}
                />

                <TouchableOpacity style={styles.submitButton}
                                  onPress={() => this.login(this.state.user, this.state.password)}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Login

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },

    submitButton: {
        backgroundColor:'#7a42f4',
        padding: 10,
        margin:15,
        height:40,
        justifyContent: 'center',
    },
    submitButtonText:{
        color: 'white'
    }
})