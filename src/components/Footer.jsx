export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col gap-2 items-center">
           <div className='flex items-center gap-[3px]'>
                <h1 className='font-semibold text-lg md:text-xl lg:text-2xl cursor-pointer '>T1MEFLOW</h1>
                <div className='h-3 lg:h-4.5 w-1 bg-blue-700 rotate-14'></div>
                <div className='h-3 lg:h-4.5 w-1 bg-blue-300 rotate-14 lg:mr-20'></div>
            </div>
            <p className="text-sm text-gray-400">
              Let the time, Flow!
            </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Store</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 w-full sm:w-auto flex-1 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} T1meFlow. All rights reserved.
      </div>
    </footer>
  );
}
