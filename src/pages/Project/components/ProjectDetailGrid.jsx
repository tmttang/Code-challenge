import MotionInner from '../../../components/Layout/MotionInner'
const ProjectDetailGrid = ({ children, colSpans }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5'>
      {colSpans.map((colSpan, index) => (
        <div key={index} className={colSpan}>
          <MotionInner>{children[index]}</MotionInner>
        </div>
      ))}
    </div>
  )
}
export default ProjectDetailGrid
