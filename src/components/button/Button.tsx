import React from "react";
import { Pressable, Text } from "react-native";
import { Styles } from "./styles";


type Myprops=  {
    title : string,
    Navigating: any
}

const Buttons= ({title, Navigating}:Myprops)=>{
    return(
        <Pressable style={Styles.button} onPress={Navigating}>
        <Text style={Styles.text}>
            {title}
        </Text>
       </Pressable>
    )
}

Buttons.defaultProps = {
 title:"Submit",
 Navigating: ()=>{},
}


export default Buttons;