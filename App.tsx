import React from 'react';
import {  View } from 'react-native';
import { MapPage} from './src/pages/maps';
import  MenuBar  from './src/pages/maps/components/menubar';
import { SearchArea } from './src/pages/maps/components/searcharea';

export default function App() {
  return (
   <View>
    <MenuBar/>
    <SearchArea/>
    <MapPage/>
   </View>
  );
}

