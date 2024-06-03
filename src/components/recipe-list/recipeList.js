import { Allrecipes } from "@/lib/requests";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

const Recipes = async () => {
  const recipeList = await Allrecipes();

  return (
    <div className="container my-8">
      <div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {recipeList.map((item) => {
            return (
              <Link href={`/recipe-list/${item.id}`}>
                <Card className="my-4 bg-slate-500 shadow-xl hover:scale-110 focus:scale-x-110 hover:shrink transition-all rounded-lg ">
                    <Image
                    className="rounded-2xl"
                    src={item.image}
                    alt=""
                    width={300}
                    height={300}/>
                    <div className="bg-white py-2">
                    <h1 className="px-4 font-bold bg-white py-2">{item.name}</h1>
                    <div className="flex py-3">
                        <div className="bg-white ">
                            <p className="px-4 text-gray-500">Rattings:{item.rating}</p>
                        </div>
                        <div className="bg-white ">
                            <p className="px-4 text-gray-500">{item.cuisine}</p>
                        </div>
                    </div>  
                    </div>                  
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;


