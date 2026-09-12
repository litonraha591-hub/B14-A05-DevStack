import type { Dispatch, SetStateAction } from "react";
import type { ITechnologiesProps } from "../Type/Type";
import { RxCross2 } from "react-icons/rx";

import { Bounce, toast } from "react-toastify";

interface IYourStackProps {
  selectedTechnology: ITechnologiesProps[];
  setSelctedTechnology: Dispatch<SetStateAction<ITechnologiesProps[]>>;
}

const YourStack = ({
  selectedTechnology,
  setSelectedTechnology,
}: IYourStackProps) => {
  const handleRemoveTechnology = (technology: ITechnologiesProps) => {
    const restTechnology = selectedTechnology.filter(
      (selectedTechnology) => selectedTechnology.name !== technology.name,
    );

    setSelectedTechnology(restTechnology);

    toast.warn(`${technology.name} is removed`, {
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
  };
  if (selectedTechnology.length === 0) {
    return (
      <div className="ml-2 h-auto w-auto border-1 max-h-50 border-gray-200 rounded-[7px] m-1 p-2 shadow-gray-300 shadow-md container ">
        <div className="text-2xl font-bold">Your Stack</div>
        <h2 className=" text-gray-500 mb-2 font-medium">
          No technologies selected yet
        </h2>
        <div className=" mt-5 text-gray-500 mb-2 p-5 text-center border-1 border-dashed font-medium">
          Your Stack is empty
        </div>
      </div>
    );
  }

  const handleRemoveAllTechnology = () => {
    setSelectedTechnology([])
    toast.warn('All technology is romoved', {
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
  };

  return (
    <div className="ml-4 w-full rounded-[7px] p-3 shadow-md shadow-gray-400">
      <div className="text-2xl font-medium">Your Stack</div>
      <div className=" text-gray-500 mb-2 ">
        {selectedTechnology.length} Technology Selected
      </div>
      {selectedTechnology.map((technology) => {
        return (
          <div>
            <div className="flex gap-2 items-center justify-between font-medium border mt-3 p-2 rounded-[5px] border-gray-300 shadow-md">
              <div className="flex gap-3 items-center">
                <img
                  src={technology.image}
                  alt={technology.name}
                  className="h-[30px] w-[30px]"
                />
                <div>
                  <h2>{technology.name}</h2>
                  <h2 className="text-[10px]">{technology.category}</h2>
                </div>
              </div>
              <span
                className="cursor-pointer"
                onClick={() => handleRemoveTechnology(technology)}
              >
                <RxCross2 />
              </span>
            </div>
          </div>
        );
      })}
      <button
        onClick={() => handleRemoveAllTechnology(selectedTechnology)}
        className="btn btn-active btn-secondary container mx-auto mt-5"
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
