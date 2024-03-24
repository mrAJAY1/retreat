import {MagnifyingGlass} from '@phosphor-icons/react';
import React from 'react';

const MobileSearchBar = () => {
  return (
    <button className="search-shadow flex flex-grow items-center rounded-full border px-2 py-2.5">
      <span className="mx-4 flex justify-center">
        <MagnifyingGlass weight="bold" size={22} />
      </span>
      <span className="ms-1 flex flex-col items-start">
        <div className="text-sm font-medium">Anywhere</div>
        <div className="flex gap-[1ch] text-xs text-secondary-800">
          <span>Any Week</span>
          <span>&#x2022;</span>
          <span>Add Guests</span>
        </div>
      </span>
    </button>
  );
};

export default MobileSearchBar;
