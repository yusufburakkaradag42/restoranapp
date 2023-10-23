import { useEffect } from "react";
import yelp from "../api/yelp";

// Arama yapma
export default ()=>{
    const searchApi = async(searchTerm) => {
        await yelp.get('/search' , {
            params :{
                limit: 50 ,
                term:searchTerm ,
                location: 'Konya',
            }
        })
    }
    useEffect(()=>{
        searchApi('Toast');
    },[]);

    return [searchApi];// api dışarı açma 

}