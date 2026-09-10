import { use } from "react";




const Technologies = ({technologiesPromise}) => {
   const technologies =use(technologiesPromise)
   console.log(technologies)
    return (
        <div>
            <h1 className="font-bold text-3xl">Explore the <span className="bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent">Technologies</span></h1>
            <p>Pick one technology per category to build your ideal stack.</p>

            {
                technologies.map((technology)=>{
                    <div>
                <img src={technology.image} alt="" />
              <button>popular</button>
              <h2>React</h2>
              <p>A declarative, component-based
JavaScript library for building modern user
interfaces.</p>
<button>fontend</button>
<button>Begginer-Friendly</button>
            </div>
        </div>

                })
            }
            </div>
    );
};

export default Technologies;