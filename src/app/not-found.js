import Link from "next/link";


export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center h-[90vh]"> 
           <div>
           <h1 className="text-bold font-bold font-serif text-2xl">
                This Page Is not Found..
            </h1>
           </div>
            
            <div>
            <Link className="font-bold  text-blue-700" href={"/"}>Go To Home</Link>
            </div>
        </div>
    )
}