import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import findingDat from '../utils/searchProducts'
import { Link } from 'react-router-dom'
import { toggleSearchBox } from '../features/search/searchBox'

const SearchBox = () => {

  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)
  const arr2 = arr.splice(0, 5)
  const dispatch = useDispatch()

  return (
    <div
    className='bg-white w-max min-w-[220px] absolute right-4 lg:right-20 top-22 rounded-md text-black p-3 flex flex-col items-start z-9 shadow-2xl'>
        { searchVar !== '' ? <div className='text-start flex flex-col'>
          {arr2.map((elem, idx) => (
            <Link onClick={() => dispatch(toggleSearchBox())} to={`/product/${elem.id}`} key={idx} className='p-1 text-sm'>{elem.name}</Link>
        ))}
        { arr2.length  ? <Link to={`/products/${arr2[0].brand.toLowerCase()}`} onClick={() => dispatch(toggleSearchBox())} className=' text-sm p-1 w-full text-start opacity-75 hover:opacity-100'>Show all ({ arr.length })</Link> : <h1>Search for something</h1>}
        </div> : <h1 className='text-sm opacity-75'>Search for something</h1>}
    </div>
  )
}

export default SearchBox