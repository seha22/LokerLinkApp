import React, {Component} from 'react';

import { StyleSheet, Text, View,Image,TouchableOpacity,Button,
        AsyncStorage,
        ScrollView,Animated
     } from 'react-native';
import { Input,Icon,CheckBox} from 'react-native-elements'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';


class ExperienceScreen2 extends Component{

    constructor()
    {
        super();
 
        this.state = { valueArray: [], disabled: false,isVisible:false,
            chosenDate:'' }
 
        this.index = 0;
 
        this.animatedValue = new Animated.Value(0);
    }

    addMore = () =>
    {
        this.animatedValue.setValue(0);
 
        let newlyAddedValue = { index: this.index + 2 }
 
        this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
        {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start(() =>
            {
                this.index = this.index + 1;
                this.setState({ disabled: false });
            }); 
        });              
    }

    state= {
        check:false,
        check1:false
    }

    checkBox_klik()
    {
        this.setState({
            check:!this.setState.check
        }) 
        alert('value is '+ !this.state.check);
    }



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

    

    render(){

        // const animationValue = this.animatedValue.interpolate(
        //     {
        //         inputRange: [ 0, 1 ],
        //         outputRange: [ -59, 0 ]
        //     });
     
            let newArray = this.state.valueArray.map(( item, key ) =>
            {
                
                
                    return(
                        <View key = { key } style={{ marginTop:10,width:380, height:380, borderColor:'grey', borderWidth:0.5, borderRadius:2}}>
                    <Text style={{paddingLeft:10,fontSize:18, color:'grey'}}>Experience { item.index }</Text>
                <Input
                    placeholder='Input company name'
                    label='Company Name'
                    labelStyle={{fontSize:20,color:'black'}}
                    leftIcon={
                        <Icon
                        name='account-balance'
                        size={24}
                        color='black'
                        />
                    }
                    />
                    <Input
                    placeholder='Input job titel'
                    label='Job Title'
                    labelStyle={{fontSize:20 ,color:'black'}}
                    leftIcon={
                        <Icon
                        name='portrait'
                        size={24}
                        color='black'
                        />
                    }
                    />
                    <Input
                    placeholder='Input job function'
                    label='Job Function'
                    labelStyle={{fontSize:20,color:'black'}}
                    leftIcon={
                        <Icon
                        name='build'
                        size={24}
                        color='black'
                        />
                    }
                    />

                    <View  style={{flexDirection:'row',marginVertical:5}}>
                        <View style={{width:100, flex:1}}>
                        <DateTimePicker
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlerPicker}
                            onCancel={this.hidePicker}
                            // mode={'datetime'}
                            // is24Hour={true}
                        />
                            <Input
                            placeholder={this.state.chosenDate?this.state.chosenDate:'DD/MM/YYYY'}
                            label='Start'
                            labelStyle={{fontSize:20, color:'black'}}
                            leftIcon={
                            <Icon
                            name='date-range'
                            size={24}
                            color='black'
                            onPress={this.showPicker}
                            // shake={this.state.chosenDate}
                            />
                                }
                                />
                        </View>
                        <View style={{width:100, flex:1}}>
                        <DateTimePicker
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlerPicker}
                            onCancel={this.hidePicker}
                            // mode={'datetime'}
                            // is24Hour={true}
                        />
                            <Input
                            placeholder={this.state.chosenDate?this.state.chosenDate:'DD/MM/YYYY'}
                            label='End'
                            labelStyle={{fontSize:20, color:'black'}}
                            leftIcon={
                            <Icon
                            name='date-range'
                            size={24}
                            color='black'
                            onPress={this.showPicker}
                            // shake={this.state.chosenDate}
                            />
                                }
                                />

                        </View>
                        
                    </View>
                   
                    {/* <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                    <CheckBox
                        title='I am still intern here'
                        textStyle={{fontSize:18}}
                        checked={this.state.check}
                        onPress={() => this.setState({ check: !this.state.check })}
                        />
                        </View>
                     */}
                </View>

                    );
                
            });
        
        return(
          <View style={{flex:1, backgroundColor:'white'}}>
            {/* Header */}
            <ScrollView>
            <View style={{ marginHorizontal:10, marginTop:10, marginBottom:20,width:380, height:140, backgroundColor:'white'}}>
                <View style={{marginTop:5,alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:20, color:'#1E90FF'}}>I'M FRESH GRADUATE </Text>
                </View>
                <View style={{marginVertical:10, alignItems:'center', justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{fontSize:24, color:'black'}}>Internship Experience </Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16, color:'grey', textAlign:'center'}}>They would have to hear your experience  working as an intern. Spread the words </Text>
                    </View>

                </View>

            </View>
            
            {/* Body */}
            <View style={{margin:10,alignItems:'center', justifyContent:'center'}}>
            


                <View style={{width:380, height:380, borderColor:'grey', borderWidth:0.5, borderRadius:2}}>
                    <Text style={{paddingLeft:10,fontSize:18, color:'grey'}}>Experience 1</Text>
                <Input
                    placeholder='Input company name'
                    label='Company Name'
                    labelStyle={{fontSize:20,color:'black'}}
                    leftIcon={
                        <Icon
                        name='account-balance'
                        size={24}
                        color='black'
                        />
                    }
                    />
                    <Input
                    placeholder='Input job titel'
                    label='Job Title'
                    labelStyle={{fontSize:20 ,color:'black'}}
                    leftIcon={
                        <Icon
                        name='portrait'
                        size={24}
                        color='black'
                        />
                    }
                    />
                    <Input
                    placeholder='Input job function'
                    label='Job Function'
                    labelStyle={{fontSize:20,color:'black'}}
                    leftIcon={
                        <Icon
                        name='build'
                        size={24}
                        color='black'
                        />
                    }
                    />

                    <View style={{flexDirection:'row',marginVertical:5}}>
                        <View style={{width:100, flex:1}}>
                        <DateTimePicker
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlerPicker}
                            onCancel={this.hidePicker}
                            // mode={'datetime'}
                            // is24Hour={true}
                        />
                            <Input
                            placeholder={this.state.chosenDate?this.state.chosenDate:'DD/MM/YYYY'}
                            label='Start'
                            labelStyle={{fontSize:20, color:'black'}}
                            leftIcon={
                            <Icon
                            name='date-range'
                            size={24}
                            color='black'
                            onPress={this.showPicker}
                            // shake={this.state.chosenDate}
                            />
                                }
                                />
                        </View>
                        <View style={{width:100, flex:1}}>
                        <DateTimePicker
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlerPicker}
                            onCancel={this.hidePicker}
                            // mode={'datetime'}
                            // is24Hour={true}
                        />
                            <Input
                            placeholder={this.state.chosenDate?this.state.chosenDate:'DD/MM/YYYY'}
                            label='End'
                            labelStyle={{fontSize:20, color:'black'}}
                            leftIcon={
                            <Icon
                            name='date-range'
                            size={24}
                            color='black'
                            onPress={this.showPicker}
                            // shake={this.state.chosenDate}
                            />
                                }
                                />
                        </View>
                        
                    </View>
                    
                    <View style={{alignItems:'flex-start', justifyContent:'center'}}>
                    <CheckBox
                        title='I am still intern here'
                        // fontFamily='Georgia'
                        textStyle={{fontSize:18}}
                        checked={this.state.check}
                        onPress={() => this.setState({ check: !this.state.check })}
                        />
                        </View>
                    
                </View>                
                
               
                <View>
                {
                        newArray
                    }
                </View>

                <View style={{marginLeft:10, alignItems:'flex-start'}}>
                
                <View style={{flexDirection:'row',marginVertical:10}}>
                
                        
                        <TouchableOpacity  textStyle={{fontSize:20, color:'#1E90FF'}}
                             onPress = { this.addMore }> 
                            <Icon name='add-box' size={24} color='#1E90FF'/> 
                            </TouchableOpacity>
                        <Text style={{paddingLeft:5,fontSize:20, color:'#1E90FF'}}>Add Intern Experience</Text>
                                   
                    </View>

                    

                </View>

            </View>

            {/* Footer */}
            <View style={{marginHorizontal:10, marginTop:10, marginBottom:20,alignItems:'center'}}>

            <View style={{flexDirection:'row',width:380, height:140, backgroundColor:'white',justifyContent:'space-between'}}>
                <View style={{width:175, height:50, backgroundColor:'white', borderWidth:2, borderColor:'#1E90FF', borderRadius:2,alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:20, color:'#1E90FF'}}>Skip</Text>

                </View>
                <View style={{width:175, height:50, backgroundColor:'#1E90FF',borderRadius:2, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:20, color:'white'}}>Next</Text>

                </View>
            </View>
            </View>
            
            </ScrollView>
          </View>
          
                   
        );
    }

               
            
        
}


export default ExperienceScreen2;

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#eee',
            justifyContent: 'center',
            paddingTop: 0
        },
    
        viewHolder:
        {
            height: 55,
            backgroundColor: '#26A69A',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 4
        },
    
        text:
        {
            color: 'white',
            fontSize: 25
        },
    
        btn:
        {
            position: 'absolute',
            right: 25,
            bottom: 25,
            borderRadius: 30,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 15
        },
    
        btnImage:
        {
            resizeMode: 'contain',
            width: '100%',
            tintColor: 'white'
        }
    });