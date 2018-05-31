import React from 'react'
import {Router, Scene } from 'react-native-router-flux'
import Home from '../Home'
import About from '../About'
import Login from '../Login'
import ListProjectsView from '../ListProjectsView'
import ListPersonsView from '../ListPersonsView'
const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" />
            <Scene key = "login" component = {Login} title = "Login" initial = {true}/>
            <Scene key = "about" component = {About} title = "About" />
            <Scene key = "projects" component = {ListProjectsView} title = "Projects" />
            <Scene key = "persons" component = {ListPersonsView} title = "Persons" />
        </Scene>
    </Router>
)

export default Routes;