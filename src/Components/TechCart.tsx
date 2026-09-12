import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnologiesProps } from "../Type/Type";

import { FaCheck, FaStar } from "react-icons/fa";

import { Bounce, toast } from "react-toastify";

interface ITechCartProps {
  technology: ITechnologiesProps;
  
  selectedTechnology: ITechnologiesProps[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnologiesProps[]>>;
}

const TechCart = ({
  technology,
  selectedTechnology,
  setSelectedTechnology,
}: ITechCartProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectedTechnology = () => {
    setIsSelected(true);
    toast.success(`${technology.name} technology selected`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
console.log(selectedTechnology,"selected");
    // if(isSelected === true)<FaCheck />
    // {
    //     alert(`${technology.name} added`)
    // }

    setSelectedTechnology([...selectedTechnology, technology]);
  };

  return (
    <div
      className={`${isSelected === true ? "border border-[#ed3b8e] rounded-[7px]" : ""}`}
    >
      <div
        className="bg-white border-none shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[7px] transition duration-300
                hover:-translate-y-2  "
      >
        <div className="m-1 p-4 ">
          <div className="lg:flex justify-between  md:grid grid-cols-1">
            <img
              src={technology.image}
              alt={technology.name}
              className="h=[40px] w-[40px]"
            />
            <button className="p-1 px-4 bg-[#f8ebf1] text-[#ed3b8e] border-none rounded-2xl">
              {" "}
              {technology.badge}
            </button>
          </div>

          <h3 className="font-bold text-2xl mt-2 mb-2">{technology.name}</h3>

          <p className=" text-[#475569]  mb-2">{technology.description}</p>
          <div className="flex justify-between items-center gap-1">
            <button className=" bg-gray-300 px-2 text-white border-none rounded-[10px] mt-2 mb-2">
              {technology.category}
            </button>
            <h2 className="text-gray-600 font-medium">{technology.level}</h2>

            <h2 className="flex items-center gap-1">
              {" "}
              <FaStar className="text-yellow-500" />
              {technology.rating}
            </h2>
          </div>
          <button
            onClick={() => handleSelectedTechnology()}
            className={`${isSelected === true ? " btn btn-active btn-secondary h-auto p-1 mt-2 container mx-auto" : "btn btn-active btn-secondary h-auto p-1 mt-2 container mx-auto"}`}
            disabled={isSelected === true ? true : false}
          >
            {isSelected === true ? (
              <span className="flex items-center text-[#ed3b8e] gap-1 font-bold  ">
                {" "}
                <FaCheck />
                Added to Stack
              </span>
            ) : (
              "Add to Stack"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCart;


