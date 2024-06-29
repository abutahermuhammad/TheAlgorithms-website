import React from 'react';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBox = () => {
  return (
    <div className="h-full col-start-2 col-end-12 row-start-1 row-end-2 border flex gap-4">

      <div className="relative w-[calc(100%-48px)] p-4 bg-[#6a748029] rounded-md flex justify-center items-center gap-6">

        <input
          className="w-full h-full bg-transparent border-none outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <IconButton className="h-[52px] w-[52px] text-white bg-primary rounded-md">
        <Search />
      </IconButton>

    </div >
  )
}

export default SearchBox
