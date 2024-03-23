import { Link } from 'react-router-dom'
const Close = () => {
  return (
    <nav className='fixed top-5 w-full z-10'>
      <div className='bg-light-gray relative w-max mx-auto grid items-center rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition backdrop-blur-lg group hover:bg-black hover:text-white'>
        <Link
          to='/'
          className='relative flex items-center justify-center h-12 w-12 rounded-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='rgb(0, 0, 0)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='group-hover:stroke-white'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </Link>
      </div>
    </nav>
  )
}
export default Close
