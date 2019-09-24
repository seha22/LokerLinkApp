import React, {Component} from 'react';
import { StyleSheet, Text, View,
    Button,
    AsyncStorage
 } from 'react-native';


class SettingScreen extends Component{

    // singOut=async()=>{
    //   AsyncStorage.clear()
    //   this.props.navigation.navigate('AuthLoading')
    // }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };

    render(){
        return (
            <View style={styles.container}>
              <Button title='Sign Out' onPress={this._signOutAsync} />
            </View>
        );
}
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
