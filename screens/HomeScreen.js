import React, {Component} from 'react';
import { StyleSheet, Text, View,
    
    AsyncStorage
 } from 'react-native';
 import {Container,Header, Left, Right, Icon, Button} from 'native-base'


class HomeScreen extends Component{

   static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name="home" style={{fontSize:24, color:tintColor}}/>
        )
    }

    // _signOutAsync = async () => {
    //   await AsyncStorage.clear();
    //   this.props.navigation.navigate('Auth');
    // };
    

    render(){
        return (
            // <View style={styles.container}>
            // <Text>HomeScreen</Text>
            // </View>
            <Container style={{marginLeft:-140,}}>
                <Header>
                    <Left style={{marginTop:10}}>
                        <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                {/* <Button primary onPress={this._signOutAsync()}><Text>Home</Text></Button> */}
                </View>
            </Container>
        );
}
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
