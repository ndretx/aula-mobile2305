import React, { Component } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native"

export class MapPage extends Component {
    render() {
        return (
            <View >
                <MapView style={this.styles.map} />
            </View>
        )
    };
    private styles = StyleSheet.create({
        map: {
            zIndex: 0,
            height: "100%",
            width: '100%'
            
        }
    })


}