import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MotionContainer from '../../components/Layout/MotionContainer'
import MotionInner from '../../components/Layout/MotionInner'

const Contact = () => {
  return (
    <>
      <Navbar active='Contact' />
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='flex flex-col item-center h-screen justify-center gap-10'>
            <div className='max-w 3xl h-auto text-center'>
              <MotionInner>
                <h2 className='text-black'>Let's work together.</h2>
              </MotionInner>
              <MotionInner>
                <h2 className='text-gray'>Get in touch.</h2>
              </MotionInner>
            </div>
          </div>
        </div>
      </MotionContainer>
      <Footer position='fixed' />
    </>
  )
}
export default Contact
