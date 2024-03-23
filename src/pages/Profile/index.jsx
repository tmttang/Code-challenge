import Navbar from '../../components/Navbar'
import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import ProfilesSection from './components/ProfilesSection'
import ExperiencesSection from './components/ExperiencesSection'
import ClientsSection from './components/ClientsSection'

const Profile = () => {
  return (
    <>
      <Navbar active='Profile' />
      <ProfilesSection />
      <ExperiencesSection />
      <ClientsSection />
      <Contacts />
      <Footer position='relative' />
    </>
  )
}
export default Profile
