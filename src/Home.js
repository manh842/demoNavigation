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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Sticker from 'react-native-vector-icons/dist/FontAwesome';
import LoginScreen from './Login';
import RegisScreen from './Registration';
import LinkPk from './Component/LinkPk';
import CalendarScreen from './Component/calendar'
function HomeScreen({ navigation }) {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={()=>navigation.navigate('LinkPk')}>
          <Icon name="codesquareo" size={26} style={{color:'#f1f1f1',
                  padding:5,
                  margin:10,
                  elevation:5,
                  borderRadius:5,
                  backgroundColor:'#00918d'
          }}/>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
          <Icon name="menu-fold" size={26} 
          style={{color:'#f1f1f1',
                  padding:5,
                  margin:10,
                  borderRadius:5,
                  elevation:5,
                  backgroundColor:'#00918d'
                  
          }}/>
        </TouchableOpacity>
      ),
    });
    return (
      <View style={styles.container}>
        <Image
                style={styles.img}
                source={require('../image/slider-bg-1.jpg')} />
        <ScrollView>
          <View style={styles.body}>
            <View>
              <View style={styles.brand}>
                <Image style={styles.logo}
                source={require('../image/logo.jpg')}/>
                <Text style={{ marginBottom: 20,
                              fontWeight:'bold',
                              fontSize:20,
                              color:'#00918d',
                 }}>
                  Welcome to Lichkham
                                  </Text>
                <View style={styles.box}>
                  <Text style={{ marginBottom: 20,
                              fontWeight:'bold',
                              color:'#00918d',
                 }}

                  >Đăng nhập ngay để đặt lịch</Text>
                  <View style={styles.boxLogin}>
                    <TouchableOpacity style={styles.btn}
                                      onPress={()=>navigation.navigate('Login')}>
                      <Text style={{color:'#fff',}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}
                                       onPress={()=>navigation.navigate('Registration')}>
                      <Text  style={{color:'#00918d',}}>Đăng kí</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tabMenu}>
              <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10}}>Tiện ích</Text>
              <View style={styles.subTabMenu}>
                <TouchableOpacity style={styles.tabItem}>
                  <Sticker name="group" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Khách hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={()=>navigation.navigate('Calendar')}>
                  <Icon name="calendar" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Lịch hẹn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                  <Icon name="team" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Trợ lý</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subTabMenu}>
                <TouchableOpacity style={styles.tabItem}>
                  <Icon name="calculator" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Báo cáo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                  <Icon name="setting" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Cấu hình</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                  <Icon name="user" size={25} style={styles.IconTabMenu} />
                  <Text style={styles.menuTitle}>Tài khoản</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10}}>Thông tin</Text>
            <View style={styles.boxInfo}>
              <View style={styles.itemBox}>
                <TouchableOpacity>
                  <Image style={styles.imageBoxInfo} source={require('../image/nghien-cuu-ai-de-mac-virus-corona.jpg')} />
                  <Text style={{ padding: 10, }}>
                    Thông tin cập nhập về virus Corona mới
                                      </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemBox} >
                <TouchableOpacity>
                  <Image style={styles.imageBoxInfo} source={require('../image/gift.png')} />
                  <Text style={{ padding: 10, }}>
                    Thông tin cập nhập về virus Corona mới
                                      </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxInfo}>
              <View style={styles.itemBox}>
                <TouchableOpacity>
                  <Image style={styles.imageBoxInfo} source={require('../image/Gadient.jpg')} />
                  <Text style={{ padding: 10, }}>
                    Thông tin cập nhập về virus Corona mới
                                      </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemBox} >
                <TouchableOpacity>
                  <Image style={styles.imageBoxInfo} source={require('../image/Gadient.jpg')} />
                  <Text style={{ padding: 10, }}>
                    Thông tin cập nhập về virus Corona mới
                                      </Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
      
    );
  }
  const HomeStack = createStackNavigator();
  
 export default function HomeStackScreen(navigation) {
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} 
                      options={{ title: 'Đăng nhập',
                      headerStyle: {
                              backgroundColor: '#00918d',
                            },
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              color:'#fff'
                            },
                          }}/>
    <HomeStack.Screen name="Login" component={LoginScreen}
                      options={{ title: 'Đăng nhập',
                      headerShown: false,
                      headerStyle: {                                                                                           
                        backgroundColor: '#fff',                                                                                           
                      },                                                                                           
                      headerTitleStyle: {                                                                                          
                        fontWeight: 'bold',                                                                                          
                      },}}/>
    <HomeStack.Screen name="Registration" component={RegisScreen} options={{ title: 'Đăng kí',}} />
    <HomeStack.Screen name="LinkPk" component={LinkPk} options={{ title: 'Liên kết phòng khám'}}  />
    <HomeStack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Lịch hẹn',
                      headerStyle: {
                              backgroundColor: '#00918d',
                            },
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              color:'#fff'
                            },
                          }}  />
  </HomeStack.Navigator>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
    },
    body: {
      flex: 1,
    },
    logo:{
      width:60,
      height:60,
      borderRadius:50
    },
    img: {
      height: 180,
      position: 'absolute',
      width:'100%',
    },
    brand: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    box: {
      backgroundColor: '#fff',
      padding: 10,
      borderColor: '#ddd',
      elevation: 5,
      borderWidth: 0.5,
      borderRadius:5,
      alignItems:'center'
    },
    boxLogin:{
      flexDirection:'row',
    },
    btn:{
      borderColor: '#00918d',
      elevation: 2,
      borderWidth:1,
      borderRadius:3,
      paddingHorizontal:50,
      paddingVertical:10,
      backgroundColor:'#00918d',
      justifyContent:'space-around',
      margin:10
    },
    btn2:{
      borderColor: '#00918d',
      elevation: 4,
      borderWidth: 0.8,
      borderRadius:3,
      paddingHorizontal:50,
      paddingVertical:10,
      backgroundColor:'#fff',
      justifyContent:'space-around',
      margin:10
    },
    tabMenu: {
      paddingHorizontal:5,
      paddingVertical:15,
      marginVertical:20,
      backgroundColor:'#fff'
    },
    subTabMenu: {
      flexDirection: 'row',
    },
    tabItem: {
      alignItems: 'center',
      margin: 10,
      padding: 15,
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      flex:1/3,
      borderRadius:5,
      elevation:5,
      borderWidth: 1,
      borderColor: '#e8ecf0',
    },
    IconTabMenu: {
      color:'#00918d',
    },
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: '#666',
      padding: 10,
      elevation: 5,
    },
    menuItem: {
      alignItems: 'center',
    },
    menuTitle: {
      marginTop: 5,
    },
    boxInfo: {
      flexDirection: 'row',
      backgroundColor:'#f1f1f1'
    },
    imageBoxInfo: {
      flexDirection: 'row',
      flex: 1,
      height: 200,
      width: '100%',
      paddingTop: 10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    itemBox: {
      flex: 1 / 2,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 5,
    }
  })