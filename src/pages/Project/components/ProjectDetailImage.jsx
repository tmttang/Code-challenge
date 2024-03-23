const ProjectDetailImage = ({ src, alt }) => {
  return (
    <div className='rounded-xl relative overflow-hidden h-full'>
      <img
        src={src}
        alt={alt}
        className='pointer-events-none user-select-none block w-full h-full object-cover object-center'
      />
    </div>
  )
}
export default ProjectDetailImage
