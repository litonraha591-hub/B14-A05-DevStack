import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnologiesProps } from "../Type/Type";

import { FaCheck } from "react-icons/fa";


interface ITechCartProps{
    technology:ITechnologiesProps ;
    cart:ITechnologiesProps[];
    setCart:Dispatch <SetStateAction<ITechnologiesProps[]>>;
    selectedTechnology: ITechnologiesProps[];
    setSelctedTechnology:Dispatch<SetStateAction<ITechnologiesProps[]>>
}

const TechCart = ({technology, cart, setCart, selectedTechnology, setSelectedTechnology}:ITechCartProps) => {

    const handleAddToStack = () => { setCart((previousCart) => { return [...previousCart, technology]; }); };

    const[isSelected, setIsSelected] = useState(false)
   const handleSelectedTechnology =()=>{
    setIsSelected(true)

    // if(isSelected === true)<FaCheck />
    // {
    //     alert(`${technology.name} added`)
    // }

    setSelectedTechnology([...selectedTechnology, technology]) 
   
   }


    return (
        <div className="">
                <div className="bg-white border-none shadow-gray-300 shadow-md rounded-[7px] ">
                       
                        <div className="m-1 p-4">
                        <div className="flex justify-between">
                        <img src={technology.image} alt={technology.name} className="h=[40px] w-[40px]"/>
                       <button className="p-1 px-4 bg-[#f8ebf1] text-[#ed3b8e] border-none rounded-2xl"> {technology.badge}</button>
                        </div>
                     
                    
                         <h3 className="font-bold text-2xl mt-2 mb-2">{technology.name}</h3>
                    
                        <p className="text-gray-600 font-medium mb-2">{technology.description}</p>
                        <div className="flex justify-between items-center">
                        <button className=" bg-gray-400 px-2 border-none rounded-[10px] mt-2 mb-2">{technology.category}</button>
                        <h2 className="text-gray-600 font-medium">{technology.level}</h2>
                        
                           
                        <h2> {technology.rating}</h2>
                           
                        </div>
                       <button onClick={()=>handleSelectedTechnology()}
                        className="btn btn-active btn-secondary h-auto p-1 mt-2 container mx-auto"
                        disabled={isSelected === true ? true: false}>
                        {isSelected === true ? <span className="flex items-center text-[#ed3b8e] gap-1 font-bold"> <FaCheck />Added to Stack</span>: "Add to Stack"}</button>
                  </div> 
                </div>
        </div>
    );
};

export default TechCart;