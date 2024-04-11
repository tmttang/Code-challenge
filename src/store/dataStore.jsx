import { create } from 'zustand'
import {
  projects,
  projectsDetail,
  profiles,
  experiences,
  clients,
} from '../services/data'
import { useEffect } from 'react'

const useDataStore = create((set) => ({
  projects: [],
  projectsDetail: [],
  profiles: [],
  experiences: [],
  clients: [],
  loadData: () => {
    set((state) => ({
      projects: projects,
      projectsDetail: projectsDetail,
      profiles: profiles,
      experiences: experiences,
      clients: clients,
    }))
  },
}))

const DataProvider = ({ children }) => {
  const loadData = useDataStore((state) => state.loadData)

  useEffect(() => {
    loadData()
  }, [])

  return <>{children}</>
}

export { useDataStore, DataProvider }
