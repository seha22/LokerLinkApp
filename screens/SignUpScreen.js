import React, {Component} from 'react';
// import { Container, Header, Form, Item, Label, Button, Content, Input } from 'native-base';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,Button,
        AsyncStorage
     } from 'react-native';
//  import RadioGroup from 'react-native-radio-buttons-group';
 import DateTimePicker from "react-native-modal-datetime-picker";
 import moment from 'moment';
 import { RadioButton} from 'react-native-paper';
//  import PhoneInput from 'react-native-phone-input';


 class SignUpScreen extends Component{
    constructor(){
        super()

        
        this.state={
            isVisible:false,
            chosenDate:'',
        
        }
    }

    onChanged(text){
      let newText = '';
      let numbers = '0123456789';
  
      for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
          else {
              // your call back function
              alert("please enter numbers only");
          }
      }
      this.setState({ myNumber: newText });
  }

    //DATEPICKER

    handlerPicker=(datetime)=>{
        this.setState({
            isVisible:false,
            // chosenDate:moment(datetime).format('MMMM Do YYYY HH:mm')
            chosenDate:moment(datetime).format('DD-MM-YYYY')
        })
    }

    showPicker=()=>{
        this.setState({
            isVisible:true
        })
    }

    hidePicker=()=>{
        this.setState({
            isVisible:false,
            
        })
    }

  //RADIOBUTTON
    state = {
        value: 'first',
      };

    
    render(){
        
        return(
          //Main
          <View style={{flex:1,padding:10, backgroundColor:'white'}}>
            {/* Header */}
            <View style={{marginVertical:50,backgroundColor:'white',alignItems:'center'}}>
              <View>
                <Text style={{fontSize:25, color:'black'}}>Personal Details</Text>

              </View>
              <View>
                <Text style={{fontSize:16, textAlign:'center'}}>The first step to 'sell' yourself is by letting them know who you are</Text>

              </View>

            </View>

            {/* Body */}
            <View>
              <View>
                <View style={{marginVertical:5, backgroundColor:'white'}}>
                  <Text style={{fontSize:20, color:'black'}}>Gender</Text>
                </View>
                <View style={{marginVertical:5,flexDirection:'row', backgroundColor:'white', height:45, justifyContent:'space-between'}}>
                  <RadioButton.Group
                  onValueChange={value => this.setState({ value })}
                  value={this.state.value}
                  > 
                    <View style={{flexDirection:'row',width:165, height:45, backgroundColor:'#F5FFFA', borderColor:'#D3D3D3', borderWidth:1, borderRadius:4, marginRight:12, alignItems:'center',justifyContent:'center'}}>
                        <View >
                        <RadioButton style={{marginLeft:30}} value="first" />
                        </View>
                        <View>
                        <Text style={{fontSize:20, color:'black'}}>Male</Text>
                        </View>
                    </View>

                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:16}}>or</Text>
                    </View>
                    
                    <View style={{flexDirection:'row',width:165, height:45, backgroundColor:'#F5FFFA', borderColor:'#D3D3D3', borderWidth:1, borderRadius:4, marginLeft:12,alignItems:'center',justifyContent:'center'}}>
                      <View >
                        <RadioButton value="second" />
                      </View>
                      <View>
                        <Text style={{fontSize:20, color:'black'}}>Female</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>
                
              </View>

              <View style={{marginVertical:5, height:150, backgroundColor:'white'}}>
                <View style={{height:45, width:390}}>
                  <DateTimePicker
                      isVisible={this.state.isVisible}
                      onConfirm={this.handlerPicker}
                      onCancel={this.hidePicker}
                      // mode={'datetime'}
                      // is24Hour={true}
                  />
                  <TouchableOpacity onPress={this.showPicker}>
                    <TextInput style={styles.input}
                    placeholder={"Brithdate"}
                    placeholderTextColor={'black'}
                    onPress={this.showPicker}
                    value={this.state.chosenDate}> 
                    </TextInput>
                    <Text style={{position:'relative', bottom:35,fontSize:16, color:'grey', textAlign:'right',paddingRight:15}}>pick a date</Text>
                  </TouchableOpacity>
                </View>

                <View style={{height:45, width:390}}>
                  <TextInput style={styles.inputPhone} 
                  placeholder="Phone number"
                  placeholderTextColor={'black'}
                  keyboardType='numeric'
                  onChangeText={(text)=> this.onChanged(text)}
                  value={this.state.myNumber}
                  maxLength={10}  //setting limit of input
                  />
                  {/* <Text style={{position:'relative', bottom:35,fontSize:16, color:'grey', textAlign:'right',paddingRight:15}}>insert</Text> */}
                </View>

                <View style={{height:45, width:390}}>
                  <TextInput style={styles.inputPhone} 
                  placeholder="Location"
                  placeholderTextColor={'black'}
                  
                  />
                  
                </View>
              </View>

            </View>

            {/* Footer */}
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={styles.btn_singIn} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp2')}>
                        <Text style={styles.signInText} >Next</Text>
                    </TouchableOpacity>
            </View>
            </View>


          </View>



         
        );
    }

               
            
        
}


export default SignUpScreen;

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

