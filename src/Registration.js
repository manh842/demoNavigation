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
     FilledTextField,
     OutlinedTextField,
  } from 'react-native-material-textfield';
  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function RegisScreen(navigation) {
    return (
      // <ImageBackground source={require('../image/image-background.jpg')} style={{width: '100%', height: '100%',}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:10,
          flex:1,
          height:'100%',
          backgroundColor:'#fff'
        }}>
        <Image
          source={require('../image/logo-nhithanhhoa-60px.jpg')}
        />
        <Text style={{ fontSize:25 }}>LichKham</Text>
        <View style={{ marginTop: 20, width:320}}>
          <FilledTextField
          style={{borderRadius:20}}
            label='Tên đăng nhập'
            keyboardType='default'
            baseColor='#555'
          />
          <FilledTextField
          label='Mật khẩu'
          keyboardType='default'
          secureTextEntry={true}
          baseColor='#555'
        />
        <FilledTextField
          label='Nhập lại mật khẩu'
          keyboardType='default'
          secureTextEntry={true}
          baseColor='#555'
        />
        <FilledTextField
          label='Số điện thoại'
          keyboardType='phone-pad'
          baseColor='#555'
        />
        <FilledTextField
          label='Địa chỉ'
          keyboardType='visible-password'
          baseColor='#555'
        />      
        </View>
        <View style={{ marginTop: 30, width: 280, }}>
          <Button title="Đăng kí"></Button>
        </View>
        <Text style={{ marginTop: 15 }}>OR</Text>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            width: 280,
            height: 36,
            backgroundColor: '#4267b2',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            elevation: 5,
            borderRadius: 3,
            color: '#fff'
          }}>
            <Icon style={{ color: '#fff', paddingRight: 10 }} name="facebook-square" size={25} />
            <Text style={{ color: '#fff', }}>Đăng kí với Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity><Text style={{ color: '#007bff', marginTop: 15 }}>Tôi đã có tài khoản</Text></TouchableOpacity>
      </View>
    //  </ImageBackground>
    );
  }