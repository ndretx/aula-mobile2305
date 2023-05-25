import { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default class MenuBar extends Component {

    render() {
        return (
            <View style={this.styles.container}>
               <Entypo name="menu" size={24} color="black" />
                <Text style={this.styles.text}>
                    Titulo Teste
                </Text>
                <FontAwesome name="filter" size={24} color="black" />
                <Entypo name="paper-plane" size={24} color="black" />


            </View>
        );
    }
    private styles = StyleSheet.create({
        container: {
            zIndex: 1,
            position: "absolute",
            top: 40,
            left: 5,
            flex: 1,
            height: "10%",
            width: "90%",
            marginHorizontal: 16,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 14,
            borderColor: "black",
            textAlign: 'justify',
            
            
            
            
            
        },
        text: {
            
            color: "black",
            fontWeight: "700",
            fontSize: 16,
            marginHorizontal: 98,
            opacity: .5, 
            justifyContent: 'center',
            marginVertical: 16
        },

    })
}
