import { Sliders } from "@phosphor-icons/react";
import { useState } from "react";
import FIlterDrawer from "./FIlterDrawer";

const MobileFilterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Sliders
          transform="rotate(90)"
          size={18}
          weight="bold"
          className="rounded-full border border-secondary-600 p-2.5 box-content"
        />
      </button>
      <FIlterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MobileFilterBtn;
