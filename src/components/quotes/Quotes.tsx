import axios from "axios";
import React, { useState } from "react";
import {  useQuery  } from "@tanstack/react-query";
import { SafeAreaView, Text, View } from "react-native";
import SelectDropdown , {SelectDropdownProps} from "react-native-select-dropdown";
import {styles} from './styles';

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

async function fetchdata(currcategory ="money"){

    const tempdata = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${currcategory}`,{
        headers: {
            'X-Api-Key' : 'WRq5q+enHOz0STdFsCvgXg==9RHr2HQ7qoTKroWz'
        }}). 
        then((response)=> {return response.data})
        .catch((error)=>{   console.log(error)});

        console.log("Fecthed data");

    return  tempdata;
}



const handelonchange = (currcategory:string )=>{ 
    console.log('handleonchange')
    return(
        useQuery ({
            queryKey: ["Quote", {currcategory}],
            queryFn : async()=> await fetchdata(currcategory),
        })
    )
}

const Props = {
    data: Allcategories,
    onSelect(selectedItem, index) {
        setcurrcategory(selectedItem);
        console.log(selectedItem,index)
    },
    defaultValue:'money'
} as SelectDropdownProps;


const {data ,isLoading , isError} = handelonchange(currcategory)
console.log(data)


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
                    Featching...
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