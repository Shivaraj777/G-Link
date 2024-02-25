import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdPhotoCamera } from 'react-icons/md';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { uploadUserProfilePic } from '../../redux/user/user.action';

function UpdateProfileImage() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // state to manage open and close of modal
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePath, setImagePath] = useState('');

  const user = useSelector((state) => state.user.userDetails);


  // handle opening modal
  const openModal = () => {
    setIsOpen(true);
  }


  // handle modal close
  const closeModal = () => {
    setIsOpen(false);
    setImagePath('');
    setSelectedImage(null);
  }


  // handle uploadimg user profile picture
  const uploadImage = async () => {
    if(selectedImage === null){
      toast.warn('Please select an image to update profile picture', {
        autoClose: 2000
      });
      return;
    }

    setLoading(true);
    await dispatch(uploadUserProfilePic(selectedImage));
    setLoading(false);
    
    // toast.success('Profile picture updated successfully', {
    //   autoClose: 2000
    // });

    closeModal();
  }


  // handle image(file) selection
  const imgHandler = (e) => {
    const file = e.target.files[0];

    // if file exists and file is an image
    if(file && file.type.substring(0, 5) === 'image'){
      const imageURL = URL.createObjectURL(file); // create an url for the image
      setImagePath(imageURL);
      setSelectedImage(file);
    }else{
      setSelectedImage(null);
    }
  }


  return (
    <>
      <div className='relative'>
        <div className='user-profile-img rounded-full overflow-hidden'>
          <img src={user.profile} alt='profile-img' />
        </div>
        <div className='profile-user rounded-full'>
          <div className='profile-photo-edit p-2 rounded-full' onClick={openModal}>
            <MdPhotoCamera className='icon text-2xl' />
          </div>
        </div>

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
              <div className='fixed inset-0 bg-black bg-opacity-25' />
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
                    <Dialog.Title as='h3' className='text-lg text-center font-medium leading-6 text-gray-900'>
                      Update Profile Picture
                    </Dialog.Title>

                    <div>
                      {selectedImage ? (
                        <>
                        <img src={imagePath} alt='' className='w-1/2 h-1/2 mx-auto' />
                        </>) : (
                          <>
                            <input
                              id='profile-img-file-input'
                              type='file'
                              name='image'
                              className='profile-img-file-input hidden'
                              accept='image/*'
                              onChange={imgHandler}
                            />
                            <label
                              htmlFor='profile-img-file-input'
                              className='profile-photo-edit mt-2'
                            >
                              <div className='border-dashed border-2 border-sky-500 w-full h-48 full flex justify-center items-center'>
                                <h5 className='text-black'>Choose a file</h5>
                              </div>
                            </label>
                          </>
                        )
                      }
                    </div>

                    <div className='flex'>
                      <div className='mt-4'>
                        <button
                          type='button'
                          className='close-btn inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className='mt-4'>
                        <button
                          type='button'
                          className='close-btn inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          disabled={loading}
                          onClick={uploadImage}
                        >
                          {loading ? 'Uploading...' : 'Upload'}
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}

export default UpdateProfileImage;