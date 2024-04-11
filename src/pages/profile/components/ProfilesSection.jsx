import { useDataStore } from '../../../store/dataStore'
import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'

const ProfilesSection = () => {
  const profiles = useDataStore((state) => state.profiles)
  return (
    <>
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center min-h-70vh justify-center gap-10 py-20'>
            <div className='text-black max-w-3xl h-auto text-center'>
              <MotionInner>
                <h1>Hey 👋🏼 I'm Oli </h1>
              </MotionInner>
            </div>
          </div>
        </div>
      </MotionContainer>
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5'>
            {profiles.map((profile) => {
              return (
                <MotionInner key={profile.id}>
                  <div className='rounded-xl relative overflow-hidden h-full'>
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className='pointer-events-none user-select-none block w-full h-full object-cover object-center'
                    />
                  </div>
                </MotionInner>
              )
            })}
          </div>
        </div>
      </MotionContainer>
    </>
  )
}
export default ProfilesSection
