import Recipes from "@/components/recipe-list/recipeList";
import { Allrecipes } from "@/lib/requests";
import Image from "next/image";
import Link from "next/link";

export default async function Page({params}){
    const res=await fetch(`https://dummyjson.com/recipes/${params.id}`);
    const data=await res.json();
    // console.log(data);    

    return(
        <div className="container text">
            <h1 className="font-bold text-3xl font-serif text-center pb-4 pt-1">Recipe Details</h1>
            {
                <div className="card flex  shadow-b-2xl">
                    <div className="rounded">
                        <Image
                        src={data.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-md pr-5"
                        />
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-3xl">
                                {data.name}
                            </h1>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg text-gray-700">
                                {data.mealType[0]}
                            </h5>
                        </div>
                       <div>
                            <h3 className="font-bold text-lg text-gray-700">
                                {data.cuisine}
                            </h3>
                       </div>
                        <div>
                            <h1 className="font-bold text-2xl">Ingredients:</h1>

                            <ul>
                                {
                                    data.ingredients.map((item)=>{
                                        return(
                                            <li className="text-gray-700">
                                            {item}
                                            </li>
                                        )
                                        
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}