import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchdata(currcategory ="money"){

    const tempdata = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${currcategory}`,{
        headers: {
            'X-Api-Key' : 'WRq5q+enHOz0STdFsCvgXg==9RHr2HQ7qoTKroWz'
        }}). 
        then((response)=> {return response.data})
        .catch((error)=>{   console.log(error)});

        console.log("Fecthed data");

    return await tempdata;
}

const UseQuoteQuery = (currcategory:string )=>{ 
    console.log('handleonchange');
    return(
        useQuery ({
            queryKey: ["Quote"],
            queryFn : async()=> await fetchdata(currcategory),
        })
    )
}


export {UseQuoteQuery};