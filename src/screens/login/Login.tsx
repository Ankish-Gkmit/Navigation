import React from "react";
import { SafeAreaView, View } from "react-native";
import Input from "../../components/input/Input";
import Buttons from "../../components/button";
import styles from './styles'




const Login :React.FC<{navigation : any}>  = ({navigation})=>{

    const NavigatetoHome = ()=>{
        navigation.navigate('home');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Input label={"Email"} Placeholder={"enter Email"} />
                <Input label={"Password"} Placeholder={"Password"} securetext={true}/>
                <Buttons title={"Submit"} Navigating={NavigatetoHome}/>
            </View>
        </SafeAreaView>
    )
}

export default Login;