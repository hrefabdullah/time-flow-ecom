import React from 'react'

const Quote = () => {
    return (
        <div 
        className='h-[20vh] md:h-[38vh] w-full flex items-center justify-around overflow-hidden border-b-1'>
                <img className='w-[120px] md:w-[400px] object-cover h-full ' src="https://images.unsplash.com/photo-1595780784502-64b04f614781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHRpbWV8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className='flex flex-col items-start p-5'>
                <h1 className="w-[250px] md:w-[500px] text-start text-sm md:text-2xl italic border-l-1 pl-2 text-shadow-md">"Time is what we want most, but what we use worst."</h1>
                <h1 className='text-xs md:text-lg mt-2 ml-3 text-blue-700'>William Penn</h1>
            </div>
        </div>
    )
}

export default Quote