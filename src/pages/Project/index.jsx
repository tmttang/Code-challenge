import { useContext } from 'react'
import { DataContext } from '../../hook/DataProvider'
import { ScrollRestoration, useParams } from 'react-router-dom'
import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import Close from '../../components/Close'
import ProjectDetailGrid from './components/ProjectDetailGrid'
import ProjectDetailImage from './components/ProjectDetailImage'
import ProjectDetailText from './components/ProjectDetailText'
import MotionContainer from '../../components/Layout/MotionContainer'
import NotFoundPage from '../NotFoundPage'

const Project = () => {
  const { projectSlug } = useParams()
  const projectName = projectSlug
    ? projectSlug.toLowerCase().replace(/\s/g, '')
    : ''

  const { projectsDetail } = useContext(DataContext)
  const project = projectsDetail[projectName]

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <>
      <Close />

      <ScrollRestoration />

      <ProjectDetailText headline={project.headline} title={project.title} />

      {project.videos ? (
        <>
          <MotionContainer>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 gap-5 p-5'>
                {project.videos.map((video, index) => (
                  <video
                    key={index}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='block w-full h-full object-cover object-center rounded-xl'
                  >
                    <source src={video} type='video/mp4' />
                  </video>
                ))}
              </div>
            </div>
          </MotionContainer>
        </>
      ) : null}

      <MotionContainer viewport={{ once: true, amount: 0.1 }}>
        <div className='container mx-auto'>
          <ProjectDetailGrid colSpans={project.colspan}>
            {project.images.map((imageUrl, index) => (
              <ProjectDetailImage
                key={index}
                src={imageUrl}
                alt={`image` + index}
              />
            ))}
          </ProjectDetailGrid>
        </div>
      </MotionContainer>

      <Contacts />
      <Footer />
    </>
  )
}

export default Project
