/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Routes from './src/components/routes/Routes'

type Props = {};

export default class App extends Component <Props> {
    render() {
        return (
            <Routes/>
        );
    }
}
