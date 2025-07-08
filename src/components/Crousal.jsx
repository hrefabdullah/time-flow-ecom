import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { imgs }   from '../assets/image.js'

const Crousal = () => {

  let [num, setNum] = useState(0)

  useEffect(() => {
    if(num > 200) return setNum(0)
    const int = setInterval(() => {
      setNum(num += 100)
    }, 5000);

    return () => clearInterval(int)
  }, [num])



  return (
    <>
      <motion.div
        animate={{ x: `-${num}%` }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        className='flex h-[30vh] md:h-[93vh] w-[100vw] relative'>
        {imgs.map((elem, idx) => (
          <img key={idx} className='w-screen h-full flex-shrink-0 object-cover object-[20%_90%]' src={elem} alt="" />
        ))}
      </motion.div>
    </>
  )
}

export default Crousal