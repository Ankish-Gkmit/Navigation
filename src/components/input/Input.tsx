import React from "react";
import { Text, TextInput } from "react-native";
import Styles from './styles'

type Myprops = {
    label: string,
    Placeholder: string,
    value:string,
    onchangetext:any,
    securetext: Boolean,
    Props: any

}

const Input = (Prop : Myprops)=> 
{
    return(
        <>
            <Text style={Styles.labelstyle}>
                {Prop.label}
            </Text>
            <TextInput
                placeholder={Prop.Placeholder} 
                value={Prop.value}
                onChangeText={Prop.onchangetext}
                secureTextEntry={Prop.securetext}
                style={Styles.inputstyle}
                {...Prop.Props}
            />
        </>  
    )
}

Input.defaultProps = {
    label: "Default Label",
    Placeholder: "Default Placeholder",
    value: "",
    onchangetext: () => {},
    securetext: false,
    Props: {},
};


export default Input;