import { use, useState} from "react";
import type { ITechnologiesProps } from "../Type/Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface ITechnologyProps {
technologiesPromise: Promise<ITechnologiesProps[]>;


}

const Technologies = ({ technologiesPromise}: ITechnologyProps) => {
// const [cart, setCart] = useState<ITechnologiesProps[]>([]);
  const [selectedTechnology, setSelectedTechnology]=useState<ITechnologiesProps[]>([])
  const technologies = use(technologiesPromise);
// console.log(selectedTechnology,"seleccted")
// console.log(setSelectedTechnology,"set")
  return (
    <div className="ml-23">
      <h1 className="font-bold text-3xl">
        Explore the
        <span className="bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="mb-5">Pick one technology per category to build your ideal stack.</p>
      <div className="lg:grid grid-cols-4 md:grid grid-cols-2  ">
        <div className="grid col-span-3 justify-between ">
         <TechnologyCard technologies ={technologies}
       
         selectedTechnology={selectedTechnology}
         setSelectedTechnology= {setSelectedTechnology}
         ></TechnologyCard>
        </div>
        
        <div className="grid col-span-1">
          <YourStack
      
       selectedTechnology={selectedTechnology}
         setSelectedTechnology= {setSelectedTechnology}
        ></YourStack>
        
        </div>
      </div>
    </div>
  );
};

export default Technologies;


 