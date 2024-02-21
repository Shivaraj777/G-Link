import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

function Searchbar(props) {
  const { openSearchbar, setOpenSearchbar, setSearchQuery } = props;

  // handle search input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  // handle enabling/disabling of searchbar
  const handleSearchbar = () => {
    setOpenSearchbar((prevState) => !prevState);
    setSearchQuery('');
  }

  return (
    <>
      {openSearchbar ? (
        <>
          <div className='input-group flex w-full justify-between overflow-hidden'>
            <div className='relative'>
              <BiSearch 
                className='icon absolute top-6 left-1' 
                size={20}
              />
            </div>
            <input
              className='w-3/4 pl-9 px-5 py-5 focus:outline-none'
              id='searchInput'
              placeholder='Search...'
              onChange={handleChange}
            />
            <div className='flex items-center p-2 cursor-pointer'>
              <RxCross1 className='icon' onClick={handleSearchbar} />
            </div>
          </div>
        </>) : (
          <>
            <div className='search-icon p-2 rounded-full flex justify-center items-center cursor-pointer'>
              <BiSearch className='icon' onClick={handleSearchbar} />
            </div>
          </>
        )
      }
    </>
  )
}

export default Searchbar;