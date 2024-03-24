import {Dialog, Transition} from '@headlessui/react';
import {X} from '@phosphor-icons/react';
import {Fragment} from 'react';
import Filters from './Filters';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FIlterDrawer = ({isOpen, setIsOpen}: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-[cubic-bezier(0.1,0.9,0.2,1)] duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-[cubic-bezier(0.1,0.9,0.2,1)] duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 flex w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-[cubic-bezier(0.1,0.9,0.2,1)] duration-500"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-[cubic-bezier(0.1,0.9,0.2,1)] duration-500"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full">
                <Dialog.Panel className="pointer-events-auto relative w-full">
                  <div className="mt-[3vh] flex min-h-[97vh] w-full flex-col overflow-y-auto rounded-t-2xl bg-white shadow-xl">
                    <div className="flex items-center justify-between px-4 py-3">
                      <button
                        type="button"
                        className="absolute left-5 outline-none"
                        onClick={() => setIsOpen(false)}>
                        <X size={20} />
                      </button>
                      <Dialog.Title className="w-full text-center text-base font-semibold leading-6 text-gray-900">
                        Filters
                      </Dialog.Title>
                    </div>
                    <Filters />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FIlterDrawer;
