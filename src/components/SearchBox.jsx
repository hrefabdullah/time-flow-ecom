import React from 'react'
import { useSelector } from 'react-redux'
import findingDat from '../utils/searchProducts'

const SearchBox = () => {

  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)
  const arr2 = arr.splice(0, 5)
  console.log(arr2)

  return (
    <div
    className='bg-white w-max min-w-[220px] absolute right-4 lg:right-20 top-22 rounded-md text-black p-3 flex flex-col items-start z-9 shadow-2xl'>
        { searchVar !== '' ? <div className='text-start'>
          {arr2.map((elem, idx) => (
            <h1 key={idx} className='p-1 text-sm'>{elem.name}</h1>
        ))}
        { arr2.length  ? <button className=' text-sm p-1 w-full text-start opacity-75 hover:opacity-100'>Show all ({ arr.length })</button> : <h1>Search for something</h1>}
        </div> : <h1 className='text-sm p-1'>Search for something</h1>}
    </div>
  )
}

export default SearchBox