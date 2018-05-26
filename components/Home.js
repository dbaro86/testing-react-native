import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PresentationalComponent from './PresentationalComponent';
class Home extends Component{
    state=  {
        myState: 'This is my state'
    }

    updateState = () => this.setState({myState: 'The state is updated'})

    render(){
        return (
            <View>
                <PresentationalComponent myState = {this.state.myState}/>
            </View>
        )
    }
}

export default Home;