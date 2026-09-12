
import type { ITechnologiesProps } from "../Type/Type";

import type { Dispatch, SetStateAction } from "react";
import TechCart from "./TechCart";

interface ITechnologyCardProps{
technologies:ITechnologiesProps[]

selectedTechnology: ITechnologiesProps[];
setSelectedTechnology:Dispatch<SetStateAction<ITechnologiesProps[]>>

}


const TechnologyCard = ({technologies, selectedTechnology, setSelectedTechnology}:ITechnologyCardProps) => {
//    console.log(selectedTechnology,"selected")
//    console.log(setSelectedTechnology,"set")
    
   
    return (
       
         
          <div className="lg:grid grid-cols-3 sm:grid grid-cols-1  gap-4 container mx-auto">
             
                  {
                    technologies.map((technology)=>{
                return(
                    
                <TechCart technology={technology}  
                selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology }></TechCart>


                        )
                    })
                  }
              
          </div>
        
        
           
   
       
    );
};

export default TechnologyCard;