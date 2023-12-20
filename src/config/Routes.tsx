import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/login/Login";
import React from "react";
import  {Home, Homeroot, Homemain } from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import Notification from "../screens/notification/Notification";
import Setting from "../screens/setting/Setting";

const Routes =()=>{
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
              <Stack.Screen name='login' component={Login} options={{
                headerShown: false
              }}/>
              <Stack.Screen name='home' component={Home} options={{
                headerTitle: "Home",
                headerTintColor: 'grey',
                headerShown: false
              }}/>
            </Stack.Navigator>
        </NavigationContainer> 
    )
  }
  
  const Homedrawerroute=()=>{
    const Drawer = createDrawerNavigator();
    
    return(
       <Drawer.Navigator screenOptions={{
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: 'grey'
      }}>
         <Drawer.Screen name="homeroot" component={Homeroot }/> 
        <Drawer.Screen name="Profile" component={Profile }/>
     </Drawer.Navigator> 

  )
}

const Homebottomroute= ()=>{
  const Tabs = createBottomTabNavigator();
  return(
    <Tabs.Navigator
    // screenOptions={
    //     ({route})=>({
    //     tabBarIcon : ({focused})=>{

    //     let iconName ;
    //     if(route.name === 'homemain')
    //     {
    //         iconName = focused ? "home":'home-outline'
    //     }else if(route.name === 'notification')
    //     {
    //         iconName = focused ? 'bell-o':'bell'
    //     }else if(route.name === 'setting'){
    //         iconName = focused ? 'settings':'settings-outline'
    //     }
    //     console.log(route.name)
    //     console.log(focused)
    //     console.log(iconName);
    //     count = count+1;
    //     console.log(count);


        // return <Icon name={iconName} size={24} color="black"/>
    // }
    
    
// }
// )
// }
>
    <Tabs.Screen   name="homemain" component={Homemain} />
    <Tabs.Screen  name="notification" component={Notification} />
    <Tabs.Screen   name="setting" component={Setting}/>
</Tabs.Navigator>
  )
  
}


export  {Routes,Homedrawerroute,Homebottomroute};

