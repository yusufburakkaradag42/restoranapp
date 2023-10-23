import axios  from "axios";


export default axios.create( {
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization:
         'Bearer csL2TYNBkLwh1yiBlaONyJRkLRom7OGxKtYnGsqlC9F5oTTpWyn9IlDyskxB2aSQGJEBhLLITG_TkKAMBLRjn5umphGuniueOZChmvsltHPEWqVjM3QgTOH0xDA2ZXYx',
    }

})