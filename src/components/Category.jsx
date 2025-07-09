import React from 'react'

const Category = ({ type }) => {

    const genders = [
        {
            type: "Men's Watches",
            url: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMHdhdGNofGVufDB8fDB8fHww'
        },
        {
            type: "Women's Watches",
            url: 'https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            type: 'Kids Watches',
            url: 'https://images.unsplash.com/photo-1590003168429-4b47c1dd9b08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMHdhdGNoZXN8ZW58MHx8MHx8fDA%3D'
        }
    ]
    const Brands = ['Timex', 'Titan', 'Fasttrack', 'Shop by Brand']

    return (
        <>
            {type === 'gender' ? 
            <div
            className='w-full h-[30vh] md:h-[40vh] flex'>
                {genders.map((elem, idx) => (
                    <div
                    className='relative flex w-full justify-center items-center text-white'
                    key={idx}>
                        <img
                        className={`absolute z-2 w-[100%] h-full object-cover hover:blur-xs`}
                        src={elem.url} alt={elem.type}  />
                        <h1
                        className='w-full text-shadow-2xl z-3'
                        >{elem.type}</h1>
                    </div>
                ))}
            </div> : 
            <div
            className='w-full h-[40vh] mt-4'>

            </div>}
        </>
    )
}

export default Category