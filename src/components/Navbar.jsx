import { Link } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'

const Nav = ({ active }) => {
  return (
    <nav className='fixed top-5 w-full z-10'>
      <ScrollRestoration />
      <div className='bg-light-gray relative w-max mx-auto h-12 grid grid-cols-3 gap-3 sm:gap-6 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition backdrop-blur-lg'>
        <Link
          to='/'
          className={`relative flex items-center justify-center h-10 px-4 sm:px-6 rounded-full ${
            active === 'Home' ? 'bg-white' : ''
          }`}
        >
          <span className='text-sm sm:text-base'>Home</span>
        </Link>
        <Link
          to='/profile'
          className={`relative flex items-center justify-center h-10 px-4 sm:px-6 rounded-full ${
            active === 'Profile' ? 'bg-white' : ''
          }`}
        >
          <span className='text-sm sm:text-base'>Profile</span>
        </Link>
        <Link
          to='/contact'
          className={`relative flex items-center justify-center h-10 px-4 sm:px-6 rounded-full ${
            active === 'Contact' ? 'bg-white' : ''
          }`}
        >
          <span className='text-sm sm:text-base'>Contact</span>
        </Link>
      </div>
    </nav>
  )
}
export default Nav
