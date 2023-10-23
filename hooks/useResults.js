import { useEffect, useState } from "react";
import yelp from "../api/yelp";


// Arama yapma
export default ()=>{
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    try {
        
    } catch (error) {
        
    }
    const searchApi = async(searchTerm) => {
        // hata yakalama
        try {
             const response= await yelp.get('/search' , {
            params :{
                limit: 50 ,
                term: searchTerm ,
                location: 'İstanbul',
            },
        })
        setResults(response.data.businesses);
        setErrorMessage('')
        } catch (error) {
            setErrorMessage('Bağlantı Hatası')
        }
       
    };
    useEffect(() =>{
        searchApi('Toast');
    },[]);

    return [searchApi ,results , errorMessage]; // api dışarı açma 

}