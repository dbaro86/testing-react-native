import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native'

class ListProjectsView extends  Component{
    state = {
        projects: []
    }

    componentDidMount= () => {
        fetch("http://10.12.29.188:8000/api/v1/goals/",{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson)=> {
            console.log(responseJson);
            this.setState({
                projects: responseJson
            })
        })
        .catch((error) =>{
            console.error(error);
        })

    }

    onClick(item){
        alert("El proyecto es: " + item.title);
    }

    render(){
        return (
              <View>
                {
                    this.state.projects.map( (item, index)=>(
                            <TouchableOpacity style={styles.item}
                                key=  {item.id}
                               >
                                <Text>
                                    {item.title}
                                </Text>
                                <Text>
                                    {item.description}
                                </Text>
                                <Button title="-"  onPress = {() => this.onClick(item)}></Button>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        )
    }
}


export default ListProjectsView

const styles = StyleSheet.create({
    item: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})