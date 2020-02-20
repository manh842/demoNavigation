/**
 * @format
 */
import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import Icon from  'react-native-vector-icons/AntDesign';
import App from './App';
import {name as appName} from './app.json';


 
AppRegistry.registerComponent('demoNavigation', () => App);
