import React, {Component} from 'react';
import { StyleSheet, View,Text,Button,TouchableOpacity,Image,
AsyncStorage } from 'react-native';
// import {Container,Header,Content} from 'native-base'

import logo from '../src/images/loker_link_logo.png'


class WelcomeScreen extends Component{

    static navigationOptions={
        Header:null
    }

    render(){
        return (
            <View style={styles.container}>
                       
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={logo}>

                    </Image>

                </View>
                <View style={styles.btn_singIn} >
                    <TouchableOpacity >
                        <Text style={styles.signInText} onPress={()=>this.props.navigation.navigate('Login')}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn_skip} >
                    <TouchableOpacity >
                        <Text style={styles.skipText} onPress={()=>this.props.navigation.navigate('App_no_login')}>Skip to see popular Jobs</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
            
        );
}
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn_singIn:{
        backgroundColor:'#1E90FF',      
        height:50,
        width:380,
        borderRadius:2,
        marginBottom:10,        
        alignItems:'center',
        justifyContent:'center'      
    },
    signInText:{
        fontSize:20,
        color:'white',    
    },
    skipText:{
        fontSize:20,
        color:'#1E90FF',    
    },
    btn_skip:{
        backgroundColor:'#fff',
        borderWidth:1.5,
        borderColor:'#1E90FF',      
        height:50,
        width:380,
        borderRadius:2,
        marginBottom:30,
        alignItems:'center',
        justifyContent:'center'      
    },
    
  });
  
