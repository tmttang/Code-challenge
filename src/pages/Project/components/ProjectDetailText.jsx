import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
const ProjectDetailText = ({ headline, title }) => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center min-h-70vh justify-center gap-10 py-20'>
          <MotionInner>
            <div className='text-black max-w-3xl h-auto text-center'>
              <h1>{headline}</h1>
            </div>
          </MotionInner>
          <MotionInner>
            <div className='flex flex-row items-center justify-center gap-6'>
              <p className='rounded-full bg-light-gray p-2'>{title}</p>
            </div>
          </MotionInner>
        </div>
      </div>
    </MotionContainer>
  )
}
export default ProjectDetailText
