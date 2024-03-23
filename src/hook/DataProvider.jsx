import {
  projects,
  projectsDetail,
  profiles,
  experiences,
  clients,
} from '../services/data'
import { createContext, useState, useEffect } from 'react'

const DataContext = createContext()
const DataProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState([])
  const [projectsDetailData, setProjectsDetailData] = useState([])
  const [profilesData, setProfilesData] = useState([])
  const [experiencesData, setExperiencesData] = useState([])
  const [clientsData, setClientsData] = useState([])

  useEffect(() => {
    setProjectsData(projects)
    setProjectsDetailData(projectsDetail)
    setProfilesData(profiles)
    setExperiencesData(experiences)
    setClientsData(clients)
  }, [])

  return (
    <DataContext.Provider
      value={{
        projects: projectsData,
        projectsDetail: projectsDetailData,
        profiles: profilesData,
        experiences: experiencesData,
        clients: clientsData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export { DataContext, DataProvider }
