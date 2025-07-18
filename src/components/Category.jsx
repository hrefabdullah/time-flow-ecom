import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateType } from '../features/search/filterSearch'

const Category = ({ type }) => {

    const dispatch = useDispatch()

    const isDark = useSelector((state) => state.darkMode)

    const genders = [
        {
            type: "Men",
            url: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMHdhdGNofGVufDB8fDB8fHww'
        },
        {
            type: "Women",
            url: 'https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            type: 'Kids',
            url: 'https://images.unsplash.com/photo-1590003168429-4b47c1dd9b08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMHdhdGNoZXN8ZW58MHx8MHx8fDA%3D'
        }
    ]
    const brands = ['Timex', 'Titan', 'Fasttrack']

    return (
        <>
            {type === 'gender' && 
            <div
            className='w-full h-[30vh] md:h-[40vh] flex'>
                {genders.map((elem, idx) => (
                    <Link to={`/products/${elem.type.toLowerCase()}`} onClick={() => dispatch(updateType(elem.toLowerCase()))}
                    className='relative flex w-full justify-center items-center text-white'
                    key={idx}>
                        <img
                        className={`absolute z-2 w-[100%] h-full object-cover hover:blur-xs`}
                        src={elem.url} alt={elem.type}  />
                        <h1
                        className='w-full text-shadow-2xl z-3'
                        >{elem.type}'s Watches</h1>
                    </Link>
                ))}
            </div>}
            {type === 'brands' && 
            <div
            className='w-full h-[40vh] flex flex-col px-8 py-6 mt-5'>
                <h1
                className='text-2xl mb-5'
                >Shop By Brand</h1>
                {brands.map((elem, idx) => (
                    <div onClick={() => dispatch(updateType(elem.toLowerCase()))}
                    className={`${isDark ? 'text-white hover:bg-white hover:text-[#101019]' : 'text-[#101019] hover:bg-[#101019] hover:text-white'} h-[5vh] border-b-1 p-7 w-full justify-center items-center flex `}
                    key={idx}>
                        <Link to={`/products/${elem.toLowerCase()}`}>{elem}</Link>
                    </div>
                ))}
                <Link className={`${isDark ? 'text-white hover:bg-white hover:text-[#101019]' : 'text-[#101019] hover:bg-[#101019] hover:text-white'} h-[5vh] border-b-1 p-7 w-full justify-center items-center flex`} to={`/products/brands`}>View all</Link>
            </div>}
        </>
    )
}

export default Category