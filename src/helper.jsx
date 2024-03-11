import axios from "axios";

export const getFavourites= async (id)=>{
    const res= await axios.get(`https://culinary-canvas-backend.onrender.com/api/getFavourites/${id}`,{withCredentials:true});
    const data=await res.data;

    return data.favourites;

}