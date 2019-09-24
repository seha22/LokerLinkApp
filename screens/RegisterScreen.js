import React, {Component} from 'react';

import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button,
        AsyncStorage
     } from 'react-native';


 class RegisterScreen extends Component{

    render(){
        
        return(
          <View style={{flex:1,paddingHorizontal:20, backgroundColor:'white'}}>
            <View style={{width:380, height:100, marginTop:80,backgroundColor:'white',}}>
              <View style={{flex:1, marginVertical:5}}>
                <Text style={{fontSize:30, color:'black',textAlign:'center'}}>Attract HC on-the-go</Text>
                <Text style={{fontSize:16, color:'grey', textAlign:'center'}}>This is personal branding!</Text>
              </View>
              
            </View>

            <View style={{width:380,height:300, marginRight:5}}>
              <View style={{flex:1, flexDirection:'row',backgroundColor:'white'}}>
              
                <View style={{width:100,height:145, backgroundColor:'white'}}>
                  <Image  style={{width:90, height:140,resizeMode: 'contain'
                    }} source={require('../src/images/icon1.png')}>

                  </Image>
                </View>
                <View style={{width:230,height:145, paddingLeft:5,backgroundColor:'white', justifyContent:'center'}}>
                  <Text style={{fontSize:20, color:'blue'}}>I'm Fresh Graduate</Text>
                  <Text style={{fontSize:20, color:'grey'}}>Start my resume</Text>
                </View>
                <View style={{flex:1,paddingRight:15,marginBottom:10, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                  <Text style={{fontSize:30, color:'blue'}}>></Text>
                  </TouchableOpacity>
                </View>
                
              </View>

              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginRight:4}}>
                <View style={{flex:1,borderBottomWidth:1, borderColor:'grey'}}></View>
                    <View style={{width:30, height:20, alignItems:'center', justifyContent:'center', margin:3}}><Text style={{fontSize:18, color:'grey', margin:2}}>or</Text></View>
                <View style={{flex:1, borderBottomWidth:1, borderColor:'grey', marginLeft:4}}></View>

              </View>

              <View style={{flex:1,flexDirection:'row', backgroundColor:'white'}}>
                <View style={{width:100,height:145, backgroundColor:'white'}}>
                  <Image style={{width:90, height:140,resizeMode: 'contain'}} source={require('../src/images/icon2.png')}/>

                </View>
                <View style={{width:230,height:145, paddingLeft:5,backgroundColor:'white', justifyContent:'center'}}>
                  <Text style={{fontSize:20, color:'blue'}}>I have Work Experience</Text>
                  <Text style={{fontSize:20, color:'grey'}}>Develop my my personal branding</Text>
                </View>
                <View style={{flex:1,paddingRight:15, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:30, color:'blue'}}>></Text>
                </View>
              </View>

              </View>

                
              

            
            
          </View>
          
                   
        );
    }

               
            
        
}


export default RegisterScreen;

const styles=StyleSheet.create({
  container:{    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  btn_singIn:{
    backgroundColor:'#1E90FF',      
    height:45,
    width:390,
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
  width:390,
  height:45,
  borderColor:'rgba(0,0,0,0.5)',
  borderBottomWidth:0.8,
    
    fontSize:20,
    paddingLeft:5,
    backgroundColor:'white',
    // marginHorizontal:10
},
inputPhone:{
  width:390,
  height:45,
  borderColor:'rgba(0,0,0,0.5)',
  borderBottomWidth:0.8,
    
    fontSize:20,
    paddingLeft:5,
    backgroundColor:'white',
    // marginHorizontal:10
},
rdbContain:{
    width:380,
    height:45,
    borderColor:'rgba(0,0,0,0.5)',
    borderBottomWidth:0.8,      
      fontSize:20,
      paddingLeft:10,
      backgroundColor:'white',
      marginHorizontal:10,
      justifyContent:'space-between'
},
datePicker:{
    marginTop:10

}
})

