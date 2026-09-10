import { use } from "react";
import type { ITechnologiesProps } from "../Type/Type";

interface ITechnologyProps{
    technologiesPromise:Promise<ITechnologiesProps[]>;

}


const Technologies = ({technologiesPromise}:ITechnologyProps) => {
   const technologies =use(technologiesPromise)
   console.log(technologies)
    return (
        <div>
            <h1 className="font-bold text-3xl">Explore the <span className="bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent">Technologies</span></h1>
            <p>Pick one technology per category to build your ideal stack.</p>
           <div className="grid grid-cols-4">
            <div className="grid col-span-3 grid-cols-3">
                 {
                technologies.map((technology)=>{
                    return(
                  <div>
                        <img src={technology.image} alt={technology.name} className="h=[20px] w-[20px]"/>
                        <h2>{technology.badge}</h2>
                     
                        <h3>{technology.name}</h3>
                        <p>{technology.description}</p>
                        <button>{technology.category}</button>
                        <button>{technology.level}</button>
                        <h2>{technology.rating}</h2>
                        <button>Add to Stack</button>
                  </div>
                    )
                })
            }
            </div>
            <div className="grid col-span-1">
                your stack
            </div>
           </div>
                    
                
            
            </div>
    );
};

export default Technologies;

{/* //  <div>
//                 <img src={technology.image} alt="" />
//               <button>popular</button>
//               <h2>React</h2>
//               <p>A declarative, component-based
// JavaScript library for building modern user
// interfaces.</p>
// <button>fontend</button>
// <button>Begginer-Friendly</button>
//             </div>
//         </div> */}