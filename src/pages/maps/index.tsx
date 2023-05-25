import React, { Component } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export class MapPage extends Component {
    render() {
        return (
            <SafeAreaView style={{
                backgroundColor: 'white',
                
            }} >
                <MapView style={this.styles.map} />
            </SafeAreaView>
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