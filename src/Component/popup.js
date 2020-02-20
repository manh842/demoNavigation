// import {Modal, Text, TouchableHighlight, View, Alert, Button} from 'react-native';
// import React,{Component} from 'react';
// import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
// export default class popup extends Component{
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View>
//       <Dialog
//         animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//                   footer={
//           <DialogFooter>
//             <DialogButton
//               text="CANCEL"
//               onPress={() => {
//                 this.setModalVisible(!this.state.modalVisible);
//               }}
//             />
//             <DialogButton
//               text="OK"
//               onPress={() => {
//                 this.setModalVisible(!this.state.modalVisible);
//               }}
//             />
//           </DialogFooter>
//         }
//       >
//         <DialogContent>
//           <Text>rvfgdbhcjnxk</Text>
//         </DialogContent>
//       </Dialog>
//       <Button onPress={() => {
//             this.setModalVisible(true);
//           }} title="ok"></Button>
//     </View>
//     );
//   }
// }