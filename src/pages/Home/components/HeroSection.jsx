import MotionContainer from '../../../components/Layout/MotionContainer'
import MotionInner from '../../../components/Layout/MotionInner'

const HeroSection = () => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center min-h-70vh justify-center gap-6 py-20'>
          <MotionInner>
            <div className='text-black max-w-3xl h-auto text-center'>
              <h1>
                A brand and product designer working with clients globally
              </h1>
            </div>
          </MotionInner>
          <div className='hidden sm:block'>
            <MotionInner>
              <div className='flex flex-row items-center justify-center gap-6 '>
                <p>Expertise</p>
                <p className='rounded-full bg-light-gray p-2'>Branding</p>
                <p className='rounded-full bg-light-gray p-2'>Product</p>
                <p className='rounded-full bg-light-gray p-2'>Design Systems</p>
              </div>
            </MotionInner>
          </div>
        </div>
      </div>
    </MotionContainer>
  )
}
export default HeroSection
