import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnologiesProps } from "../Type/Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface ITechnologyProps {
technologiesPromise: Promise<ITechnologiesProps[]>;
 cart:ITechnologiesProps[];
 setCart:Dispatch<SetStateAction<ITechnologiesProps[]>>

}

const Technologies = ({ technologiesPromise}: ITechnologyProps) => {
const [cart, setCart] = useState<ITechnologiesProps[]>([]);
  const [selectedTechnology, setSelectedTechnology]=useState<ITechnologiesProps[]>([])
  const technologies = use(technologiesPromise);

  return (
    <div className="ml-23">
      <h1 className="font-bold text-3xl">
        Explore the
        <span className="bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="mb-5">Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3  justify-between">
         <TechnologyCard technologies ={technologies}
         
         cart={cart}
         setCart={setCart}
         selectedTechnology={selectedTechnology}
         setSelectedTechnology= {setSelectedTechnology}
         ></TechnologyCard>
        </div>
        
        <div className="grid col-span-1">
          <YourStack
        
        cart ={cart}
        setCart={setCart}
       selectedTechnology={selectedTechnology}
         setSelectedTechnology= {setSelectedTechnology}
        ></YourStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;


 
// return (
//     <div>
//       <h1 className="font-bold text-3xl">
//         Explore the{" "}
//         <span className="bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent">
//           Technologies
//         </span>
//       </h1>
//       <p>Pick one technology per category to build your ideal stack.</p>
//       <div className="grid grid-cols-4">
//         <div className="grid col-span-3 grid-cols-3">
//           {technologies.map((technology,index:number) => {
//             return (
              
             

//           <div>
//                 <TechnologyCard
//                 key={index}
//                 technology={technology}
//                 cart ={cart}
//                 setCart={setCart}
//               />
             
             
//           </div>
              
//             );
//           })}
//         </div>
//         <YourStack
//         cart ={cart}
//         setCart={setCart}
//         ></YourStack>
//       </div>
//     </div>
//   );