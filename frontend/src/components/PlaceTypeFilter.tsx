import { cn } from "@/lib/utils";
import { useState } from "react";

enum Options {
  AnyType = "Any type",
  Room = "Room",
  EntireHome = "Entire home",
}

const buttonClass = (type: Options, selected: Options) => {
  return cn(
    "py-4 px-2 flex-1 font-medium transition-all duration-200",
    selected === type &&
      "bg-gradient-to-b from-[#ffffff29] to-[#ffffff00] shadow-[inset_0_2px_8px_black] bg-[#222222] text-white",
    {
      "rounded-s-xl": type === Options.AnyType,
      "rounded-e-xl": type === Options.EntireHome,
    },
    { "border-s": type !== Options.AnyType }
  );
};

const PlaceTypeFilter = () => {
  const [selected, setSelected] = useState<Options>(Options.AnyType);
  const handleClick = (type: Options) => {
    setSelected(type);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-medium">Type of place</h3>
      <span className="font-light text-sm">
        Search rooms, entire home or any type of place
      </span>
      <div
        className="inline-flex rounded-xl border text-sm text-nowrap"
        role="group"
      >
        <button
          type="button"
          onClick={() => handleClick(Options.AnyType)}
          className={buttonClass(Options.AnyType, selected)}
        >
          Any type
        </button>
        <button
          type="button"
          onClick={() => handleClick(Options.Room)}
          className={buttonClass(Options.Room, selected)}
        >
          Room
        </button>
        <button
          type="button"
          onClick={() => handleClick(Options.EntireHome)}
          className={buttonClass(Options.EntireHome, selected)}
        >
          Entire home
        </button>
      </div>
    </div>
  );
};

export default PlaceTypeFilter;
