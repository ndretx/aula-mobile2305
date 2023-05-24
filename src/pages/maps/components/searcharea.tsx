import { Component } from "react";
import { TextInput, View, StyleSheet, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export class SearchArea extends Component {

    render() {
        return (
            <View style={this.styles.container}>
                <Ionicons name="md-search" 
                size={32} 
                color="black" 
                marginLeft={10}
                padding={3}
                />
                <TextInput style={this.styles.text} >
                    Insira aqui seu destino
                </TextInput>
            </View>
        );
    }
    private styles = StyleSheet.create({
        container: {
            zIndex: 1,
            position: "absolute",
            top: 90,
            left: 5,
            flex: 1,
            height: 40,
            width: "90%",
            marginHorizontal: 16,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 0.7,
            

        },
        text: {
            color: "gray",
            fontSize: 16,
            marginHorizontal: 16
        },
    })



}



