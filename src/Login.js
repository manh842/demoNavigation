import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  ImageBackground
} from 'react-native';
 import {
     TextField,
     FilledTextField,OutlinedTextField
  } from 'react-native-material-textfield';
  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegisScreen from './Registration';
import ImageOverlay from "react-native-image-overlay";
export default function LoginScreen({ navigation }) {
    return (
      // <ImageBackground source={require('../image/image-background.jpg')} style={{width: '100%', height: '100%'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height:'100%',
          backgroundColor:'#fff',
        }}>
        <Image
          source={require('../image/logo-nhithanhhoa-60px.jpg')}
        />
        <Text style={{ fontSize: 30,fontWeight:'bold'}}>LichKham</Text>
        <View style={{ marginTop: 50,}}>
          <View>
            <OutlinedTextField
            label='Tên đăng nhập'
            keyboardType='default'
            baseColor='#555'
          />
          </View>
          <View>
            <OutlinedTextField
            label='Mật khẩu'
            keyboardType='default'
            secureTextEntry={true}
            baseColor='#555'
          />
          </View>
          <TouchableOpacity>
            <Text style={{ color: '#007bff', marginTop: 10 }}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 20, }}>
            <View>
              <Button title="Đăng nhập" >Đăng nhập</Button>
            </View>
            <Text style={{marginHorizontal:140,marginVertical: 10, width: '100%',color:'#007bff' }}>Hoặc</Text>
            <TouchableOpacity style={{width:'100%',alignItems:'center'}}>
                <Icon style={{ color: '#4267b2', paddingRight: 10 }} name="facebook-square" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      // </ImageBackground>
    );
  }