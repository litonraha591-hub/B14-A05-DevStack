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
            <div>
                {selectedTechnology.length} Technology Selected
            </div>
     { selectedTechnology.map((technology)=>{
        return( 
         <div>
             <img src={technology.image} alt={technology.name} className="h-[40px] w-[40px]" />
             <h2>{technology.name}</h2>
             <h2>{technology.category}</h2>
         </div>
       

        )
     })
        

     }
        </div>
    );
};

export default YourStack;