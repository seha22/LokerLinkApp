import React, {Component} from 'react';
// import { Container, Header, Form, Item, Label, Button, Content, Input } from 'native-base';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,
    AsyncStorage
 } from 'react-native';


class SignInScreen extends Component{

    singIn=async()=>{
        await AsyncStorage.setItem('userToken','seha')
        this.props.navigation.navigate('App')
    }

    render(){
        return(
          <View style={styles.container}>
            <View style={{marginVertical:50}}>
              <Text style={{fontSize:30, color:'black'}}>
                Welcome Back
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder={"Email"}
                placeholderTextColor={'grey'}>
              </TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'grey'}
                >
              </TextInput>
            </View>
            <View style={{margin:10, alignContent:'flex-end'}}>
              <TouchableOpacity>
                <Text style={{fontSize:16, color:'grey'}} onPress={()=>this.props.navigation.navigate('ForgotPass')}>Forgot password?</Text>
              </TouchableOpacity>
              
            </View>

            <View style={{flex:1,flexDirection:'row',alignContent:'stretch'}}>
              <Text style={{fontSize:16}}>Don't have an account? </Text><TouchableOpacity>
                <Text style={{fontSize:16, color:'#1E90FF'}} onPress={()=>this.props.navigation.navigate('Register')}>Register to LokerLink</Text>
              </TouchableOpacity>
              
            </View>
            
            
            <View style={styles.btn_singIn} >
                    <TouchableOpacity >
                        <Text style={styles.signInText} onPress={this.singIn}>Sign In</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.btn_google} >
                    <TouchableOpacity >
                        <Text style={styles.signInText} onPress={this.singIn}>Login with google</Text>
                    </TouchableOpacity>
            </View>
          </View>
            // <View style={styles.container}>
            // <Button full onPress={this.singIn}/>
            // <Text>login</Text>
            // </View>
        );
    }

               
            
        
}


export default SignInScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    // justifyContent:'center'
  },
  btn_singIn:{
    backgroundColor:'#1E90FF',      
    height:50,
    width:380,
    borderRadius:2,
    margin:10,        
    alignItems:'center',
    justifyContent:'center'      
},
btn_google:{
  backgroundColor:'#B22222',      
  height:50,
  width:380,
  borderRadius:2,
  marginBottom:30,
  marginTop:10,
  alignItems:'center',
  justifyContent:'center'      
},
signInText:{
    fontSize:20,
    color:'white',    
},
inputContainer:{
  margin:10
},
input:{
  width:380,
  height:45,
  borderColor:'rgba(0,0,0,0.5)',
  borderBottomWidth:0.8,
    
    fontSize:20,
    paddingLeft:10,
    backgroundColor:'white',
    marginHorizontal:10
}
})

