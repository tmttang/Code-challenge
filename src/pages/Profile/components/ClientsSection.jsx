import { useContext } from 'react'
import { DataContext } from '../../../hook/DataProvider'
import MotionContainer from '../../../components/Layout/MotionContainer'
import MotionInner from '../../../components/Layout/MotionInner'

const ClientsSection = () => {
  const { clients } = useContext(DataContext)

  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6 py-20'>
          <p className='rounded-full bg-light-gray p-2'>Clients</p>
          <h2 className='text-center w-1/2 mx-auto'>Who I've worked with</h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 pb-20'>
          {clients.map((client) => {
            return (
              <MotionInner key={client.id}>
                <div
                  className={`text-center p-5 flex flex-col gap-4 ${
                    client.name === 'Here' ? 'invert-0' : 'invert'
                  }`}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    srcSet=''
                    className='pointer-events-none user-select-none block w-full h-full object-cover object-center'
                  />
                </div>
              </MotionInner>
            )
          })}
        </div>
      </div>
    </MotionContainer>
  )
}
export default ClientsSection
