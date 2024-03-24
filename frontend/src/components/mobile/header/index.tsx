import MobileFilterBtn from '../MobileFilterBtn';
import MobileSearchBar from '../MobileSearchBar';

const MobileHeader = () => {
  return (
    <div className="flex gap-2.5 px-6 pt-3.5">
      <MobileSearchBar />
      <MobileFilterBtn />
    </div>
  );
};

export default MobileHeader;
