import MobileSearchBar from "./MobileSearchBar";
import MobileFilterBtn from "./MobileFilterBtn";

const MobileHeader = () => {
  return (
    <div className="px-6 pt-3.5 flex gap-2.5">
      <MobileSearchBar />
      <MobileFilterBtn />
    </div>
  );
};

export default MobileHeader;
