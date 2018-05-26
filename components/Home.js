import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PresentationalComponent from './PresentationalComponent';
import List from './List';
// class Home extends Component{
//     state=  {
//         myState: 'This is my state'
//     }

//     updateState = () => this.setState({myState: 'The state is updated'})

//     render(){
//         return (
//             <View style = {styles.container}>
//                 <View style = {styles.redbox} />
//                 <View style = {styles.bluebox} />
//                 <View style = {styles.blackbox} />
//             </View>

//         )
//     }
// }

const Home = () => {
    return (
        <List/>
    )
}
export default Home;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
        height: 600
    },

    redbox : {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },

    bluebox : {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },

    blackbox : {
        width: 100,
        height: 100,
        backgroundColor: 'black',
    }
})