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
import Icon from 'react-native-vector-icons/AntDesign';
export default function LinkPk(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Phòng khám đã liên kết</Text>
            <TouchableOpacity style={styles.box}>
                <View>
                    <Text style={styles.titleBox}>
                        Nhi thanh hoá
                    </Text>
                    <Text style={styles.local}>
                        Thanh Hoá
                    </Text>
                </View>
                <Icon name="right" size={20} style={{color:'#666'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View>
                    <Text style={styles.titleBox}>
                        Nhi hà nội
                    </Text>
                    <Text style={styles.local}>
                        Hà Nội
                    </Text>
                </View>
                <Icon name="right" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View>
                    <Text style={styles.titleBox}>
                        Nhi thanh hoá
                    </Text>
                    <Text style={styles.local}>
                        Thanh Hoá
                    </Text>
                </View>
                <Icon name="right" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addLink}>
                <Icon style={{color:'#007bff',paddingHorizontal:7}} name="pluscircleo" size={20}/>
                <Text style={{fontWeight:'bold',
                              fontSize:16,
                              color:'#007bff'
            }}>Liên kết thêm phòng khám</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        borderBottomColor:'#666',
        borderBottomWidth:1,
        padding:10,
        elevation:5,
        backgroundColor:'#fff',
        width:'100%'
    },
    box:{
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        width:'90%',
        borderRadius:10,
        elevation:4,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    titleBox:{
        fontWeight:'bold',
        fontSize:17
    },
    addLink:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20
    }

})