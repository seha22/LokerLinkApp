import React,{Component} from 'react';
import { Image,StyleSheet, Text, View,TouchableOpacity,SafeAreaView, ScrollView } from 'react-native';

import {createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator, DrawerItems
} from 'react-navigation'

import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignInScreen from './screens/SignInScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignUpScreen2 from './screens/SignUpScreen2'
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import ProfileScreen from './screens/ProfieScreen'
import ForgotPassScreen from './screens/ForgotPassScreen'
import RegisterScreen from './screens/RegisterScreen'
import ExperienceScreen from './screens/ExperienceScreen2'
import SearchJobScreen from './screens/SearchJobScreen'



const AuthStackNavigator=createStackNavigator({
  Welcome:WelcomeScreen,
  Login:{
    screen:LoginScreen,
    navigationOptions:{
      header:null
    }
  },
  SignIn:SignInScreen,
  
  SignUp:SignUpScreen,
  SignUp2:SignUpScreen2,
  ForgotPass:ForgotPassScreen,
  Register:RegisterScreen,
  Profile:ProfileScreen,
  Experience:ExperienceScreen,
  SearchJob:SearchJobScreen,
})

const CustomeDrawerComponent=(props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('./assets/cr7.jpg')} style={{height:120, width:120, borderRadius:60}}></Image>

    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>

  </SafeAreaView>
)


  

const AppTabNavigator=createDrawerNavigator({
  HomeScreen:{
    screen: HomeScreen,
  },
  ProfileScreen:{
    screen:ProfileScreen

  },SignOut:{
    screen:SettingScreen

  }
},
{
  contentComponent:CustomeDrawerComponent,
  contentOptions:{
    activeTintColor:'orange'
  }
})

const AppStackNavigator=createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    // navigationOptions:{({navigation})=> ({
    //   title:'LokerLink',
      // headerLeft:(

      // <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      //     <View style={{paddingHorizontal:10}}>
      //       <Text style={{fontSize:24, color:'powderblue'}}>=></Text>
      //     </View>
      //   </TouchableOpacity>
      //   )
    // })}

  }

})

const AppStack_noLogin=({
  AppTabNavigator:{
    screen:AppTabNavigator
  }
  }
)


const AppDrawerNavigator=createDrawerNavigator({
  Home:AppStackNavigator,
  Profile:ProfileScreen

})

export default createSwitchNavigator({
  AuthLoading:AuthLoadingScreen,
  Auth:AuthStackNavigator,
   App:AppTabNavigator,
  //  App_no_login:AppStackNavigator
})






