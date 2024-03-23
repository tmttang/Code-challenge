const Footer = ({ position }) => {
  return (
    <footer
      className={`container mx-auto p-10 flex flex-col justify-between items-center gap-4 sm:flex-row ${
        position === 'fixed' ? 'fixed inset-x-0 bottom-0' : 'relative'
      }`}
    >
      <div className='flex flex-row'>
        <p>© 2024 - All right reserved</p>
      </div>
      <div className='flex flex-row gap-4'>
        <p>Twitter</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
    </footer>
  )
}
export default Footer
