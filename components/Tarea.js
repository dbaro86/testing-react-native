import React, { Component } from 'react';
type Props = {};
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
export default class Tarea extends Component <Props> {

    constructor(props) {
        super(props);
        this.state = { nombre: "Duany BAro"};
    }

    updateState = () => this.setState({ nombre: 'The state is updated' })


    render() {
        return (
            <View>
                <Text onPress={this.updateState} style={styles.prueba}>
                    Hola MAMI, JEJEJ MARITA, y YO: {this.state.nombre}
                    </Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    prueba: {
         color: 'red',
         backgroundColor: 'blue'
    }
});
