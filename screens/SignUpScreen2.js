import React, {Component} from 'react';

import { StyleSheet, Text, View,TextInput,TouchableOpacity,Button,
        Image
     } from 'react-native';



 class SignUpScreen2 extends Component{
    
    render(){        
        return(
        <View style={{flex:1,padding:15, backgroundColor:'white'}}>
        {/* Header */}
            <View style={{width:390, height:80, marginBottom:10, marginTop:30, backgroundColor:'white'}}>
            <Text style={{fontSize:30,color:'black'}}>Fill your first name, last name, email and password</Text>

            </View>

            {/* Body */}
            <View style={{height:240, width:390, backgroundColor:'white'}}>
                <View style={{height:200, width:390, backgroundColor:'yellow'}}>
                    <View style={{width:390, height:60}}>
                        <TextInput style={styles.input}
                            placeholder="First name"
                            placeholderTextColor="grey"
                            paddingBottom={2}
                        ></TextInput>
                    </View>
                    <View style={{width:390, height:60}}>
                        <TextInput style={styles.input}
                            placeholder="Last name"
                            placeholderTextColor="grey"
                            paddingBottom={2}
                        ></TextInput>
                    </View>
                    <View style={{width:390, height:60}}>
                    <TextInput style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="grey"
                            paddingBottom={2}
                        ></TextInput>
                    </View>
                    <View style={{width:390, height:60}}>
                    <TextInput style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="grey"
                            paddingBottom={2}
                            secureTextEntry={true}
                        ></TextInput>
                    </View>

                </View>
                

            </View>

            <View style={{width:390, height:90, marginVertical:10}}>
                    <View style={{flex:1,flexDirection:'row',marginVertical:5}}>
                        <Text style={{fontSize:16, color:'grey'}}>Already have an account? </Text><TouchableOpacity><Text style={{fontSize:16, color:'#1E90FF'}}>Sign into LokerLink</Text></TouchableOpacity>

                    </View>
                    <View style={{flex:1,flexDirection:'column',marginVertical:10, alignContent:
                    'space-between'}}>
                        <Text style={{fontSize:16, color:'grey'}}>By signing up, you confirm that you accept our </Text>
                        <View style={{flexDirection:'row'}}><TouchableOpacity><Text style={{fontSize:16, color:'#1E90FF'}}>Term Of Use </Text></TouchableOpacity><Text style={{fontSize:16, color:'grey'}}>& </Text><TouchableOpacity><Text style={{fontSize:16, color:'#1E90FF'}}>Privacy Policy</Text></TouchableOpacity>
                        </View>

                        

                    </View>

                </View>

            {/* Footer */}
            <View style={{flex:1, marginVertical:10,alignItems:'center', justifyContent:'center'}}>
                <View style={styles.btn_singIn}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Experience')}>
                        <Text style={{fontSize:20, color:'white'}}>Next</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
         
        );
    }

               
            
        
}


export default SignUpScreen2;

const styles=StyleSheet.create({
  container:{    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  btn_singIn:{
    backgroundColor:'#1E90FF',      
    height:50,
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
  height:60,
  borderColor:'rgba(0,0,0,0.5)',
  borderBottomWidth:0.8,
    
    fontSize:20,
    paddingBottom:2,
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

