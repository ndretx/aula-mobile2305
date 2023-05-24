import { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default class MenuBar extends Component {

    render() {
        return (
            <View style={this.styles.container}>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Text>
                    Titulo Teste
                </Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Ionicons name="md-checkmark-circle" size={32} color="green" />


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
            height: 40,
            width: "100%",
            marginHorizontal: 16,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            borderColor: "black",
            
        }

    })
}
