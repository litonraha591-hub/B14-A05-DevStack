
import type { ITechnologiesProps } from "../Type/Type";

import type { Dispatch, SetStateAction } from "react";
import TechCart from "./TechCart";

interface ITechnologyCardProps{
technologies:ITechnologiesProps[]
cart:ITechnologiesProps[];
setCart:Dispatch<SetStateAction<ITechnologiesProps[]>>
selectedTechnology: ITechnologiesProps[];
setSelctedTechnology:Dispatch<SetStateAction<ITechnologiesProps[]>>

}


const TechnologyCard = ({technologies, cart, setCart, selectedTechnology, setSelectedTechnology}:ITechnologyCardProps) => {
   
    
   
    return (
       
         
          <div className="lg:grid grid-cols-3 sm:grid grid-cols-1  gap-4 container mx-auto">
             
                  {
                    technologies.map((technology,index:Number)=>{
                return(
                    
                <TechCart technology={technology} cart={cart} setCart ={setCart} key={index} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology }></TechCart>


                        )
                    })
                  }
              
          </div>
        
        
           
   
       
    );
};

export default TechnologyCard;