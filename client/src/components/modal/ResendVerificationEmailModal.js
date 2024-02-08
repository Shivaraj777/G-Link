import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';


function ResendVerificationEmailModal(props) {
  const { isOpen, setIsOpen } = props;
  const [userData, setUserData] = useState({ email: '' });
  console.log(userData);

  // handle form input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }


  // handle res-sending verification email
  const resendVerificationEmail = () => {
    if(userData.email === '' || userData.email === null){
      alert('Please enter a valid email');
      return;
    }

    setIsOpen(false);
    setUserData({ email: '' });
  }


  // handle modal close
  const closeModal = () => {
    setIsOpen(false);
    setUserData({ email: '' });
  }

  return (
    <Transition className='box' appear as={Fragment} show={isOpen}>
      <Dialog as='div' className='dialog-box relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25'></div>
        </Transition.Child>

        <div className='dialog-wrapper fixed inset-0 overflow-y-auto'>
          <div className='dialog-container flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg text-center font-medium leading-6 text-gray-900'
                >
                  Resend Verification Mail
                </Dialog.Title>

                <div className='mt-4'>
                  <div>
                    <div className='mb-6'>
                      <label
                        htmlFor='base-input'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Enter your Email
                      </label>
                      <input
                        type='email'
                        id='base-input'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='John@gmail.com'
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className='modal-footer flex justify-end mt-3'>
                  <button 
                    className='lose-btn mr-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button 
                    className='btn bg-cyan-500 rounded px-4'
                    onClick={resendVerificationEmail}
                  >
                    Send
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ResendVerificationEmailModal;