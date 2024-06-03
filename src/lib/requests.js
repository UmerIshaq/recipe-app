import { AwardIcon } from "lucide-react";

export const Allrecipes=async ()=>{
    const res= await fetch('https://dummyjson.com/recipes');
    const data=await res.json();
    return data?.recipes;
}
