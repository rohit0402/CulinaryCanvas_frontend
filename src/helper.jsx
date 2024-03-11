import axios from "axios";

export const getFavourites= async (id)=>{
    const res= await axios.get(`http://localhost:3000/api/getFavourites/${id}`,{withCredentials:true});
    const data=await res.data;

    return data.favourites;

}