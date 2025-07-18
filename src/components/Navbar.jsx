import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../features/theme/darkMode.js'
import { toggleSidebar } from '../features/sidebar/sidebar.js';
import { IoMoonSharp, IoSunny, IoSearch, IoMenuSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa"
import { toggleCart } from '../features/cart/cart.js';
import { toggleSearchBox } from '../features/search/searchBox.js';
import { DiAptana } from 'react-icons/di';
import { addItem } from '../features/search/searchInput.js';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch()
    const isDark = useSelector((state) => state.darkMode)

    const cartLength = useSelector((state) => state.userCart)

    const handleSidebar = () => {
        dispatch(toggleSidebar())
    }

    const handleCartSidebar = () => {
        dispatch( toggleCart() )
    }


    return (
        <div className={`${ isDark ? 'bg-[#101019] text-white' : 'bg-white text-[#101019]'} w-[100%] min-h-[60px] h-[8vh] md:h-[9vh] border-b-1 flex justify-between items-center md:px-[30px] px-[20px] z-5 `}>
            <Link to={'/'} className='flex items-center gap-[3px]'>
                <h1 className='font-semibold text-md md:text-lg lg:text-2xl cursor-pointer '>T1MEFLOW</h1>
                <div className='h-3 lg:h-4.5 w-1 bg-blue-700 rotate-14'></div>
                <div className='h-3 lg:h-4.5 w-1 bg-blue-300 rotate-14 lg:mr-20'></div>
            </Link>
            <ul className='hidden md:flex justify-between gap-4 text-sm lg:text-md cursor-pointer'>
                <Link to={'/'} className=' hover:border-b-1 py-2'>Home</Link>
                <Link to={'/store'} className=' hover:border-b-1 py-2'>Store</Link>
                <Link to={'/about'} className=' hover:border-b-1 py-2'>About us</Link>
                <Link to={'/contact'} className=' hover:border-b-1 py-2'>Contact us</Link>
            </ul>
            <div className='flex gap-4 text-lg lg:text-xl px-3 '>
                <div className={`bg-white flex w-max px-3 py-1 rounded-full border-[1.5px]`}>
                    <input onClick={() => dispatch(toggleSearchBox())} onChange={(e) => dispatch(addItem(e.target.value))} onSubmit={() => dispatch(toggleSearchBox())} className={`w-[80px] md:w-[160px] text-xs px-1 py-0.5 focus:outline-none text-[#101019]`} placeholder='Search' type="text" />
                    <button className='text-[#101019]'><IoSearch /></button>
                </div>
                <button className='hidden md:inline' onClick={() => dispatch(toggleDarkMode())}>
                    {isDark ? <IoSunny /> : <IoMoonSharp />}
                </button>
                <button onClick={ handleCartSidebar} className='mr-1 relative'>
                    <div className='absolute top-[18px] right-[9px] h-3.5 w-3.5 rounded-full bg-blue-700 text-xs place-content-center'>
                        <h1 className='text-white'>{cartLength.length}</h1>
                    </div>
                    <FaShoppingBag className='text-lg' />
                </button>
                <button onClick={handleSidebar} className=' md:hidden'><IoMenuSharp /></button>
            </div>
        </div>
    )
}

export default Navbar