import axios from "axios";
import React, { useState } from "react";
import {  useQuery  } from "@tanstack/react-query";
import { SafeAreaView, Text, View } from "react-native";
import SelectDropdown , {SelectDropdownProps} from "react-native-select-dropdown";
import {styles} from './styles';
import { UseQuoteQuery } from "hooks/UseQuotes";


const Quotes= ()=>{

const [currcategory, setcurrcategory] = useState('money');

const Allcategories = [
'age',
'alone',
'amazing',
'attitude',
'best',
'birthday',
'business',
'car',
'change',
'communication',
'death',
'design',
'dreams',
'education',
"money",
'success'
]

const Props = {
    data: Allcategories,
    onSelect(selectedItem, index) {
        setcurrcategory(selectedItem);
        refetch(selectedItem);
        console.log(selectedItem,index)
    },
    defaultValue:'money'
} as SelectDropdownProps;


const {data ,isLoading , refetch,isError} = UseQuoteQuery(currcategory)

console.log(data);

if(isError)
{
    return <Text>
        Error
    </Text>
}

return(
    <View style={styles.container}>
            <SelectDropdown {...Props} buttonStyle={{
                backgroundColor: '#b5bfeb',
                borderBlockColor: "black",
                borderRadius: 10,
                
            }}
                defaultButtonText="money"
            />
            {
                isLoading ? 
                <Text>
                    Fetching...
                </Text>
                :
                <View>

                <Text style={styles.author}>
                    {data && data[0].author}
                </Text>
                <Text  style={styles.quote} >     
                    {data && data[0].quote}
                </Text>
             </View>
            }
    </View>
)}

export {Quotes};