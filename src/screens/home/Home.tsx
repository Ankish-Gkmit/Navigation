import React from "react";
import { Homedrawerroute, Homebottomroute } from 'config/Routes';
import { Text, View } from "react-native";


const Homeroot = ()=>{
    return(
        <Homebottomroute/>
    )
}

const Homemain = ()=>{
    return(
        <View>
            <Text>
                This is Homescreen
            </Text>
        </View>
    )
}

const Home = ()=>{
    return(
      <Homedrawerroute/>
    )
}

export { Home,Homeroot,Homemain} ;