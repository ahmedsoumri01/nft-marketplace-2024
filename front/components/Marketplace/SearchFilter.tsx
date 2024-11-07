import React from 'react'
import Input from '../inputs/Input'
 
export default function SearchFilter() {
  return (
    <div className='p-2 py-4'>
        <Input
            placeholder="Search for NFTs"
            type="text"
            withIcon={true}
            iconType="FaSearch"
            extraClasses="bg-backgroundSecondary text-white"
            iconExtraClasses="text-white text-lg"
            reverse={true}
        />
    </div>
  )
}