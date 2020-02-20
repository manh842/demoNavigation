import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
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
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer';
import HomeStackScreen from './src/Home';
function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

function SettingsScreen(navigation){
  return(
    <Button title="Go to details"
    >

    </Button>
  )
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
function ProfileScreen(){
  return(
    <Text>rfbhdcjkhfurjcn</Text>
  )
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileBox}>
        <TouchableOpacity style={styles.profile}>
          <Image source={require('./image/avatar.jpg')} style={styles.avatar}/>
          <View style={styles.name}>
            <Text style={{fontWeight:'bold',fontSize:15,}}>Nguyễn Mạnh Toàn</Text>
            <Text>0983278814</Text>
          </View>
        </TouchableOpacity>
          <TouchableOpacity style={styles.logout}>
            <Text style={{fontSize:13,color:'#fff'}}>Đăng xuất</Text>
          </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openUrl('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
 function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} 
            drawerContentOptions={{
          activeTintColor: '#00918d',
          itemStyle: { marginVertical: 10 },
        }}drawerStyle={{}}
          >
        <Drawer.Screen name="Home" component={HomeStackScreen}  />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  profileBox:{
    borderBottomWidth:0.5,
    borderBottomColor:'#ddd',
    elevation:5,
    backgroundColor:'#fff',
  },
  profile:{
    flexDirection:'row',
  },
  avatar:{width:65,
    height:65,
    borderRadius:50,
    borderWidth:3,
    borderColor:'#f1f1f1',
    margin:8
  },
  name:{
    paddingHorizontal:10,
    paddingVertical:10
  },
  logout:{
    borderRadius:30,
    paddingVertical:5,
    paddingHorizontal:10,
    backgroundColor:'#00918d',
    marginVertical:10,
    marginHorizontal:100,
    elevation:6
  }
});

// const Tab = createBottomTabNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//       >
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
