import type { Dispatch, SetStateAction } from "react";
import type { ITechnologiesProps } from "../Type/Type";

interface IYourStackProps{
    selectedTechnology: ITechnologiesProps[];
    setSelctedTechnology:Dispatch<SetStateAction<ITechnologiesProps[]>>
}



const YourStack = ({selectedTechnology,setSelectedTechnology}:IYourStackProps) => {
    console.log(selectedTechnology,'technology')
    return (
        <div className="border-1 m-1">
            <div className="text-2xl font-medium">
                Your Stack
            
            </div>
            <div className="">
                {selectedTechnology.length} Technology Selected
            </div>
     { selectedTechnology.map((technology)=>{
        return( 
         <div className="flex gap-3 items-center font-medium ">
             <img src={technology.image} alt={technology.name} className="h-[40px] w-[40px]" />
             <div><h2>{technology.name}</h2>
             <h2 className="text-[10px]">{technology.category}</h2></div>
         </div>
       

        )
     })
        

     }
        </div>
    );
};

export default YourStack;