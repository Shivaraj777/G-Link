import React, { Fragment, useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { BsPencil } from 'react-icons/bs';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../../styles/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserProfile } from '../../redux/user/user.action';

function EditProfile() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // get data from store
  const user = useSelector((state) => state.user.userDetails);
  const [userProfileData, setUserProfileData] = useState({
    name: user.name,
    about: user.about
  });


  // handle change in user profile input data
  const handleChange = (e) => {
    setUserProfileData((prevState) => ({...prevState, [e.target.name]: e.target.value }));
  }

  // handle modal open
  const openModal = () => {
    setIsOpen(true);
    setUserProfileData({
      name: user.name,
      about: user.about
    });
  }


  // handle modal close
  const closeModal = () => {
    setIsOpen(false);
  }


  // handle updating user profile
  const handleUpdateProfile = async () => {
    if((userProfileData.name === user.name) && (userProfileData.about === user.about)){
      toast.warn('User Name and About are same, plese change the details and update', {
        autoClose: 2000
      });
      return;
    }

    await dispatch(updateUserProfile(userProfileData));
    setIsOpen(false);
  }

  return (
    <>
    <div className='mx-auto w-full max-w-md rounded-2xl py-2'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex justify-between items-center'>
          <IoMdPerson className='mb-4 mr-4' />
          <span>Profile Edit</span>
        </div>
        <div className='cursor-pointer' onClick={openModal}>
          <BsPencil className='mb-4' />
        </div>
      </div>
    </div>

    {/* modal */}
    <Transition className='box' appear as={Fragment} show={isOpen}>
      <Dialog
        as='div'
        className='dialog-box relative z-10'
        onClose={closeModal}
      >
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
              <Dialog.Panel className='dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Edit Profile
                </Dialog.Title>

                <div className='mb-6'>
                  <label
                    htmlFor='base-input'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='base-input'
                    className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='e.g. john Doe'
                    name='name'
                    value={userProfileData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='base-input'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    About
                  </label>
                  <input
                    type='text'
                    id='base-input'
                    className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='e.g. Hey there! I am using G-Link'
                    name='about'
                    value={userProfileData.about}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  className='button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full'
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </Button>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='close-btn inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
  )
}

export default EditProfile;