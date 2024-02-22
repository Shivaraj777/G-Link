import React, { Fragment, useEffect, useState } from 'react';
import { BiGroup } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react';
import Spinner from '../../styles/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { clearFetchedUsers, createeGroupChat, fetchUserChats, fetchUsers } from '../../redux/chat/chat.action';
import { toast } from 'react-toastify';

function CreateGroupChatModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [groupChatName, setGroupChatName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]); // state to manage selected users for creating group chat
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading1, setLoading1] = useState(false);

  const { searchedUsers, isLoadingUsers } = useSelector((state) => state.chat);
  const loading = isLoadingUsers;
  // console.log(loading);


  // fetch users on change in search text
  useEffect(() => {
    if(!search){
      dispatch(clearFetchedUsers());
      return;
    }

    dispatch(fetchUsers(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  // set users in local state from store after fetching users
  useEffect(() => {
    setSearchResult(searchedUsers);
  }, [searchedUsers]);


  // handle modal open
  const openModal = () => {
    setIsOpen(true);
  }


  // handle modal close
  const closeModal = () => {
    setIsOpen(false);
    setGroupChatName('');
    setSearch('');
    setSelectedUsers([]);
    setSearchResult([]);
  }


  // select/add user to group
  const addUserToGroup = (userToAdd) => {
    const userExists = selectedUsers.some((user) => user._id === userToAdd._id);

    if(userExists){
      toast.warn('User is already added to group', {
        autoClose: 2000
      });
    }else{
      setSelectedUsers([...selectedUsers, userToAdd]);
    }
  }


  // remove selected user from group
  const removeUser = (userToRemove) => {
    setSelectedUsers(selectedUsers.filter((user) => user._id !== userToRemove._id));
  }


  // handle creating mew group chat
  const createNewGroupChat = async () => {
    const chatDetails = {
      name: groupChatName,
      users: JSON.stringify(selectedUsers.map((user) => user._id))
    }

    if(!chatDetails.name || JSON.parse(chatDetails.users).length < 2){
      toast.warn('Please provide Group Name with minimum 2 users', {
        autoClose: 2000
      });
      return;
    }

    setLoading1(true);
    await dispatch(createeGroupChat(chatDetails));
    await dispatch(fetchUserChats());
    setLoading1(false);
    await closeModal();
    
    setGroupChatName('');
    setSearch('');
    setSearchResult([]);
    setSelectedUsers([]);
  }


  return (
    <>
      {/* Create Group Chat action icon */}
      <div className='group-icon rounded-full p-2' onClick={openModal}>
        <BiGroup className='icon text-2xl cursor-pointer' />
      </div>

      <Transition className='box' appear as={Fragment} show={isOpen}>
        <Dialog as='div' className='ialog-box relative z-10' onClose={closeModal}>
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
                <Dialog.Panel className='dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'
                  >
                    Create New Group
                  </Dialog.Title>

                  {/* Create Group Chat form */}
                  <div className='mt-4'>
                    <div>
                      <div className='mb-6'>
                        <label
                          htmlFor='base-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                          Group Name
                        </label>
                        <input
                          type='text'
                          id='base-input'
                          className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='e.g. My Group'
                          value={groupChatName}
                          onChange={(e) => setGroupChatName(e.target.value)}
                        />
                      </div>
                      <div className='mb-6'>
                        <label
                          htmlFor='base-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                          Search User
                        </label>
                        <input
                          type='text'
                          id='base-input'
                          className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Add User e.g. John, Jane'
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />

                        {/* Render selected users badge */}
                        <div className='my-4'>
                          {selectedUsers.length !== 0 ? (
                            selectedUsers.map((user, index) => (
                              <li key={index} className='inline-flex flex-wrap"'>
                                <span
                                  id='badge-dismiss-default'
                                  className='inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300'
                                >
                                  {user.name}
                                  <button
                                    type='button'
                                    className='inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300'
                                    data-dismiss-target='#badge-dismiss-default'
                                    aria-label='Remove'
                                    onClick={() => removeUser(user)}
                                  >
                                    <svg
                                      aria-hidden='true'
                                      className='w-3.5 h-3.5'
                                      fill='currentColor'
                                      viewBox='0 0 20 20'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                      ></path>
                                    </svg>
                                    <span className='sr-only'>Remove Badge</span>
                                  </button>
                                </span>
                              </li>
                            ))) : (
                              <></>
                            )
                          }
                        </div>

                        {/* render searched users */}
                        <div className='user-list my-4 overflow-y-scroll'>
                          <div className='h-full'>
                            {loading && search ? (
                              <>
                                <Spinner />
                              </>) : (
                                <>
                                  {searchResult.length !== 0 ? 
                                    (
                                      searchResult.map((user) => (
                                        <li key={user._id} className='px-2 py-2'>
                                          <div className='search-user-box relative flex justify-between items-center'>
                                            <div className='profile absolute left-0'>
                                              <img
                                                className='w-12 h-12 rounded-full'
                                                src={user.profile}
                                                alt='dp-img'
                                              />
                                            </div>

                                            <div className='details w-3/4'>
                                              <h2 className='md:w-32 w-full m-0 text-base'>
                                                {user.name}
                                              </h2>
                                            </div>

                                            <div
                                              className='user-add flex justify-center items-center cursor-pointer rounded-full p-2'
                                              onClick={() => addUserToGroup(user)}
                                            >
                                              <AiOutlinePlus />
                                            </div>
                                          </div>
                                        </li>
                                      ))
                                    ) : (
                                      <>
                                        <div 
                                          className={search === '' && searchResult.length === 0 ? 'hidden' : 'text-center'}
                                        >
                                          <span className='text-gray-500'>No Contacts Found</span>
                                        </div>
                                      </>
                                    )
                                  }
                                </>
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal footer */}
                  <div className='modal-footer flex justify-end mt-3'>
                    <button
                      type='button'
                      className='close-btn mr-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button
                      type='button'
                      className='btn bg-cyan-500 rounded px-4'
                      onClick={createNewGroupChat}
                    >
                      {loading1 ? 'Creating...' : 'Create Group'}
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

export default CreateGroupChatModal;