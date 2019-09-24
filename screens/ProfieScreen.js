import React, {Component} from 'react';
import { StyleSheet, Text, View,
    Button,
    AsyncStorage
 } from 'react-native';


class ProfileScreen extends Component{

    

    render(){
        return (
            <View style={styles.container}>
            <Text>ProfileScreen</Text>
            </View>
        );
}
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
