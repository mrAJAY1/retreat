import {Sliders} from '@phosphor-icons/react';
import {useState} from 'react';
import FIlterDrawer from 'common/filter/FilterDrawer';

const MobileFilterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Sliders
          transform="rotate(90)"
          size={18}
          weight="bold"
          className="box-content rounded-full border border-secondary-600 p-2.5"
        />
      </button>
      <FIlterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MobileFilterBtn;
