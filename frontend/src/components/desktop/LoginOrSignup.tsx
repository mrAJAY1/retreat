import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';

type Props = {
  className?: string;
};
const LoginOrSignup = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={openModal}
        className={`${
          props.className && props.className
        } text-md flex w-full items-center`}>
        Signup/Login
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}>
          <div className="flex min-h-screen items-center justify-center px-4 text-center">
            {/* This element is to trick the browser into centering the modal contents. */}
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>
            <Dialog.Panel>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900">
                Login or Signup
              </Dialog.Title>
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Description
                  as="p"
                  className="px-4 pb-4 pt-5 text-sm text-gray-500">
                  Please enter your details to continue.
                </Dialog.Description>
                <form className="mb-4 space-y-4 px-4 pb-4 pt-5">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
                    style={{
                      boxShadow: '0 0 0 3.2px rgba(0, 123, 255, 0.25)',
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
                    style={{
                      boxShadow: '0 0 0 3.2px rgba(0, 123, 255, 0.25)',
                    }}
                  />
                  <button
                    type="submit"
                    className="w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-700">
                    Submit
                  </button>
                </form>
                <button
                  type="button"
                  className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none"
                  onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginOrSignup;
